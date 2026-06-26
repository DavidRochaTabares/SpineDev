import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Mail, Phone, MessageCircle, Copy, Check, Save, Calendar, Globe, Tag, FileText } from 'lucide-react';
import type { Lead } from '../../types/crm.types';
import { getCRMService } from '../../services/crmService';

interface LeadDetailDrawerProps {
  lead: Lead;
  onClose: () => void;
  onUpdate: (lead: Lead) => void;
  language?: 'es' | 'en';
}

export default function LeadDetailDrawer({ lead, onClose, onUpdate, language = 'es' }: LeadDetailDrawerProps) {
  const [status, setStatus] = useState(lead.status);
  const [newNote, setNewNote] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const t = {
    es: {
      title: 'Detalle del Lead',
      close: 'Cerrar',
      contactInfo: 'Información de Contacto',
      projectInfo: 'Información del Proyecto',
      status: 'Estado',
      notes: 'Notas Internas',
      addNote: 'Agregar nota...',
      save: 'Guardar cambios',
      saving: 'Guardando...',
      name: 'Nombre',
      email: 'Email',
      whatsapp: 'WhatsApp',
      language: 'Idioma',
      service: 'Servicio detectado',
      request: 'Solicitud original',
      summary: 'Resumen del proyecto',
      demos: 'Demos visitadas',
      date: 'Fecha de registro',
      copyEmail: 'Copiar email',
      copyPhone: 'Copiar teléfono',
      openWhatsApp: 'Abrir WhatsApp',
      copied: 'Copiado',
      noNotes: 'Sin notas',
      noDemos: 'No visitó demos',
      nuevo: 'Nuevo',
      contactado: 'Contactado',
      propuesta: 'Propuesta',
      cliente: 'Cliente',
      cerrado: 'Cerrado'
    },
    en: {
      title: 'Lead Detail',
      close: 'Close',
      contactInfo: 'Contact Information',
      projectInfo: 'Project Information',
      status: 'Status',
      notes: 'Internal Notes',
      addNote: 'Add note...',
      save: 'Save changes',
      saving: 'Saving...',
      name: 'Name',
      email: 'Email',
      whatsapp: 'WhatsApp',
      language: 'Language',
      service: 'Detected service',
      request: 'Original request',
      summary: 'Project summary',
      demos: 'Visited demos',
      date: 'Registration date',
      copyEmail: 'Copy email',
      copyPhone: 'Copy phone',
      openWhatsApp: 'Open WhatsApp',
      copied: 'Copied',
      noNotes: 'No notes',
      noDemos: 'No demos visited',
      nuevo: 'New',
      contactado: 'Contacted',
      propuesta: 'Proposal',
      cliente: 'Client',
      cerrado: 'Closed'
    }
  };

  const copyToClipboard = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hola ${lead.name}, te contacto desde SpineDev.`);
    window.open(`https://wa.me/${lead.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const crmService = getCRMService();
      const updatedLead = await crmService.updateLead(
        lead.id,
        status !== lead.status ? status : undefined,
        newNote.trim() || undefined
      );
      onUpdate(updatedLead);
      setNewNote('');
    } catch (error) {
      console.error('Error updating lead:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'es' ? 'es-CO' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: Lead['status']) => {
    const colors = {
      nuevo: 'bg-blue-500 hover:bg-blue-600',
      contactado: 'bg-cyan-500 hover:bg-cyan-600',
      propuesta: 'bg-orange-500 hover:bg-orange-600',
      cliente: 'bg-green-500 hover:bg-green-600',
      cerrado: 'bg-gray-500 hover:bg-gray-600'
    };
    return colors[status];
  };

  const getStatusBorderColor = (s: Lead['status']) => {
    const colors = {
      nuevo: 'border-blue-500 hover:border-blue-600',
      contactado: 'border-cyan-500 hover:border-cyan-600',
      propuesta: 'border-orange-500 hover:border-orange-600',
      cliente: 'border-green-500 hover:border-green-600',
      cerrado: 'border-gray-500 hover:border-gray-600'
    };
    return colors[s];
  };

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-50"
      />

      {/* Drawer */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 bottom-0 w-full sm:w-[600px] bg-white dark:bg-gray-800 shadow-2xl z-50 overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {t[language].title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Contact Info */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              {t[language].contactInfo}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t[language].name}</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{lead.name}</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="flex-1">
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t[language].email}</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{lead.email}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(lead.email, 'email')}
                  className="ml-2 p-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                  title={t[language].copyEmail}
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="flex-1">
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t[language].whatsapp}</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{lead.whatsapp}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => copyToClipboard(lead.whatsapp, 'phone')}
                    className="p-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                    title={t[language].copyPhone}
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={openWhatsApp}
                    className="p-2 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors"
                    title={t[language].openWhatsApp}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <Globe className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t[language].language}</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white uppercase">{lead.language}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <Calendar className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t[language].date}</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{formatDate(lead.created_at)}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Project Info */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              {t[language].projectInfo}
            </h3>
            <div className="space-y-3">
              {lead.detected_service && (
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{t[language].service}</p>
                  <p className="text-sm text-gray-900 dark:text-white">{lead.detected_service}</p>
                </div>
              )}

              {lead.user_request && (
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{t[language].request}</p>
                  <p className="text-sm text-gray-900 dark:text-white">{lead.user_request}</p>
                </div>
              )}

              {lead.project_summary && (
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{t[language].summary}</p>
                  <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">{lead.project_summary}</p>
                </div>
              )}

              {lead.visited_demos && Array.isArray(lead.visited_demos) && lead.visited_demos.length > 0 && (
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{t[language].demos}</p>
                  <div className="flex flex-wrap gap-2">
                    {lead.visited_demos.map((demo, i) => (
                      <span key={i} className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full">
                        {demo}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Status */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Tag className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              {t[language].status}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {(['nuevo', 'contactado', 'propuesta', 'cliente', 'cerrado'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    status === s
                      ? `${getStatusColor(s)} border-transparent text-white`
                      : `border-2 ${getStatusBorderColor(s)} text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800`
                  }`}
                >
                  <span className="text-sm font-medium">{t[language][s]}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Notes */}
          <section>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              {t[language].notes}
            </h3>
            
            {/* Existing Notes */}
            {lead.internal_notes ? (
              <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-sans">
                  {lead.internal_notes}
                </pre>
              </div>
            ) : (
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 italic">{t[language].noNotes}</p>
            )}

            {/* Add Note */}
            <textarea
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder={t[language].addNote}
              rows={3}
              className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white resize-none"
            />
          </section>

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={isSaving || (status === lead.status && !newNote.trim())}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white rounded-xl font-semibold transition-all duration-200 disabled:cursor-not-allowed"
          >
            {isSaving ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>{t[language].saving}</span>
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                <span>{t[language].save}</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </>
  );
}
