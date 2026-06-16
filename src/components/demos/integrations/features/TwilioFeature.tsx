import { motion } from 'framer-motion';
import { Video, MessageSquare, Bell, Sparkles, CheckCircle } from 'lucide-react';

interface TwilioFeatureProps {
  language: 'es' | 'en';
}

export default function TwilioFeature({ language }: TwilioFeatureProps) {
  const benefits = language === 'es' 
    ? [
        'Videollamadas',
        'SMS y notificaciones',
        'Verificaciones',
        'Comunicación en tiempo real'
      ]
    : [
        'Video calls',
        'SMS and notifications',
        'Verifications',
        'Real-time communication'
      ];

  const communicationOptions = [
    {
      icon: Video,
      title: { es: 'Videollamadas', en: 'Video Calls' },
      description: { es: 'Reuniones en tiempo real', en: 'Real-time meetings' }
    },
    {
      icon: MessageSquare,
      title: { es: 'SMS', en: 'SMS' },
      description: { es: 'Mensajes directos', en: 'Direct messages' }
    },
    {
      icon: Bell,
      title: { es: 'Notificaciones', en: 'Notifications' },
      description: { es: 'Alertas automáticas', en: 'Automatic alerts' }
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-red-500 to-pink-600 dark:from-red-600 dark:to-pink-700 rounded-xl p-6 text-white"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <Video className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-bold">
              {language === 'es' ? 'Comunicaciones' : 'Communications'}
            </h4>
            <p className="text-sm text-red-100">
              {language === 'es' ? 'Capacidad desbloqueada' : 'Capability unlocked'}
            </p>
          </div>
        </div>
        <p className="text-sm text-red-50">
          {language === 'es' 
            ? 'Tu plataforma ahora puede comunicarse con clientes en tiempo real'
            : 'Your platform can now communicate with customers in real-time'}
        </p>
      </motion.div>

      {/* Communication Options */}
      <div className="grid md:grid-cols-3 gap-4">
        {communicationOptions.map((option, index) => {
          const Icon = option.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-6 hover:border-red-400 dark:hover:border-red-500 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                {option.title[language]}
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {option.description[language]}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Demo Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-6"
      >
        <h5 className="font-semibold text-gray-900 dark:text-white mb-4">
          {language === 'es' ? 'Ejemplo: Enviar SMS' : 'Example: Send SMS'}
        </h5>
        <div className="space-y-3">
          <input
            type="tel"
            placeholder="+1 (555) 123-4567"
            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-sm"
            disabled
          />
          <textarea
            placeholder={language === 'es' ? 'Tu mensaje aquí...' : 'Your message here...'}
            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-sm resize-none"
            rows={3}
            disabled
          />
          <button className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
            <CheckCircle className="w-5 h-5" />
            {language === 'es' ? 'Enviar SMS' : 'Send SMS'}
          </button>
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-red-50 dark:bg-red-900/10 rounded-xl p-6 border-2 border-red-200 dark:border-red-800"
      >
        <h5 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-red-600 dark:text-red-400" />
          {language === 'es' ? 'Capacidades Agregadas' : 'Added Capabilities'}
        </h5>
        <div className="grid sm:grid-cols-2 gap-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg p-3"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {benefit}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
