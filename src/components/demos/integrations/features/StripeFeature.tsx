import { motion } from 'framer-motion';
import { CreditCard, Check, Sparkles, Lock } from 'lucide-react';

interface StripeFeatureProps {
  language: 'es' | 'en';
}

export default function StripeFeature({ language }: StripeFeatureProps) {
  const benefits = language === 'es' 
    ? [
        'Cobros online',
        'Suscripciones',
        'Facturación',
        'Pagos internacionales'
      ]
    : [
        'Online payments',
        'Subscriptions',
        'Invoicing',
        'International payments'
      ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700 rounded-xl p-6 text-white"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-bold">
              {language === 'es' ? 'Pagos' : 'Payments'}
            </h4>
            <p className="text-base text-purple-100">
              {language === 'es' ? 'Capacidad desbloqueada' : 'Capability unlocked'}
            </p>
          </div>
        </div>
        <p className="text-base text-purple-50">
          {language === 'es' 
            ? 'Tu plataforma ahora puede procesar pagos de forma segura'
            : 'Your platform can now process payments securely'}
        </p>
      </motion.div>

      {/* Checkout Demo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 border-b border-gray-200 dark:border-gray-700">
          <h5 className="font-semibold text-gray-900 dark:text-white mb-4">
            {language === 'es' ? 'Plan Profesional' : 'Professional Plan'}
          </h5>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">$29</span>
            <span className="text-gray-600 dark:text-gray-400">
              {language === 'es' ? '/mes' : '/month'}
            </span>
          </div>
          <ul className="mt-4 space-y-2">
            {[
              language === 'es' ? 'Usuarios ilimitados' : 'Unlimited users',
              language === 'es' ? 'Soporte prioritario' : 'Priority support',
              language === 'es' ? 'Integraciones avanzadas' : 'Advanced integrations'
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-base text-gray-700 dark:text-gray-300">
                <Check className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
              {language === 'es' ? 'Número de tarjeta' : 'Card number'}
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="4242 4242 4242 4242"
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-base pr-10"
                disabled
              />
              <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                {language === 'es' ? 'Vencimiento' : 'Expiry'}
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-base"
                disabled
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                CVC
              </label>
              <input
                type="text"
                placeholder="123"
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-base"
                disabled
              />
            </div>
          </div>

          <button className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
            <Lock className="w-5 h-5" />
            {language === 'es' ? 'Procesar Pago - $29' : 'Process Payment - $29'}
          </button>

          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            {language === 'es' 
              ? 'Pago seguro procesado por Stripe'
              : 'Secure payment processed by Stripe'}
          </p>
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-purple-50 dark:bg-purple-900/10 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-800"
      >
        <h5 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          {language === 'es' ? 'Capacidades Agregadas' : 'Added Capabilities'}
        </h5>
        <div className="grid sm:grid-cols-2 gap-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg p-3"
            >
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span className="text-base font-medium text-gray-800 dark:text-gray-200">
                {benefit}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
