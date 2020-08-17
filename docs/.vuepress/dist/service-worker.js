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
    "revision": "740568407325acd33245148dae7c4abf"
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
    "url": "assets/js/10.c94c30dd.js",
    "revision": "c09d1b888e4bc6b20f41b469a50a2fe0"
  },
  {
    "url": "assets/js/11.8bb4f917.js",
    "revision": "114384e06e5e101aaf3289c401465bba"
  },
  {
    "url": "assets/js/12.896ab557.js",
    "revision": "9d9ff360e2f9b2b72afcfc62fadafe6c"
  },
  {
    "url": "assets/js/13.a1d5f137.js",
    "revision": "6fa733808a22ddd07b4a0f426814db31"
  },
  {
    "url": "assets/js/14.d27464af.js",
    "revision": "8d43e4b517123f0044dd9773a6fb6cf4"
  },
  {
    "url": "assets/js/15.340e1898.js",
    "revision": "f9e0f165e6ba05e9d7164b7c53819426"
  },
  {
    "url": "assets/js/16.a2b8c0cb.js",
    "revision": "8470d5633a883560a067559280b7540d"
  },
  {
    "url": "assets/js/17.c9344e79.js",
    "revision": "395df6b9ba09eb02a71d0af86fd8ea20"
  },
  {
    "url": "assets/js/18.e21575ca.js",
    "revision": "c117f058f55746811dd95f6d628e744b"
  },
  {
    "url": "assets/js/19.538f992a.js",
    "revision": "d40e4dca4ab321d5bdc849b486121e95"
  },
  {
    "url": "assets/js/2.716680d4.js",
    "revision": "e403afd810c6c233057a75bdb15de349"
  },
  {
    "url": "assets/js/20.966af82d.js",
    "revision": "7afdfd25f3a8ec9b9a4206309dc8d890"
  },
  {
    "url": "assets/js/3.8dada23c.js",
    "revision": "f7fa8115f5065117987ec2ce71fda23e"
  },
  {
    "url": "assets/js/4.99009925.js",
    "revision": "e445022affac2d4173843599da8f7d76"
  },
  {
    "url": "assets/js/5.b1ed8f9f.js",
    "revision": "38eaa51ded15afbb2dbef29afd110201"
  },
  {
    "url": "assets/js/6.a68e6a00.js",
    "revision": "9fc5a121cdaf504f2c8747dff4c320aa"
  },
  {
    "url": "assets/js/7.8497ab7c.js",
    "revision": "9609873e3bf949268bb85aae4dc78fb3"
  },
  {
    "url": "assets/js/8.5d15599d.js",
    "revision": "a620dd2b5e7613ff7fbd6aa18c134a4e"
  },
  {
    "url": "assets/js/9.b26a5461.js",
    "revision": "0f36293e22c080b065d375d236d97b1c"
  },
  {
    "url": "assets/js/app.1e692cfc.js",
    "revision": "9a0ef5f2c7bf0785c48b877f67a9b13b"
  },
  {
    "url": "graylog/index.html",
    "revision": "7addb9e76f38e678aa11194903d07e38"
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
    "revision": "31d126837a223a526cec7dbc28cabacd"
  },
  {
    "url": "intrusion/index.html",
    "revision": "7a09d280cf59106bb1d6f65686f5c7de"
  },
  {
    "url": "jira/index.html",
    "revision": "50a8cd3ef56e28d17285606c2d31804b"
  },
  {
    "url": "mmonit/index.html",
    "revision": "9e5ccc4c15aee6cbd3c62554be4ad7d0"
  },
  {
    "url": "openvas/index.html",
    "revision": "ce5104d1a715bb784c310828bfb5e6a2"
  },
  {
    "url": "ossec/index.html",
    "revision": "29c8545668e7051c93e594ff82fd078d"
  },
  {
    "url": "pcp/index.html",
    "revision": "b24c10dd61303e25b86eb46a5207fc9d"
  },
  {
    "url": "psad/index.html",
    "revision": "ebe5331536b6ef3cfad7b03926a5134b"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "5c04e946fd6613de72d4e16dddf711db"
  },
  {
    "url": "tags.html",
    "revision": "518c11458a624c3c7e17d70f4fd4208f"
  },
  {
    "url": "wireguard/index.html",
    "revision": "011c6ebf22d32bb6bcd35817b8738c9a"
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
