// L Body — service worker
// Estratégia: rede primeiro (sempre pega a versão nova do app) e, sem internet, usa o que está salvo.
const CACHE_NAME = 'l-body-v39';
const CORE = [
  './',
  'index.html',
  'translations.js',
  'treinos.js',
  'extras.js',
  'ficha.js',
  'i18n-extra.js',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'logo-lbody.png',
  'selo-lira.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Firebase e outros: direto da rede
  event.respondWith(
    fetch(req)
      .then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req).then(r => r || caches.match('index.html')))
  );
});

// Toque na notificação (vencimento): abre o app
self.addEventListener('notificationclick', function(e){
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type:'window', includeUncontrolled:true}).then(function(cs){
    for (var i=0;i<cs.length;i++){ if ('focus' in cs[i]) return cs[i].focus(); }
    return self.clients.openWindow('./');
  }));
});
