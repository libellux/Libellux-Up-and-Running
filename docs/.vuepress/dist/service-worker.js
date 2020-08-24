/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c167c3d98524e18d442292324c6b945c"
  },
  {
    "url": "assets/css/0.styles.75739d6a.css",
    "revision": "5c23ba07926c78f9ca34590dab66e094"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6e86bfc9.js",
    "revision": "ab5d593d440d72b805b21bd54fae8b00"
  },
  {
    "url": "assets/js/11.e95d9682.js",
    "revision": "903f95c886df92cff7295c0ec8beecaa"
  },
  {
    "url": "assets/js/12.513a4b81.js",
    "revision": "aa63b305444c57ca87d1a1879957d9e9"
  },
  {
    "url": "assets/js/13.a5dd9284.js",
    "revision": "d8f163257a8c229a89247a700b190291"
  },
  {
    "url": "assets/js/14.f23496c8.js",
    "revision": "8d43e4b517123f0044dd9773a6fb6cf4"
  },
  {
    "url": "assets/js/15.66864402.js",
    "revision": "e007810c054d3bc99213cf0394dc68fe"
  },
  {
    "url": "assets/js/16.24beb350.js",
    "revision": "e0991fc050daf35ba80a944a2e1f747f"
  },
  {
    "url": "assets/js/17.67c840fb.js",
    "revision": "d3edbd9863c2420e5d932a03d3beeee1"
  },
  {
    "url": "assets/js/18.e036568f.js",
    "revision": "e21a663cc04de723423e6bde74d4443c"
  },
  {
    "url": "assets/js/19.fb76b37f.js",
    "revision": "443bfa246aad5b7e04b272b11366ae7d"
  },
  {
    "url": "assets/js/2.e04ecebd.js",
    "revision": "e403afd810c6c233057a75bdb15de349"
  },
  {
    "url": "assets/js/20.966af82d.js",
    "revision": "7afdfd25f3a8ec9b9a4206309dc8d890"
  },
  {
    "url": "assets/js/3.84f995e7.js",
    "revision": "f7fa8115f5065117987ec2ce71fda23e"
  },
  {
    "url": "assets/js/4.99009925.js",
    "revision": "e445022affac2d4173843599da8f7d76"
  },
  {
    "url": "assets/js/5.65b98b8e.js",
    "revision": "087315350d52ff92d1d57218068dadd8"
  },
  {
    "url": "assets/js/6.487d2bee.js",
    "revision": "9fc5a121cdaf504f2c8747dff4c320aa"
  },
  {
    "url": "assets/js/7.b4b355f5.js",
    "revision": "9609873e3bf949268bb85aae4dc78fb3"
  },
  {
    "url": "assets/js/8.967a0875.js",
    "revision": "b012e9536f5ee349f5d41d8664137c68"
  },
  {
    "url": "assets/js/9.073f5024.js",
    "revision": "963aad9ba79ebd0f550e4bed28a0c433"
  },
  {
    "url": "assets/js/app.f6f9c623.js",
    "revision": "d1491eec74a3f65820b98dae5e1ae51f"
  },
  {
    "url": "graylog/index.html",
    "revision": "9000060c0fcc6333b8383acc09cf5d59"
  },
  {
    "url": "img/centos.png",
    "revision": "eceb88fbdcfbb06c8ddcdcdbc0d9feb4"
  },
  {
    "url": "img/icons/1200x627.png",
    "revision": "4ed965ba2daf1f2907b5696f47949426"
  },
  {
    "url": "img/icons/1280x640.png",
    "revision": "2f2b95eb6ef52574bd86b1e426be9df9"
  },
  {
    "url": "img/icons/144x144.png",
    "revision": "c5abed2721558a98cd5adb1b28d5f032"
  },
  {
    "url": "img/icons/1500x500.png",
    "revision": "cb77b3aa40b6fbdd9a25ecb8fed580d3"
  },
  {
    "url": "img/icons/192x192.png",
    "revision": "b8853a3b71b3a7e79c116d8d2dc8fe99"
  },
  {
    "url": "img/icons/256x256.png",
    "revision": "64014871dd4b25592423d91c4a007f3a"
  },
  {
    "url": "img/icons/384x384.png",
    "revision": "f5837cc63fdd26d96461a55d61fb1944"
  },
  {
    "url": "img/icons/4096x4096.png",
    "revision": "9e79bb6db785b2243380efb2546cf841"
  },
  {
    "url": "img/icons/48x48.png",
    "revision": "c1077dc498ae97b7f5209da9277579e3"
  },
  {
    "url": "img/icons/512x512.png",
    "revision": "0a91e0a9adeee05b4a0feeadd06574dd"
  },
  {
    "url": "img/icons/72x72.png",
    "revision": "b36cd3c87f00f07092b6442b7e00b0a6"
  },
  {
    "url": "img/icons/96x96.png",
    "revision": "2907ea3e33e14a352ba8d282e0f32cd5"
  },
  {
    "url": "img/mmonit/mmonit1.png",
    "revision": "1665c0ebb4ce463c59df456bda2e5ee5"
  },
  {
    "url": "img/openvas/gce_success.png",
    "revision": "68690af56e0a7e30759701936d306f0b"
  },
  {
    "url": "img/openvas/vm_settings.png",
    "revision": "b9ac5625eb085a07362fc0c0a596c483"
  },
  {
    "url": "img/ossec/512x512.png",
    "revision": "bee855a078b5cf7941dcc4c2838ddf1d"
  },
  {
    "url": "img/ossec/cloudflare_token.png",
    "revision": "c36576440c64fceb89e53cf4f8dd1921"
  },
  {
    "url": "img/ubuntu.png",
    "revision": "f53554b67ad3f94dfb78b2dbcd6630d3"
  },
  {
    "url": "img/win98/canopus.jpg",
    "revision": "713f202c27170220c11ed8dd8d8c1258"
  },
  {
    "url": "img/win98/harddrive.jpg",
    "revision": "a315cb29db3876a2105cc4cd2a3e25e9"
  },
  {
    "url": "img/win98/livedrive.jpg",
    "revision": "0fe14c326242e1d82bed8efb7f0725e3"
  },
  {
    "url": "img/win98/memory.jpg",
    "revision": "01314af32ed413b62944e236664cef20"
  },
  {
    "url": "img/win98/motherboard.jpg",
    "revision": "b0d4ebf37a37d9013ddb6ae1503b22dc"
  },
  {
    "url": "img/win98/newq.jpg",
    "revision": "081147848fc2d1e5202e545d544e07fd"
  },
  {
    "url": "img/win98/pcdvd.jpg",
    "revision": "c4e05a218ebaab64750da9fd4ef9ee73"
  },
  {
    "url": "img/win98/processor.jpg",
    "revision": "bb1250126cc6b2a90f944bde2ebb7d7e"
  },
  {
    "url": "img/win98/psu.jpg",
    "revision": "d5907d3d9e55849f9186daaaaa0964b2"
  },
  {
    "url": "img/win98/soundblaster.jpg",
    "revision": "dab0ec6f7aadd338ef4628e67dae025e"
  },
  {
    "url": "img/win98/voodoo2.jpg",
    "revision": "6d957763e3279acf4608a680f21068a8"
  },
  {
    "url": "img/win98/voodoo2fan.jpg",
    "revision": "2b9e1dc0054358c95026b7b7816a70b1"
  },
  {
    "url": "index.html",
    "revision": "07ec6113c02288b7e3e051684b5d099b"
  },
  {
    "url": "intrusion/index.html",
    "revision": "e1a023f11ffe92db4e7569e66b3c8f82"
  },
  {
    "url": "jira/index.html",
    "revision": "c20283fe00c5782662ddd02a5f75592e"
  },
  {
    "url": "mmonit/index.html",
    "revision": "204c1f160b51e97cddc34624b4e0248a"
  },
  {
    "url": "openvas/index.html",
    "revision": "a168de94cd5c7073bef8da95c9bd400d"
  },
  {
    "url": "ossec/index.html",
    "revision": "9ca8fc628457f00a6a72098996686927"
  },
  {
    "url": "pcp/index.html",
    "revision": "ecceba5f3173bf0167a52c36b8baccbf"
  },
  {
    "url": "psad/index.html",
    "revision": "9aad7dd36ae1ee68ecf64a581caa7711"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "578946458c5785a41fee62f5d4375ef1"
  },
  {
    "url": "tags.html",
    "revision": "c7e9456cbc380d8f981edff7701ca8c0"
  },
  {
    "url": "wireguard/index.html",
    "revision": "964c78dd98aaab48d7ebc7e1524331c7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
