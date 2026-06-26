import { motion } from 'framer-motion';
import { ArrowUpDown, ArrowUp, ArrowDown, Eye } from 'lucide-react';
import type { Lead, SortField, SortOrder } from '../../types/crm.types';

interface LeadTableProps {
  leads: Lead[];
  onSelectLead: (lead: Lead) => void;
  language?: 'es' | 'en';
  sortField: SortField;
  sortOrder: SortOrder;
  onSort: (field: SortField) => void;
}

export default function LeadTable({ 
  leads, 
  onSelectLead, 
  language = 'es',
  sortField,
  sortOrder,
  onSort
}: LeadTableProps) {
  const t = {
    es: {
      name: 'Nombre',
      email: 'Email',
      whatsapp: 'WhatsApp',
      status: 'Estado',
      service: 'Servicio',
      date: 'Fecha',
      actions: 'Acciones',
      view: 'Ver',
      nuevo: 'Nuevo',
      contactado: 'Contactado',
      propuesta: 'Propuesta',
      cliente: 'Cliente',
      cerrado: 'Cerrado'
    },
    en: {
      name: 'Name',
      email: 'Email',
      whatsapp: 'WhatsApp',
      status: 'Status',
      service: 'Service',
      date: 'Date',
      actions: 'Actions',
      view: 'View',
      nuevo: 'New',
      contactado: 'Contacted',
      propuesta: 'Proposal',
      cliente: 'Client',
      cerrado: 'Closed'
    }
  };

  const getStatusColor = (status: Lead['status']) => {
    const colors = {
      nuevo: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      contactado: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
      propuesta: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
      cliente: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      cerrado: 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400'
    };
    return colors[status];
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'es' ? 'es-CO' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ArrowUpDown className="w-4 h-4" />;
    return sortOrder === 'asc' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => onSort('name')}
                  className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {t[language].name}
                  <SortIcon field="name" />
                </button>
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                {t[language].email}
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                {t[language].whatsapp}
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => onSort('status')}
                  className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {t[language].status}
                  <SortIcon field="status" />
                </button>
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">
                {t[language].service}
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => onSort('created_at')}
                  className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {t[language].date}
                  <SortIcon field="created_at" />
                </button>
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-300">
                {t[language].actions}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {leads.map((lead, index) => (
              <motion.tr
                key={lead.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors cursor-pointer"
                onClick={() => onSelectLead(lead)}
              >
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                  {lead.name}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                  {lead.email}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                  {lead.whatsapp}
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                    {t[language][lead.status]}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                  {lead.detected_service || '-'}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                  {formatDate(lead.created_at)}
                </td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectLead(lead);
                    }}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-sm text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    {t[language].view}
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
