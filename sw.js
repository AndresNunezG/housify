importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
)

const {
  imageCache,
  offlineFallback,
  staticResourceCache,
} = workbox.recipes
const { NetworkOnly } = workbox.strategies
const { setDefaultHandler } = workbox.routing
const { precacheAndRoute } = workbox.precaching

setDefaultHandler(
  new NetworkOnly()
)

imageCache()
offlineFallback()
staticResourceCache()

precacheAndRoute([
  { url: '/', revision: true }
])
