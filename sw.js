const VERSION = 'v1';

self.addEventListener('install', event => {
    event.waitUntil(precache());
});

self.addEventListener('fetch', event => {
    const request = event.request;
    
    //get
    if (request.method != 'GET') return;

    // Search in cache
    event.respondWith(cachedResponse(request));

    //Update cache
    event.waitUntil(updateCache(request));
});

const precache = async () => {
    const cache = await caches.open(VERSION);
    return cache.addAll([
        /* '/',
        '/index.html',
        '/assets/js/index.js',
        '/assets/js/MediaPlayer.js',
        '/assets/js/plugins/AutoPlay.js',
        '/assets/js/plugins/AutoPause.ts',
        '/assets/css/index.css',
        '/assets/video/BigBuckBunny.mp4', */
    ]);
}

const cachedResponse = async (request) => {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);

    return response || fetch(request);
} 

const updateCache = async (request) => {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    cache.put(request, response);
} 
