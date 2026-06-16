import { motion } from 'framer-motion';
import { Users, TrendingUp, UserPlus, Sparkles, CheckCircle } from 'lucide-react';

interface HubSpotFeatureProps {
  language: 'es' | 'en';
}

export default function HubSpotFeature({ language }: HubSpotFeatureProps) {
  const benefits = language === 'es' 
    ? [
        'Gestión de leads',
        'Pipeline de ventas',
        'Seguimiento de clientes',
        'Organización comercial'
      ]
    : [
        'Lead management',
        'Sales pipeline',
        'Customer tracking',
        'Sales organization'
      ];

  const leads = [
    {
      name: 'Ana Martínez',
      company: 'Tech Solutions',
      status: 'hot',
      value: '$15,000'
    },
    {
      name: 'Roberto Silva',
      company: 'Digital Corp',
      status: 'warm',
      value: '$8,500'
    },
    {
      name: 'Laura Pérez',
      company: 'Innovation Labs',
      status: 'cold',
      value: '$5,200'
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      hot: 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-300 dark:border-red-700',
      warm: 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-700',
      cold: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700'
    };
    return colors[status as keyof typeof colors];
  };

  const getStatusLabel = (status: string) => {
    const labels = {
      hot: { es: 'Caliente', en: 'Hot' },
      warm: { es: 'Tibio', en: 'Warm' },
      cold: { es: 'Frío', en: 'Cold' }
    };
    return labels[status as keyof typeof labels][language];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 rounded-xl p-6 text-white"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-bold">
              CRM
            </h4>
            <p className="text-sm text-orange-100">
              {language === 'es' ? 'Capacidad desbloqueada' : 'Capability unlocked'}
            </p>
          </div>
        </div>
        <p className="text-sm text-orange-50">
          {language === 'es' 
            ? 'Tu plataforma ahora puede gestionar leads y pipeline de ventas'
            : 'Your platform can now manage leads and sales pipeline'}
        </p>
      </motion.div>

      {/* Pipeline Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: { es: 'Leads Activos', en: 'Active Leads' }, value: '24', icon: UserPlus },
          { label: { es: 'En Negociación', en: 'In Negotiation' }, value: '8', icon: TrendingUp },
          { label: { es: 'Cerrados', en: 'Closed' }, value: '12', icon: CheckCircle }
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {stat.label[language]}
                </p>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Leads List */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        <div className="bg-orange-50 dark:bg-orange-900/20 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h5 className="font-semibold text-gray-900 dark:text-white">
              {language === 'es' ? 'Pipeline de Ventas' : 'Sales Pipeline'}
            </h5>
            <button className="px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-medium transition-colors">
              {language === 'es' ? '+ Nuevo Lead' : '+ New Lead'}
            </button>
          </div>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {leads.map((lead, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="p-4 hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-orange-700 dark:text-orange-300">
                      {lead.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h6 className="font-semibold text-gray-900 dark:text-white">
                      {lead.name}
                    </h6>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {lead.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(lead.status)}`}>
                    {getStatusLabel(lead.status)}
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {lead.value}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-orange-50 dark:bg-orange-900/10 rounded-xl p-6 border-2 border-orange-200 dark:border-orange-800"
      >
        <h5 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          {language === 'es' ? 'Capacidades Agregadas' : 'Added Capabilities'}
        </h5>
        <div className="grid sm:grid-cols-2 gap-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 + index * 0.1 }}
              className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg p-3"
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
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
