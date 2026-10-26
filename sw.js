/* 오프라인 캐시: 한 번 열면 지하철(터널)에서도 동작 */
const V = 'swquiz-v1';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'css/style.css', 'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-180.png',
  'js/store.js', 'js/engine.js', 'js/hl.js', 'js/ui.js', 'data/bank.js',
  'data/u1.js', 'data/u2.js', 'data/u3.js', 'data/u4.js', 'data/u5.js', 'data/u6.js', 'data/u7.js', 'data/u8.js', 'data/u9.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const same = new URL(e.request.url).origin === location.origin;
  // 같은 출처: 네트워크 우선(최신 문제 반영) → 실패하면 캐시. 폰트 등 외부: 캐시 우선.
  if (same) {
    e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(V).then(x => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html'))));
  } else {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(n => { const c = n.clone(); caches.open(V).then(x => x.put(e.request, c)); return n; }).catch(() => r)));
  }
});
