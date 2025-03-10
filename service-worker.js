const CACHE_NAME = "esg-carbon-pwa-v2"; // 改變版本號以清除舊緩存
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png"
];

// 安裝 Service Worker 並緩存資源
self.addEventListener("install", (event) => {
  self.skipWaiting(); // 安裝後立刻啟用新的 Service Worker
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// 攔截請求並嘗試從緩存中回應
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).then((networkResponse) => {
          return networkResponse;
        }).catch(() => {
          return caches.match("/index.html"); // 如果請求失敗，回應 index.html
        })
      );
    })
  );
});

// 清理舊緩存
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
  self.clients.claim(); // 立即取得控制權
});
