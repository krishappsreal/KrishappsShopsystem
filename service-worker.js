importScripts("https://progressier.app/PyNzJwKC4bFKTngyYc82/sw.js" );
const CACHE_NAME = 'Krishapps-Shopsystem-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/favicon.ico',
    // További fájlok, pl. képek, stb.
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(ASSETS);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
