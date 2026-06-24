// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    define: {
      'import.meta.env.SUPABASE_URL': JSON.stringify(process.env.SUPABASE_URL),
      'import.meta.env.SUPABASE_ANON_KEY': JSON.stringify(process.env.SUPABASE_ANON_KEY),
    },
    ssr: {
      noExternal: ["framer-motion", "gsap"],
    },
    optimizeDeps: {
      include: ["gsap", "gsap/ScrollTrigger"],
    },
    build: {
      rollupOptions: {
        output: {
          // Asegurar que sw.js no se procese como módulo
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'sw.js') {
              return 'sw.js';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
    },
  },
});
