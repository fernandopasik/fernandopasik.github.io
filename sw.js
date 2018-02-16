self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('fernandopasik').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/index.html?homescreen=1',
        '/?homescreen=1',
        '/style.css',
        '/fernando-pasik.png',
        '/fernando-pasik.webp'
      ])
      .then(function() { return self.skipWaiting(); });
    })
  );
});
