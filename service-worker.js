const CACHE_NAME = "esg-carbon-pwa-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});
