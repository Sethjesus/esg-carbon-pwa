const CACHE_NAME = "esg-carbon-pwa-v2";
const urlsToCache = [
  "/ESG-Carbon-PWA/",
  "/ESG-Carbon-PWA/index.html",
  "/ESG-Carbon-PWA/styles.css",
  "/ESG-Carbon-PWA/manifest.json",
  "/ESG-Carbon-PWA/icon-192.png",
  "/ESG-Carbon-PWA/icon-512.png"
];

// Install Service Worker and cache resources
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Intercept requests and serve from cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).then((networkResponse) => {
          return networkResponse;
        }).catch(() => {
          return caches.match("/ESG-Carbon-PWA/index.html");
        })
      );
    })
  );
});

// Clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});
