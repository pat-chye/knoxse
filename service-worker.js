const CACHE_NAME = 'user-registration-pwa';
const assetsToCache = [
    './index.html',
    './manifest.json',
    './icon-192x192.png',
    './icon-512x512.png',
    './'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(assetsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});