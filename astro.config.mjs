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
