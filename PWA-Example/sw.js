importScripts('./node_modules/workbox-sw/build/importScripts/workbox-sw.dev.v2.1.2.js')
const staticAssests =  [
    './',
    './styles.css',
    './app.js'
];

const wb = new WorkboxSW();

wb.precache(staticAssests);

wb.router.registerRoute('https://pwa-blog-api-example.herokuapp.com/blogs', wb.strategies.networkFirst());
wb.registerRoute(/.*\.(png|jpg|jpeg|gif)/, wb.strategies.cacheFirst({
    cacheName:'blogs-images',
    cacheExpiration:{ maxEntries:20, maxAgeSeconds: 12 * 60 * 60},
    cacheableResponse:{ statuses: [0, 200]}
}));

// self.addEventListener('install', async event =>{
//     const cache = await caches.open('blogs-static');
//     cache.addAll(staticAssests);
// });

// self.addEventListener('fetch', event =>{
//     const req = event.request;
//     const url = new URL(req.url);
//     if(url.origin == location.origin){
//         event.respondWith(cacheFirst(req));    
//     }else{
//         event.respondWith(networkFirst(req));
//     }
// });

// async function cacheFirst(req) {
//     const cachedResponse = await caches.match(req);
//     return cachedResponse || fetch(req);
// }

// async function networkFirst(req){
//     const cache = await caches.open('blogs-dynamic');
//     try {
//         const res = await fetch(req);
//         cache.put(req, res.clone());
//         return res;
//     } catch (error) {
//         return await cache.match(req);
//     }
// }
