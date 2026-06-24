export interface BusinessModule {
  id: string;
  name: {
    es: string;
    en: string;
  };
  icon: string;
  color: string;
  gradient: string;
  features: {
    es: string[];
    en: string[];
  };
}

export const businessModules: BusinessModule[] = [
  {
    id: 'clients',
    name: {
      es: 'Clientes',
      en: 'Clients'
    },
    icon: 'Users',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    features: {
      es: ['Lista de clientes', 'Historial de interacciones', 'Contactos y seguimiento', 'Segmentación'],
      en: ['Client list', 'Interaction history', 'Contacts and follow-up', 'Segmentation']
    }
  },
  {
    id: 'sales',
    name: {
      es: 'Ventas',
      en: 'Sales'
    },
    icon: 'TrendingUp',
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
    features: {
      es: ['Pipeline de ventas', 'Oportunidades', 'Cotizaciones', 'Proyecciones'],
      en: ['Sales pipeline', 'Opportunities', 'Quotes', 'Projections']
    }
  },
  {
    id: 'inventory',
    name: {
      es: 'Inventario',
      en: 'Inventory'
    },
    icon: 'Package',
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
    features: {
      es: ['Control de stock', 'Movimientos', 'Alertas de reorden', 'Trazabilidad'],
      en: ['Stock control', 'Movements', 'Reorder alerts', 'Traceability']
    }
  },
  {
    id: 'billing',
    name: {
      es: 'Facturación',
      en: 'Billing'
    },
    icon: 'FileText',
    color: 'orange',
    gradient: 'from-orange-500 to-red-500',
    features: {
      es: ['Emisión de facturas', 'Control de pagos', 'Cuentas por cobrar', 'Reportes fiscales'],
      en: ['Invoice issuance', 'Payment control', 'Accounts receivable', 'Tax reports']
    }
  },
  {
    id: 'hr',
    name: {
      es: 'Recursos Humanos',
      en: 'Human Resources'
    },
    icon: 'Briefcase',
    color: 'indigo',
    gradient: 'from-indigo-500 to-purple-500',
    features: {
      es: ['Gestión de personal', 'Nómina', 'Asistencias', 'Evaluaciones'],
      en: ['Staff management', 'Payroll', 'Attendance', 'Evaluations']
    }
  },
  {
    id: 'reports',
    name: {
      es: 'Reportes',
      en: 'Reports'
    },
    icon: 'BarChart3',
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-500',
    features: {
      es: ['Dashboards ejecutivos', 'KPIs personalizados', 'Análisis de datos', 'Exportación'],
      en: ['Executive dashboards', 'Custom KPIs', 'Data analysis', 'Export']
    }
  },
];
