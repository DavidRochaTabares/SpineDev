const CACHE_NAME = 'spinedev-v1';
const RUNTIME_CACHE = 'spinedev-runtime-v1';

// Recursos críticos para cachear durante la instalación
const PRECACHE_URLS = [
  '/spinedev',
  '/david-rocha',
  '/manifest.json',
  '/favicon.png',
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Precaching resources');
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            console.log('Service Worker: Clearing old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estrategia de caché: Network First con fallback a Cache
self.addEventListener('fetch', (event) => {
  // Solo cachear peticiones GET
  if (event.request.method !== 'GET') return;

  // Ignorar peticiones a APIs externas y analytics
  const url = new URL(event.request.url);
  if (
    url.origin !== location.origin ||
    url.pathname.includes('/api/') ||
    url.pathname.includes('analytics') ||
    url.pathname.includes('gtag')
  ) {
    return;
  }

  event.respondWith(
    caches.open(RUNTIME_CACHE).then((cache) => {
      return fetch(event.request)
        .then((response) => {
          // Si la respuesta es válida, guardarla en caché
          if (response.status === 200) {
            cache.put(event.request, response.clone());
          }
          return response;
        })
        .catch(() => {
          // Si falla la red, intentar servir desde caché
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            
            // Si no hay caché, mostrar página offline
            if (event.request.mode === 'navigate') {
              return caches.match('/spinedev');
            }
          });
        });
    })
  );
});

// Manejo de mensajes desde el cliente
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
