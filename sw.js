const CACHE_VERSION = 'pwa-cache-v1'
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.webmanifest',
  '/gear.svg',
  '/vite.svg',
  '/icons/app-icon.svg',
  '/icons/app-icon-maskable.svg',
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE_VERSION)
            .map(key => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') {
    return
  }

  const request = event.request
  const isNavigation = request.mode === 'navigate'

  if (isNavigation) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const responseClone = response.clone()
          caches.open(CACHE_VERSION).then(cache => cache.put(request, responseClone))
          return response
        })
        .catch(() =>
          caches.match(request).then(response => response || caches.match('/offline.html')),
        ),
    )
    return
  }

  event.respondWith(
    caches.match(request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse
      }

      return fetch(request)
        .then(response => {
          if (response.ok) {
            const responseClone = response.clone()
            caches.open(CACHE_VERSION).then(cache => cache.put(request, responseClone))
          }
          return response
        })
        .catch(() => caches.match('/offline.html'))
    }),
  )
})
