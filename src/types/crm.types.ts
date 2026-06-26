export type LeadStatus = 'nuevo' | 'contactado' | 'propuesta' | 'cliente' | 'cerrado';

export interface Lead {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  language: 'es' | 'en';
  detected_service?: string;
  user_request?: string;
  project_summary?: string;
  visited_demos?: string[];
  status: LeadStatus;
  internal_notes?: string;
  created_at: string;
}

export interface LeadStats {
  nuevo: number;
  contactado: number;
  propuesta: number;
  cliente: number;
  cerrado: number;
  total: number;
}

export interface LeadFilters {
  search: string;
  status: LeadStatus | 'all';
  service: string;
  language: 'es' | 'en' | 'all';
  demo: string;
  dateFrom?: string;
  dateTo?: string;
}

export type SortField = 'created_at' | 'name' | 'status';
export type SortOrder = 'asc' | 'desc';
