const CACHE_NAME = "esg-carbon-pwa-v2"; // 更改版本號以強制更新快取
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png"
];

// 安裝 Service Worker 並快取必要資源
self.addEventListener("install", (event) => {
  self.skipWaiting(); // 立即啟用新版本的 Service Worker
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// 監聽 fetch 事件，提供離線支援與動態請求處理
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response || 
        fetch(event.request)
          .then((networkResponse) => {
            return networkResponse;
          })
          .catch(() => caches.match("/index.html")) // 如果請求失敗，提供離線畫面
      );
    })
  );
});

// 當新的 Service Worker 啟動時，清除舊的快取
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
  self.clients.claim(); // 立即讓新的 Service Worker 接管控制
});
