export interface WebSolution {
  id: string;
  name: {
    es: string;
    en: string;
  };
  icon: string;
  idealFor: {
    es: string[];
    en: string[];
  };
  capabilities: {
    es: string[];
    en: string[];
  };
  color: string;
  gradient: string;
}

export const webSolutions: WebSolution[] = [
  {
    id: 'landing',
    name: {
      es: 'Landing Page',
      en: 'Landing Page'
    },
    icon: '🌐',
    idealFor: {
      es: ['Startups', 'Lanzamiento de productos', 'Campañas de marketing', 'Captación de leads'],
      en: ['Startups', 'Product launches', 'Marketing campaigns', 'Lead generation']
    },
    capabilities: {
      es: ['Responsive', 'SEO optimizado', 'Conversión enfocada', 'Carga ultrarrápida', 'Analíticas integradas'],
      en: ['Responsive', 'SEO optimized', 'Conversion focused', 'Ultra-fast loading', 'Integrated analytics']
    },
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'corporate',
    name: {
      es: 'Sitio Corporativo',
      en: 'Corporate Website'
    },
    icon: '🏢',
    idealFor: {
      es: ['Empresas establecidas', 'Servicios profesionales', 'Consultorías', 'Instituciones'],
      en: ['Established companies', 'Professional services', 'Consultancies', 'Institutions']
    },
    capabilities: {
      es: ['Multi-idioma', 'CMS integrado', 'Blog corporativo', 'Casos de éxito', 'Portal de empleo'],
      en: ['Multi-language', 'Integrated CMS', 'Corporate blog', 'Success stories', 'Job portal']
    },
    color: 'indigo',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'ecommerce',
    name: {
      es: 'E-commerce',
      en: 'E-commerce'
    },
    icon: '🛒',
    idealFor: {
      es: ['Tiendas online', 'Retail', 'Productos físicos', 'Productos digitales'],
      en: ['Online stores', 'Retail', 'Physical products', 'Digital products']
    },
    capabilities: {
      es: ['Carrito de compras', 'Pagos seguros', 'Inventario', 'Envíos', 'Cupones y descuentos'],
      en: ['Shopping cart', 'Secure payments', 'Inventory', 'Shipping', 'Coupons and discounts']
    },
    color: 'green',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'dashboard',
    name: {
      es: 'Dashboard Empresarial',
      en: 'Business Dashboard'
    },
    icon: '📊',
    idealFor: {
      es: ['Gestión interna', 'Análisis de datos', 'Reportes ejecutivos', 'Operaciones'],
      en: ['Internal management', 'Data analysis', 'Executive reports', 'Operations']
    },
    capabilities: {
      es: ['KPIs en tiempo real', 'Reportes personalizados', 'Gestión de usuarios', 'Exportación de datos', 'Notificaciones'],
      en: ['Real-time KPIs', 'Custom reports', 'User management', 'Data export', 'Notifications']
    },
    color: 'orange',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'portal',
    name: {
      es: 'Portal de Clientes',
      en: 'Client Portal'
    },
    icon: '👥',
    idealFor: {
      es: ['Servicios B2B', 'Gestión de clientes', 'Autoservicio', 'Soporte'],
      en: ['B2B services', 'Client management', 'Self-service', 'Support']
    },
    capabilities: {
      es: ['Área privada', 'Documentos', 'Facturación', 'Tickets de soporte', 'Historial'],
      en: ['Private area', 'Documents', 'Billing', 'Support tickets', 'History']
    },
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'saas',
    name: {
      es: 'Plataforma SaaS',
      en: 'SaaS Platform'
    },
    icon: '🚀',
    idealFor: {
      es: ['Software como servicio', 'Productos digitales', 'Suscripciones', 'Escalabilidad'],
      en: ['Software as a service', 'Digital products', 'Subscriptions', 'Scalability']
    },
    capabilities: {
      es: ['Multi-tenant', 'Suscripciones', 'API pública', 'Integraciones', 'Analytics avanzado'],
      en: ['Multi-tenant', 'Subscriptions', 'Public API', 'Integrations', 'Advanced analytics']
    },
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-500'
  }
];
