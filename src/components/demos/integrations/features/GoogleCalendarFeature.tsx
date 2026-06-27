import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Sparkles, Plus } from 'lucide-react';

interface GoogleCalendarFeatureProps {
  language: 'es' | 'en';
}

export default function GoogleCalendarFeature({ language }: GoogleCalendarFeatureProps) {
  const benefits = language === 'es' 
    ? [
        'Agendamiento',
        'Reservas',
        'Disponibilidad',
        'Gestión de reuniones'
      ]
    : [
        'Scheduling',
        'Bookings',
        'Availability',
        'Meeting management'
      ];

  const upcomingEvents = [
    {
      title: { es: 'Reunión con cliente', en: 'Client meeting' },
      time: '10:00 AM',
      attendees: 3
    },
    {
      title: { es: 'Presentación de proyecto', en: 'Project presentation' },
      time: '2:00 PM',
      attendees: 5
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-500 to-cyan-600 dark:from-blue-600 dark:to-cyan-700 rounded-xl p-6 text-white"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-bold">
              {language === 'es' ? 'Agenda' : 'Calendar'}
            </h4>
            <p className="text-sm text-blue-100">
              {language === 'es' ? 'Capacidad desbloqueada' : 'Capability unlocked'}
            </p>
          </div>
        </div>
        <p className="text-sm text-blue-50">
          {language === 'es' 
            ? 'Tu plataforma ahora puede gestionar reuniones y disponibilidad'
            : 'Your platform can now manage meetings and availability'}
        </p>
      </motion.div>

      {/* Calendar View */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        <div className="bg-blue-50 dark:bg-blue-900/20 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h5 className="font-semibold text-gray-900 dark:text-white">
              {language === 'es' ? 'Próximas Reuniones' : 'Upcoming Meetings'}
            </h5>
            <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium flex items-center gap-1 transition-colors">
              <Plus className="w-4 h-4" />
              {language === 'es' ? 'Nueva' : 'New'}
            </button>
          </div>
        </div>

        <div className="p-6 space-y-3">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h6 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {event.title[language]}
                </h6>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {event.attendees} {language === 'es' ? 'asistentes' : 'attendees'}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Schedule Meeting */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-6"
      >
        <h5 className="font-semibold text-gray-900 dark:text-white mb-4">
          {language === 'es' ? 'Agendar Reunión' : 'Schedule Meeting'}
        </h5>
        <div className="space-y-3">
          <input
            type="text"
            placeholder={language === 'es' ? 'Título de la reunión' : 'Meeting title'}
            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-base"
            disabled
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              type="date"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-base"
              disabled
            />
            <input
              type="time"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-base"
              disabled
            />
          </div>
          <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
            <Calendar className="w-5 h-5" />
            {language === 'es' ? 'Crear Evento' : 'Create Event'}
          </button>
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800"
      >
        <h5 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
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
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
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
