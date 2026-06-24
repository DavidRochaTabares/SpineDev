import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone } from 'lucide-react';
import type { LeadCaptureData, ConversationContext } from '../../types/lead.types';

const SUPABASE_URL = 'https://kexkabqutkctqsizquwt.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_LKB1-Tb1KOGaJV1gA09hUQ_nHQDvIRu';

interface LeadCaptureFormProps {
  language: 'es' | 'en';
  context: ConversationContext;
  onSubmit: () => void;
  onCancel: () => void;
}

export default function LeadCaptureForm({ language, context, onSubmit, onCancel }: LeadCaptureFormProps) {
  const [formData, setFormData] = useState<LeadCaptureData>({
    name: '',
    email: '',
    whatsapp: ''
  });

  const [errors, setErrors] = useState<Partial<LeadCaptureData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<LeadCaptureData> = {};

    if (!formData.name.trim()) {
      newErrors.name = language === 'es' ? 'Nombre requerido' : 'Name required';
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'es' ? 'Email requerido' : 'Email required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'es' ? 'Email inválido' : 'Invalid email';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = language === 'es' ? 'WhatsApp requerido' : 'WhatsApp required';
    } else if (formData.whatsapp.length < 10) {
      newErrors.whatsapp = language === 'es' ? 'Número inválido' : 'Invalid number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
          method: 'POST',
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            whatsapp: formData.whatsapp,
            language: context.language,
            detected_service: context.detectedService || null,
            visited_demos: context.visitedDemos.join(', ') || null,
            user_request: context.userRequest || null,
            project_summary: context.projectSummary || null
          })
        });

        if (!response.ok) throw new Error('Failed to save');
        
        onSubmit();
      } catch (error) {
        console.error('Error saving lead:', error);
        alert(language === 'es' ? 'Error al guardar. Intenta de nuevo.' : 'Error saving. Try again.');
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4"
    >
      <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
        {language === 'es' 
          ? 'Me gustaría ayudarte a revisar el caso con más detalle'
          : 'I\'d like to help you review the case in more detail'}
      </h4>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name */}
        <div>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={language === 'es' ? 'Tu nombre' : 'Your name'}
              className="w-full pl-10 pr-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-gray-900 dark:text-white"
            />
          </div>
          {errors.name && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={language === 'es' ? 'Tu email' : 'Your email'}
              className="w-full pl-10 pr-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-gray-900 dark:text-white"
            />
          </div>
          {errors.email && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.email}</p>}
        </div>

        {/* WhatsApp */}
        <div>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              placeholder={language === 'es' ? 'WhatsApp (+57...)' : 'WhatsApp (+57...)'}
              className="w-full pl-10 pr-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-gray-900 dark:text-white"
            />
          </div>
          {errors.whatsapp && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.whatsapp}</p>}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
          >
            {language === 'es' ? 'Cancelar' : 'Cancel'}
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm font-semibold"
          >
            {language === 'es' ? 'Enviar' : 'Submit'}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
