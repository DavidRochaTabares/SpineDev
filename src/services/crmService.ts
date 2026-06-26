import type { Lead } from '../types/crm.types';

const SUPABASE_URL = import.meta.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY;

export class CRMService {
  private password: string | null = null;

  // Autenticar con contraseña
  authenticate(password: string): boolean {
    const CRM_PASSWORD = import.meta.env.PUBLIC_CRM_PASSWORD;
    
    if (!CRM_PASSWORD) {
      console.error('CRM_PASSWORD not configured');
      return false;
    }

    if (password === CRM_PASSWORD) {
      this.password = password;
      // Guardar en sessionStorage
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('crm_auth', password);
      }
      return true;
    }

    return false;
  }

  // Verificar si está autenticado
  isAuthenticated(): boolean {
    // Si ya tenemos la contraseña en memoria, está autenticado
    if (this.password) return true;
    
    // Verificar sessionStorage
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('crm_auth');
      
      if (stored) {
        // Solo verificar que la contraseña guardada sea válida
        const CRM_PASSWORD = import.meta.env.PUBLIC_CRM_PASSWORD;
        
        if (stored === CRM_PASSWORD) {
          this.password = stored;
          return true;
        } else {
          // Contraseña inválida, limpiar
          sessionStorage.removeItem('crm_auth');
        }
      }
    }
    
    return false;
  }

  // Cerrar sesión
  logout(): void {
    this.password = null;
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('crm_auth');
    }
  }

  // Obtener todos los leads
  async getLeads(): Promise<Lead[]> {
    if (!this.isAuthenticated()) {
      throw new Error('Not authenticated');
    }

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/leads?select=*&order=created_at.desc`,
      {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch leads');
    }

    return response.json();
  }

  // Actualizar lead
  async updateLead(id: string, status?: Lead['status'], note?: string): Promise<Lead> {
    if (!this.isAuthenticated()) {
      throw new Error('Not authenticated');
    }

    const updateData: any = {};

    // Actualizar status si se proporciona
    if (status) {
      updateData.status = status;
    }

    // Agregar nota al historial si se proporciona
    if (note && note.trim()) {
      // Primero obtener las notas actuales
      const fetchResponse = await fetch(
        `${SUPABASE_URL}/rest/v1/leads?id=eq.${id}&select=internal_notes`,
        {
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (!fetchResponse.ok) {
        throw new Error('Failed to fetch current notes');
      }

      const [lead] = await fetchResponse.json();
      const currentNotes = lead?.internal_notes || '';

      // Crear nueva nota con timestamp
      const timestamp = new Date().toLocaleString('es-CO', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });

      const newNote = `[${timestamp}] ${note.trim()}`;

      // Agregar al historial
      updateData.internal_notes = currentNotes 
        ? `${currentNotes}\n${newNote}`
        : newNote;
    }

    // Si no hay nada que actualizar
    if (Object.keys(updateData).length === 0) {
      throw new Error('No data to update');
    }

    // Actualizar en Supabase
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/leads?id=eq.${id}`,
      {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(updateData)
      }
    );

    if (!response.ok) {
      throw new Error('Failed to update lead');
    }

    const [updatedLead] = await response.json();
    return updatedLead;
  }
}

// Singleton instance
let crmServiceInstance: CRMService | null = null;

export function getCRMService(): CRMService {
  if (!crmServiceInstance) {
    crmServiceInstance = new CRMService();
  }
  return crmServiceInstance;
}
