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
    "revision": "8da7d3704c758f8840483d73ac7e1429"
  },
  {
    "url": "assets/css/0.styles.fec8a880.css",
    "revision": "042852179554be26758aa63b528eb6cb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7fd10ea9.js",
    "revision": "9b35a58cf771ece90171fd5a45cafdd1"
  },
  {
    "url": "assets/js/11.9424e09c.js",
    "revision": "b0491b68c7f523a83eef8fae568133b1"
  },
  {
    "url": "assets/js/12.ecc732f7.js",
    "revision": "cd725d7b7bf0fb8e9fc73c90fce0f2d6"
  },
  {
    "url": "assets/js/13.5aa38e45.js",
    "revision": "9a1584a14a0f2e281f3d612b0ecbd6cb"
  },
  {
    "url": "assets/js/14.81de3b3f.js",
    "revision": "5c6f31b19fca7847ec8452b95eab44a6"
  },
  {
    "url": "assets/js/15.d8e4781f.js",
    "revision": "a40a183a917bed554bc68f7c755f3d05"
  },
  {
    "url": "assets/js/16.0748715d.js",
    "revision": "02814c5f9b656e5b46f51f3e099a16f5"
  },
  {
    "url": "assets/js/17.3b2d05fd.js",
    "revision": "1c3ab54d707cf58005419fe3f9a1895f"
  },
  {
    "url": "assets/js/18.0c793e8a.js",
    "revision": "0baa657b0b816a7048d3f88a1a4edbce"
  },
  {
    "url": "assets/js/19.0a9ed0b9.js",
    "revision": "b83d694c312b75bb1da672955808a5a7"
  },
  {
    "url": "assets/js/2.c4173f39.js",
    "revision": "ce00bdde332db7dfd8a6dd43861e65c9"
  },
  {
    "url": "assets/js/20.387f8566.js",
    "revision": "bda97e86f8f0214da299b46c1733015c"
  },
  {
    "url": "assets/js/21.45e2a9ff.js",
    "revision": "4759c4fa40af1dccf7bd375ee63f3079"
  },
  {
    "url": "assets/js/22.fdc2abd4.js",
    "revision": "ef4f842ddc437b1cd62701fec80e3160"
  },
  {
    "url": "assets/js/23.cb9c52bb.js",
    "revision": "493fe3e90ba6368e5a271e216c1e075d"
  },
  {
    "url": "assets/js/3.c00c02ff.js",
    "revision": "6ce2454fc1a2f666ed96a3757ce635ab"
  },
  {
    "url": "assets/js/4.d6eb0015.js",
    "revision": "c782901b8a05319e1ec3065788cfa782"
  },
  {
    "url": "assets/js/5.d5666746.js",
    "revision": "8ab2114c8fe34eb681e09b6218ceacde"
  },
  {
    "url": "assets/js/6.0b39c44a.js",
    "revision": "5c46fb8fc33f8bbe4f6baf9296de6836"
  },
  {
    "url": "assets/js/7.d1f8ccbe.js",
    "revision": "32fb41169aa3e3a16b67dcb4a58d15d4"
  },
  {
    "url": "assets/js/8.21bebd25.js",
    "revision": "fb7af7ec7bff4af00ff080f92396a646"
  },
  {
    "url": "assets/js/9.4b3c32b5.js",
    "revision": "7b729e87d8bdbaa59f835b7db6edf407"
  },
  {
    "url": "assets/js/app.c566428a.js",
    "revision": "c0ba7d97205f9dc5a6fb3f031eec3f86"
  },
  {
    "url": "graylog/index.html",
    "revision": "946c0399e960a8a8d5262e52c576d57d"
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
    "url": "img/mmonit/slack_alert.png",
    "revision": "239fd5c0b726b06c6cc555a908d08359"
  },
  {
    "url": "img/mmonit/slack_incoming_webhook.png",
    "revision": "74af9ccf2af674a14e7d454817a89ded"
  },
  {
    "url": "img/openvas/gce_success.png",
    "revision": "68690af56e0a7e30759701936d306f0b"
  },
  {
    "url": "img/openvas/gsa_dashboard.png",
    "revision": "62a7cddd490798fa7338f0709aa6deef"
  },
  {
    "url": "img/openvas/gsa_login.png",
    "revision": "c41707e31268ccf0b9450eb95acd3494"
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
    "url": "img/ossec/remote_syslog_settings.png",
    "revision": "29e56b2348c0689d577022cc7c799d6e"
  },
  {
    "url": "img/ossec/remote_syslog_value.png",
    "revision": "213cebc9172c9a1f8f8a3a011dfd9a95"
  },
  {
    "url": "img/ossec/windows_agent_complete.png",
    "revision": "8a5f36cb5a5469e42530fcb44543b045"
  },
  {
    "url": "img/ossec/windows_agent_components.png",
    "revision": "15d8bf841dbdce26c04ca09b48538dcf"
  },
  {
    "url": "img/ossec/windows_agent_manager.png",
    "revision": "095dfcef88dff43ea831b872ccd87898"
  },
  {
    "url": "img/ossec/windows_agent_setup.png",
    "revision": "3781048e9d3c81ec993f3cb08cacaa22"
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
    "revision": "86551926898ee6ebe1204b122f6d7a0a"
  },
  {
    "url": "intrusion/index.html",
    "revision": "2493fc2bbe75f95997fa313f482de5da"
  },
  {
    "url": "jira/index.html",
    "revision": "aace3188a1499fcad87c3f831de07db1"
  },
  {
    "url": "ldap/index.html",
    "revision": "220bf48d669860418ea481a67f7c1570"
  },
  {
    "url": "mmonit/index.html",
    "revision": "f5060bc21ee61a6503bdcd00fa4c197e"
  },
  {
    "url": "openvas/index.html",
    "revision": "0cd94877d8889f2c67ea0c89f71463a2"
  },
  {
    "url": "ossec/index.html",
    "revision": "dad74405bc6f59402ee9fefe801cc514"
  },
  {
    "url": "pcp/index.html",
    "revision": "ae5f95159fa2b95d50176ca5437155e9"
  },
  {
    "url": "psad/index.html",
    "revision": "08dd39d8f4f8590b111caac559937285"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "fa0703b95012df5d8c204bd7755e17ec"
  },
  {
    "url": "tags.html",
    "revision": "55e551b7807504e5e1cef6b0f1e51f80"
  },
  {
    "url": "wireguard/index.html",
    "revision": "94a1f44b215492c2bbed27dbcf73f73e"
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
