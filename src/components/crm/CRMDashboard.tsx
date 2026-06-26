import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, Search, Filter, Download, RefreshCw } from 'lucide-react';
import type { Lead, LeadStats as LeadStatsType, LeadFilters, SortField, SortOrder } from '../../types/crm.types';
import { getCRMService } from '../../services/crmService';
import LeadStatsComponent from './LeadStats';
import LeadTable from './LeadTable';
import LeadDetailDrawer from './LeadDetailDrawer';

interface CRMDashboardProps {
  language?: 'es' | 'en';
}

export default function CRMDashboard({ language = 'es' }: CRMDashboardProps) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | Lead['status']>('all');
  const [sortField, setSortField] = useState<SortField>('created_at');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  // Verificar autenticación al montar
  useEffect(() => {
    const crmService = getCRMService();
    if (!crmService.isAuthenticated()) {
      window.location.href = '/crm';
    }
  }, []);

  const t = {
    es: {
      title: 'Panel de Leads',
      logout: 'Cerrar sesión',
      search: 'Buscar por nombre, email o teléfono...',
      refresh: 'Actualizar',
      export: 'Exportar',
      filter: 'Filtrar',
      all: 'Todos',
      nuevo: 'Nuevos',
      contactado: 'Contactados',
      propuesta: 'Propuestas',
      cliente: 'Clientes',
      cerrado: 'Cerrados',
      noLeads: 'No hay leads para mostrar',
      loading: 'Cargando leads...'
    },
    en: {
      title: 'Leads Panel',
      logout: 'Logout',
      search: 'Search by name, email or phone...',
      refresh: 'Refresh',
      export: 'Export',
      filter: 'Filter',
      all: 'All',
      nuevo: 'New',
      contactado: 'Contacted',
      propuesta: 'Proposals',
      cliente: 'Clients',
      cerrado: 'Closed',
      noLeads: 'No leads to show',
      loading: 'Loading leads...'
    }
  };

  // Cargar leads
  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const crmService = getCRMService();
      const data = await crmService.getLeads();
      setLeads(data);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Calcular estadísticas
  const stats: LeadStatsType = useMemo(() => {
    return {
      nuevo: leads.filter(l => l.status === 'nuevo').length,
      contactado: leads.filter(l => l.status === 'contactado').length,
      propuesta: leads.filter(l => l.status === 'propuesta').length,
      cliente: leads.filter(l => l.status === 'cliente').length,
      cerrado: leads.filter(l => l.status === 'cerrado').length,
      total: leads.length
    };
  }, [leads]);

  // Filtrar y ordenar leads
  const filteredLeads = useMemo(() => {
    let filtered = [...leads];

    // Filtro de búsqueda
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(lead =>
        lead.name.toLowerCase().includes(term) ||
        lead.email.toLowerCase().includes(term) ||
        lead.whatsapp.includes(term)
      );
    }

    // Filtro de estado
    if (statusFilter !== 'all') {
      filtered = filtered.filter(lead => lead.status === statusFilter);
    }

    // Ordenar
    filtered.sort((a, b) => {
      let aVal, bVal;

      if (sortField === 'created_at') {
        aVal = new Date(a.created_at).getTime();
        bVal = new Date(b.created_at).getTime();
      } else if (sortField === 'name') {
        aVal = a.name.toLowerCase();
        bVal = b.name.toLowerCase();
      } else {
        aVal = a.status;
        bVal = b.status;
      }

      if (sortOrder === 'asc') {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });

    return filtered;
  }, [leads, searchTerm, statusFilter, sortField, sortOrder]);

  // Logout
  const handleLogout = () => {
    const crmService = getCRMService();
    crmService.logout();
    window.location.href = '/crm';
  };

  // Actualizar lead
  const handleUpdateLead = (updatedLead: Lead) => {
    setLeads(prev => prev.map(l => l.id === updatedLead.id ? updatedLead : l));
    setSelectedLead(updatedLead);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <img 
                src="/spinedev logo horizontal azul.png" 
                alt="SpineDev" 
                className="h-8 w-auto dark:hidden" 
              />
              <img 
                src="/Spinedev logo horizontal blanco.png" 
                alt="SpineDev" 
                className="h-8 w-auto hidden dark:block" 
              />
              <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-700"></div>
              <h1 className="hidden sm:block text-lg font-semibold text-gray-900 dark:text-white">
                {t[language].title}
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={fetchLeads}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                title={t[language].refresh}
              >
                <RefreshCw className="w-5 h-5" />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">{t[language].logout}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="mb-8">
          <LeadStatsComponent stats={stats} language={language} />
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t[language].search}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
              />
            </div>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
            >
              <option value="all">{t[language].all}</option>
              <option value="nuevo">{t[language].nuevo}</option>
              <option value="contactado">{t[language].contactado}</option>
              <option value="propuesta">{t[language].propuesta}</option>
              <option value="cliente">{t[language].cliente}</option>
              <option value="cerrado">{t[language].cerrado}</option>
            </select>
          </div>
        </div>

        {/* Table */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400">{t[language].loading}</p>
            </div>
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">{t[language].noLeads}</p>
          </div>
        ) : (
          <LeadTable
            leads={filteredLeads}
            onSelectLead={setSelectedLead}
            language={language}
            sortField={sortField}
            sortOrder={sortOrder}
            onSort={(field: SortField) => {
              if (field === sortField) {
                setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
              } else {
                setSortField(field);
                setSortOrder('desc');
              }
            }}
          />
        )}
      </main>

      {/* Lead Detail Drawer */}
      <AnimatePresence>
        {selectedLead && (
          <LeadDetailDrawer
            lead={selectedLead}
            onClose={() => setSelectedLead(null)}
            onUpdate={handleUpdateLead}
            language={language}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
