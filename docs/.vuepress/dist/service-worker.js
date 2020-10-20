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
    "revision": "396a07194693dad36dc073d1339f7632"
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
    "url": "assets/js/10.6a74f96f.js",
    "revision": "ad476fee076267e302f3a435da83388a"
  },
  {
    "url": "assets/js/11.760227aa.js",
    "revision": "9ffdf608d8709037e3b7f5293f1783e7"
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
    "url": "assets/js/14.c1ce161d.js",
    "revision": "e1be4be9e83bc19c6bfbfb6baff4b109"
  },
  {
    "url": "assets/js/15.53cb0ee6.js",
    "revision": "cd27a49a47a1cf395954e24f39933ee9"
  },
  {
    "url": "assets/js/16.1cd20db3.js",
    "revision": "e5832c3db2ab527f6545bb352ce7e0c5"
  },
  {
    "url": "assets/js/17.3b2d05fd.js",
    "revision": "1c3ab54d707cf58005419fe3f9a1895f"
  },
  {
    "url": "assets/js/18.fd5f0c77.js",
    "revision": "4e8973a44ecdde943befd925a26e89dd"
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
    "url": "assets/js/20.fe7bd189.js",
    "revision": "50e575dd28de35223a413880b9901b45"
  },
  {
    "url": "assets/js/21.ec72c473.js",
    "revision": "7ccf6b650d459ddd008ad9d557184017"
  },
  {
    "url": "assets/js/22.4f5aff59.js",
    "revision": "a33729be7d49b3dc0d25290fe99fa774"
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
    "url": "assets/js/app.84799c25.js",
    "revision": "e51e98018443e35438f1628b4b46922e"
  },
  {
    "url": "graylog/index.html",
    "revision": "3f52ffe59701d84eeeb35fd5257f39dc"
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
    "revision": "880537e75b092ac9286768f5fec72abc"
  },
  {
    "url": "intrusion/index.html",
    "revision": "f4b06e59276f389277e4ecb4f4e18f36"
  },
  {
    "url": "jira/index.html",
    "revision": "23bbc54b24a1dd7d6981d8811c6664d1"
  },
  {
    "url": "ldap/index.html",
    "revision": "1ab6937184d7082533c87c55f00824a2"
  },
  {
    "url": "mmonit/index.html",
    "revision": "46009c60e1cb9580884b79d212a63cdd"
  },
  {
    "url": "openvas/index.html",
    "revision": "fbea65c0b2f42cb9206884b877011d8c"
  },
  {
    "url": "ossec/index.html",
    "revision": "6ef806b9f4c5e6646642c42fef2ed573"
  },
  {
    "url": "pcp/index.html",
    "revision": "1fd1e20a1cdea93f1823eebb39d08e5e"
  },
  {
    "url": "psad/index.html",
    "revision": "5fcb8afbc7be374751ccc7cd9638cdff"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "5cdd40f2fcb8f6faea287f7ce6bf8799"
  },
  {
    "url": "tags.html",
    "revision": "bc777287b64f09ac14079d8a14a51bc2"
  },
  {
    "url": "wireguard/index.html",
    "revision": "c0226482b793296e171773c9ffa7a917"
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
