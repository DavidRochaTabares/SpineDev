export interface MvpIdea {
  id: string;
  name: {
    es: string;
    en: string;
  };
  icon: string;
  description: {
    es: string;
    en: string;
  };
  color: string;
  gradient: string;
  mvpFeatures: {
    es: string[];
    en: string[];
  };
}

export const mvpIdeas: MvpIdea[] = [
  {
    id: 'booking',
    name: {
      es: 'Sistema de Reservas',
      en: 'Booking System'
    },
    icon: 'Calendar',
    description: {
      es: 'Quiero que mis clientes puedan reservar citas online',
      en: 'I want my clients to book appointments online'
    },
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    mvpFeatures: {
      es: ['Login de usuarios', 'Calendario de disponibilidad', 'Sistema de reservas', 'Panel administrativo', 'Notificaciones por email'],
      en: ['User login', 'Availability calendar', 'Booking system', 'Admin panel', 'Email notifications']
    }
  },
  {
    id: 'education',
    name: {
      es: 'Plataforma Educativa',
      en: 'Educational Platform'
    },
    icon: 'GraduationCap',
    description: {
      es: 'Quiero ofrecer cursos online a mis estudiantes',
      en: 'I want to offer online courses to my students'
    },
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
    mvpFeatures: {
      es: ['Registro de estudiantes', 'Catálogo de cursos', 'Reproductor de video', 'Seguimiento de progreso', 'Certificados básicos'],
      en: ['Student registration', 'Course catalog', 'Video player', 'Progress tracking', 'Basic certificates']
    }
  },
  {
    id: 'saas',
    name: {
      es: 'SaaS Empresarial',
      en: 'Business SaaS'
    },
    icon: 'Rocket',
    description: {
      es: 'Quiero ofrecer mi herramienta como servicio de suscripción',
      en: 'I want to offer my tool as a subscription service'
    },
    color: 'indigo',
    gradient: 'from-indigo-500 to-purple-500',
    mvpFeatures: {
      es: ['Autenticación de usuarios', 'Gestión de suscripciones', 'Dashboard principal', 'Funcionalidad core', 'Configuración de cuenta'],
      en: ['User authentication', 'Subscription management', 'Main dashboard', 'Core functionality', 'Account settings']
    }
  },
  {
    id: 'marketplace',
    name: {
      es: 'Marketplace',
      en: 'Marketplace'
    },
    icon: 'Store',
    description: {
      es: 'Quiero conectar compradores y vendedores en una plataforma',
      en: 'I want to connect buyers and sellers on a platform'
    },
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
    mvpFeatures: {
      es: ['Registro dual (comprador/vendedor)', 'Listado de productos', 'Sistema de búsqueda', 'Mensajería básica', 'Proceso de pago'],
      en: ['Dual registration (buyer/seller)', 'Product listing', 'Search system', 'Basic messaging', 'Payment process']
    }
  },
  {
    id: 'health',
    name: {
      es: 'Plataforma de Salud',
      en: 'Health Platform'
    },
    icon: 'Heart',
    description: {
      es: 'Quiero gestionar citas médicas y expedientes de pacientes',
      en: 'I want to manage medical appointments and patient records'
    },
    color: 'red',
    gradient: 'from-red-500 to-orange-500',
    mvpFeatures: {
      es: ['Registro de pacientes', 'Agenda de citas', 'Expediente médico básico', 'Historial de consultas', 'Recordatorios'],
      en: ['Patient registration', 'Appointment schedule', 'Basic medical record', 'Consultation history', 'Reminders']
    }
  },
  {
    id: 'mobile',
    name: {
      es: 'Aplicación Mobile',
      en: 'Mobile App'
    },
    icon: 'Smartphone',
    description: {
      es: 'Quiero una app móvil para mi servicio',
      en: 'I want a mobile app for my service'
    },
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-500',
    mvpFeatures: {
      es: ['Onboarding simple', 'Funcionalidad principal', 'Perfil de usuario', 'Notificaciones push', 'Diseño responsive'],
      en: ['Simple onboarding', 'Main functionality', 'User profile', 'Push notifications', 'Responsive design']
    }
  }
];
