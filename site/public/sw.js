/* Bake: keeps the app itself on the device so it opens instantly and works without a connection.
   The page is always asked from the network first, so a new version arrives as soon as there is one. */
const CACHE = "bake-v1";
const SHELL = [
  "/", "/manifest.webmanifest",
  "/fonts/atkinson-hyperlegible-next-latin.woff2", "/fonts/atkinson-hyperlegible-next-latin-ext.woff2",
  "/icons/icon-192.png", "/icons/icon-512.png", "/icons/apple-touch-icon.png"
];

self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== self.location.origin || url.pathname.startsWith("/concepts")) return;   // the gallery is not part of the app
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put("/", copy)); return res; }).catch(() => caches.match("/")));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; })));
});
