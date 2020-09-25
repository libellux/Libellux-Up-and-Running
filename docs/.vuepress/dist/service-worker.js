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
    "revision": "83267d9c72940f61427e6c12ecaa6830"
  },
  {
    "url": "assets/css/0.styles.955c6e97.css",
    "revision": "3fe918aa9da6cf99253953d74765bbd4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4645b92c.js",
    "revision": "37064b846ed0c3cad7a186aed1c7e176"
  },
  {
    "url": "assets/js/11.2063d350.js",
    "revision": "f0efa37e849f6fe6b3c01376f8938318"
  },
  {
    "url": "assets/js/12.471d7897.js",
    "revision": "dabdfccb56cb6e6498b2c2f0b00c6afd"
  },
  {
    "url": "assets/js/13.d88c8877.js",
    "revision": "4c03bcd13bd045a3449e0e7deec78d51"
  },
  {
    "url": "assets/js/14.032cb590.js",
    "revision": "78e16ad278b0428bef984ea2c38d5c32"
  },
  {
    "url": "assets/js/15.91679891.js",
    "revision": "2a631a9721623c49f58617794f7ada1d"
  },
  {
    "url": "assets/js/16.aba6970a.js",
    "revision": "78cf07b4b59907ecb0027188b9f163ae"
  },
  {
    "url": "assets/js/17.987051c3.js",
    "revision": "545255e12a83690dacfa9540a937f248"
  },
  {
    "url": "assets/js/18.0b7f2048.js",
    "revision": "b4ba96bed2a3cfdfbcf54ec05e2dfc65"
  },
  {
    "url": "assets/js/19.1ff76fd4.js",
    "revision": "f54ff41738c3abbe1eab6130c3756242"
  },
  {
    "url": "assets/js/2.0db13e03.js",
    "revision": "7d92ec41b49a5c2ef5f348adf8a197bf"
  },
  {
    "url": "assets/js/20.8e35bda8.js",
    "revision": "50e575dd28de35223a413880b9901b45"
  },
  {
    "url": "assets/js/21.a2ffaf3d.js",
    "revision": "7ccf6b650d459ddd008ad9d557184017"
  },
  {
    "url": "assets/js/22.18e3735c.js",
    "revision": "33a43037e71e7e3a3047e6d5e629bbc4"
  },
  {
    "url": "assets/js/23.3c6a05ec.js",
    "revision": "b7fa46b558e439c1e677ae760dd13e9c"
  },
  {
    "url": "assets/js/3.2c99cf85.js",
    "revision": "d30a2e63923dcea4034a8f886123136f"
  },
  {
    "url": "assets/js/4.91fe8a68.js",
    "revision": "e323821a44306a052ecfe4fd3e23d3e1"
  },
  {
    "url": "assets/js/5.5d1dbbe8.js",
    "revision": "959c4b74f8ce7fdc2b7f76c1b9cbd2a1"
  },
  {
    "url": "assets/js/6.835a7e48.js",
    "revision": "0c3c2416dfe1e80d9718c3b258fe9359"
  },
  {
    "url": "assets/js/7.749ef704.js",
    "revision": "0f1e0dffd5be99bc0a5a65483f5bd254"
  },
  {
    "url": "assets/js/8.c1bdfd2f.js",
    "revision": "8e37fc0a4c81fdba6dbb511e8f5838c1"
  },
  {
    "url": "assets/js/9.0c4ce260.js",
    "revision": "1b1604b8ea4ec0d8b8e0cb14980ef1b7"
  },
  {
    "url": "assets/js/app.0d816d42.js",
    "revision": "9879cc1fff2e5f173f3b54327df43a7d"
  },
  {
    "url": "graylog/index.html",
    "revision": "029ee7545439a84d736812925112516f"
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
    "url": "img/mmonit/mmonit_login.png",
    "revision": "641393a187791235fbee600f71e48b7a"
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
    "revision": "1beadf914fd5c7312bb6bb399cd26ab9"
  },
  {
    "url": "intrusion/index.html",
    "revision": "fe12d351d14775aa3a2c83877b189525"
  },
  {
    "url": "jira/index.html",
    "revision": "ca1bd82802c214f93070c83e5819e5dc"
  },
  {
    "url": "ldap/index.html",
    "revision": "a00a7f2ee15186dc599aff0dbd1acece"
  },
  {
    "url": "mmonit/index.html",
    "revision": "cb872ddaa904b8e6bc1dd36bec048b9d"
  },
  {
    "url": "openvas/index.html",
    "revision": "bb5ac37c7ab6f3064eadf0e4e0b0328b"
  },
  {
    "url": "ossec/index.html",
    "revision": "8f664eac5d60cf672db0ab2d2675cb85"
  },
  {
    "url": "pcp/index.html",
    "revision": "544d45dd86790bea170b0a83e2f05665"
  },
  {
    "url": "psad/index.html",
    "revision": "90e9991b79075602b2a909019b242fc4"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "f28a52d503a8598b289ef2f565d21f0b"
  },
  {
    "url": "tags.html",
    "revision": "4bd064f19a90f5576385243dcf3450c7"
  },
  {
    "url": "wireguard/index.html",
    "revision": "acbd31fd017c46cfc16e0041ef603181"
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
