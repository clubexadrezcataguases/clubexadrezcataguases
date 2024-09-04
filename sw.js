const CACHE_NAME = 'cxc-site-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/assets/css/styles.css',
  '/assets/js/script.js',
  '/404.html',
  '/convite/index.html',
  '/blog/cafeina.html',
  '/assets/images/pawn32.png',
  '/assets/images/pawn256.png',
  '/assets/images/pawn512.png'
];

// instalação do Service Worker e cache dos recursos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aberto');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// requisições e busca no cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
