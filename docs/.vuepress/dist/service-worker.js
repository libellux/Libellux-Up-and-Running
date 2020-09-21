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
    "revision": "f741cd2341aa2faf5dc81e4a6ffe6208"
  },
  {
    "url": "assets/css/0.styles.964bcd83.css",
    "revision": "e07d2835c5599461d915c58b6ec64fe3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6cfdcac6.js",
    "revision": "c09d1b888e4bc6b20f41b469a50a2fe0"
  },
  {
    "url": "assets/js/11.ef0b5ed3.js",
    "revision": "338af6b5a5ded03a686047e64b78c2ed"
  },
  {
    "url": "assets/js/12.7c35b506.js",
    "revision": "aa63b305444c57ca87d1a1879957d9e9"
  },
  {
    "url": "assets/js/13.c1720ee3.js",
    "revision": "2730dc7e674bfa843f87dc81c5332e3e"
  },
  {
    "url": "assets/js/14.acacca67.js",
    "revision": "8d43e4b517123f0044dd9773a6fb6cf4"
  },
  {
    "url": "assets/js/15.525fc473.js",
    "revision": "cd497bfa11a8eb902c27b0e231ace399"
  },
  {
    "url": "assets/js/16.d31e0a65.js",
    "revision": "5735ffc6e8fee70bd055562fb040dc02"
  },
  {
    "url": "assets/js/17.63911065.js",
    "revision": "c40c51e3aff44a7be4501f9a089b7fd7"
  },
  {
    "url": "assets/js/18.3740dc2f.js",
    "revision": "f5fa2fbca4bd97f6c5cff4e4f0181d76"
  },
  {
    "url": "assets/js/19.c95ce8c2.js",
    "revision": "443bfa246aad5b7e04b272b11366ae7d"
  },
  {
    "url": "assets/js/2.f12765d9.js",
    "revision": "bbe39b2f197c24bf6f153b125aa4b029"
  },
  {
    "url": "assets/js/20.966af82d.js",
    "revision": "7afdfd25f3a8ec9b9a4206309dc8d890"
  },
  {
    "url": "assets/js/3.bdfe2e17.js",
    "revision": "f7fa8115f5065117987ec2ce71fda23e"
  },
  {
    "url": "assets/js/4.99009925.js",
    "revision": "e445022affac2d4173843599da8f7d76"
  },
  {
    "url": "assets/js/5.30d450a3.js",
    "revision": "087315350d52ff92d1d57218068dadd8"
  },
  {
    "url": "assets/js/6.eb11f752.js",
    "revision": "9fc5a121cdaf504f2c8747dff4c320aa"
  },
  {
    "url": "assets/js/7.41e50956.js",
    "revision": "9609873e3bf949268bb85aae4dc78fb3"
  },
  {
    "url": "assets/js/8.bcaa47a6.js",
    "revision": "c7655bee73aad25209f5f9cfb0f2fd8c"
  },
  {
    "url": "assets/js/9.ef911008.js",
    "revision": "54247d3f75bad21671b3178179267f1e"
  },
  {
    "url": "assets/js/app.3cfacc81.js",
    "revision": "f7ae15788f5b2c0522df572391fc0504"
  },
  {
    "url": "graylog/index.html",
    "revision": "4405e00afa2a640440552fbf219d7fa6"
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
    "url": "img/openvas/gsa_dashboard.png",
    "revision": "d24a8c644e301c8a52654d0021143f11"
  },
  {
    "url": "img/openvas/gsa_login.png",
    "revision": "d92aaa2fc6d9d86a19ca84cc77a54696"
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
    "revision": "bd5962e6615c74aefd12f6e153b0b0dc"
  },
  {
    "url": "intrusion/index.html",
    "revision": "382f6fa94b0a68b1c4af257348975ec9"
  },
  {
    "url": "jira/index.html",
    "revision": "96a75dc463884ed888763ee633d24c9e"
  },
  {
    "url": "mmonit/index.html",
    "revision": "0fb276291febf80c3545de8295925e0c"
  },
  {
    "url": "openvas/index.html",
    "revision": "84ce125e438b46edebfcec7904918bfb"
  },
  {
    "url": "ossec/index.html",
    "revision": "dcc481f89c34099ba9cd4dec3eca1220"
  },
  {
    "url": "pcp/index.html",
    "revision": "a2a47d970b9439ad88e9c63f251829a8"
  },
  {
    "url": "psad/index.html",
    "revision": "0e04a3cca130e762e90ab61cd76815ff"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "7700e7107283d26bb6bf06a003847adf"
  },
  {
    "url": "tags.html",
    "revision": "30fd6c79019a8edc53a1fb7e75b0996e"
  },
  {
    "url": "wireguard/index.html",
    "revision": "1e95b930f5d55cdfc41adf763d1db4eb"
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
