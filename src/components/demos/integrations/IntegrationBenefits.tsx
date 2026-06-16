import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Zap } from 'lucide-react';
import { getTechLogo } from './icons/TechLogos';
import type { Integration } from './data/integrationsData';

interface IntegrationBenefitsProps {
  integration: Integration;
  language: 'es' | 'en';
}

export default function IntegrationBenefits({ integration, language }: IntegrationBenefitsProps) {
  const benefits = {
    'openai': {
      es: {
        capabilities: ['Chatbots inteligentes', 'Análisis de texto', 'Generación de contenido', 'Asistentes virtuales'],
        impact: 'Automatiza el 70% de consultas de soporte y mejora la experiencia del usuario con respuestas instantáneas y personalizadas.'
      },
      en: {
        capabilities: ['Intelligent chatbots', 'Text analysis', 'Content generation', 'Virtual assistants'],
        impact: 'Automates 70% of support queries and improves user experience with instant and personalized responses.'
      }
    },
    'twilio': {
      es: {
        capabilities: ['SMS automatizados', 'Llamadas programadas', 'Verificación 2FA', 'Notificaciones en tiempo real'],
        impact: 'Aumenta la tasa de conversión en un 40% con notificaciones oportunas y comunicación directa con clientes.'
      },
      en: {
        capabilities: ['Automated SMS', 'Scheduled calls', '2FA verification', 'Real-time notifications'],
        impact: 'Increases conversion rate by 40% with timely notifications and direct customer communication.'
      }
    },
    'stripe': {
      es: {
        capabilities: ['Pagos recurrentes', 'Facturación automática', 'Múltiples métodos de pago', 'Gestión de suscripciones'],
        impact: 'Reduce el abandono de carrito en 35% y procesa pagos de forma segura en más de 135 monedas.'
      },
      en: {
        capabilities: ['Recurring payments', 'Automatic billing', 'Multiple payment methods', 'Subscription management'],
        impact: 'Reduces cart abandonment by 35% and securely processes payments in over 135 currencies.'
      }
    },
    'google-calendar': {
      es: {
        capabilities: ['Reservas automáticas', 'Sincronización de eventos', 'Recordatorios', 'Gestión de disponibilidad'],
        impact: 'Elimina el 90% de la coordinación manual de citas y reduce las ausencias con recordatorios automáticos.'
      },
      en: {
        capabilities: ['Automatic bookings', 'Event synchronization', 'Reminders', 'Availability management'],
        impact: 'Eliminates 90% of manual appointment coordination and reduces no-shows with automatic reminders.'
      }
    },
    'whatsapp': {
      es: {
        capabilities: ['Mensajería masiva', 'Respuestas automáticas', 'Catálogos de productos', 'Atención 24/7'],
        impact: 'Alcanza a 2 mil millones de usuarios y logra tasas de apertura del 98% en tus comunicaciones.'
      },
      en: {
        capabilities: ['Mass messaging', 'Automatic responses', 'Product catalogs', '24/7 support'],
        impact: 'Reaches 2 billion users and achieves 98% open rates in your communications.'
      }
    },
    'hubspot': {
      es: {
        capabilities: ['CRM completo', 'Automatización de marketing', 'Pipeline de ventas', 'Análisis de clientes'],
        impact: 'Incrementa las ventas en 30% con seguimiento automatizado y gestión inteligente de leads.'
      },
      en: {
        capabilities: ['Complete CRM', 'Marketing automation', 'Sales pipeline', 'Customer analytics'],
        impact: 'Increases sales by 30% with automated tracking and intelligent lead management.'
      }
    }
  };

  const benefitData = benefits[integration.id as keyof typeof benefits]?.[language];

  if (!benefitData) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg"
    >
      {/* Header con logo */}
      <div className={`bg-gradient-to-r from-${integration.color}-50 to-${integration.color}-100 dark:from-${integration.color}-900/20 dark:to-${integration.color}-800/20 p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700`}>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-md">
            {getTechLogo(integration.icon, 'w-10 h-10')}
          </div>
          <div className="flex-1">
            <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
              {integration.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {integration.category[language]}
            </p>
          </div>
        </div>
      </div>

      {/* Capacidades */}
      <div className="p-4 sm:p-6 space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <h5 className="font-semibold text-gray-900 dark:text-white">
              {language === 'es' ? 'Nuevas capacidades' : 'New capabilities'}
            </h5>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {benefitData.capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Impacto */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex-1">
              <h6 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                {language === 'es' ? 'Impacto en tu negocio' : 'Business impact'}
              </h6>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                {benefitData.impact}
              </p>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('cancelIntegration'))}
            className="flex-1 px-6 py-3 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold transition-all"
          >
            {language === 'es' ? 'Cancelar' : 'Cancel'}
          </button>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('confirmIntegration'))}
            className="flex-1 px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
          >
            {language === 'es' ? 'Agregar a mi producto' : 'Add to my product'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
