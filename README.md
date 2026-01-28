# IntegrIA - Landing Page Profesional

Landing page moderna y profesional para empresa de desarrollo web, construida con Astro, React, TailwindCSS y Framer Motion.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz sofisticada con gradientes y animaciones elegantes
- 🌓 **Modo Oscuro/Claro**: Toggle entre temas con persistencia en localStorage
- 🎭 **Animaciones Fluidas**: Implementadas con Framer Motion para una experiencia premium
- 📱 **Responsive Design**: Optimizado para todos los dispositivos
- ⚡ **Alto Rendimiento**: Astro Islands para carga optimizada
- 🎯 **SEO Optimizado**: Meta tags completos y estructura semántica
- 🔧 **TypeScript**: Código type-safe y mantenible

## 🚀 Stack Tecnológico

- **Framework**: Astro 5.x
- **UI Library**: React 18
- **Estilos**: TailwindCSS 3.x
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Tipado**: TypeScript

## 📂 Estructura del Proyecto

```
/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes React y Astro
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.astro
│   │   ├── MainView.tsx
│   │   ├── Navigation.astro
│   │   ├── Portfolio.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   └── ThemeToggle.tsx
│   ├── pages/
│   │   └── index.astro  # Página principal
│   └── styles/
│       └── global.css   # Estilos globales
├── astro.config.mjs     # Configuración de Astro
├── tailwind.config.mjs  # Configuración de Tailwind
└── package.json
```

## 🧞 Comandos

| Comando              | Acción                                          |
| :------------------- | :---------------------------------------------- |
| `npm install`        | Instala las dependencias                        |
| `npm run dev`        | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`      | Construye el sitio para producción en `./dist/` |
| `npm run preview`    | Previsualiza la build localmente                |

## 🎨 Secciones Incluidas

1. **MainView**: Sección principal con animaciones impactantes y CTAs
2. **Nosotros**: Perfiles de los 2 desarrolladores con habilidades y redes sociales
3. **Portafolio**: Galería de proyectos con filtros por categoría
4. **Servicios**: 8 servicios principales con descripciones detalladas
5. **Testimonios**: Reseñas de clientes con sistema de calificación
6. **Contacto**: Formulario funcional con validación
7. **Footer**: Links, redes sociales e información de contacto

## 🎯 Personalización

### Colores
Edita `tailwind.config.mjs` para cambiar el esquema de colores:
- **Primary**: Azul (sky)
- **Secondary**: Púrpura (purple)
- **Accent**: Naranja (orange)

### Contenido
- **Desarrolladores**: Edita `src/components/About.tsx`
- **Proyectos**: Edita `src/components/Portfolio.tsx`
- **Servicios**: Edita `src/components/Services.tsx`
- **Testimonios**: Edita `src/components/Testimonials.tsx`

### Información de Contacto
Actualiza los datos en `src/components/Contact.tsx` y `src/components/Footer.astro`

## 📝 Notas

- Los errores de lint sobre `@tailwind` y `@apply` son normales y no afectan la funcionalidad
- Las imágenes de ejemplo usan Unsplash, reemplázalas con tus propias imágenes
- El formulario de contacto requiere backend para funcionar (actualmente solo muestra alert)

## 🚀 Despliegue

El proyecto está listo para desplegarse en:
- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages

```sh
npm run build
```

## 📄 Licencia

Proyecto creado para IntegrIA.
