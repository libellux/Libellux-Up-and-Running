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
    "revision": "cebfbfcd3ff038b93fb61e0c636ed9c1"
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
    "url": "assets/js/15.4486abac.js",
    "revision": "51d6435c2d2cefbc49fbf09f70d72595"
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
    "url": "assets/js/20.d5ecc2fd.js",
    "revision": "059a26e845fc9511a9ceb1813e704157"
  },
  {
    "url": "assets/js/21.fc703bef.js",
    "revision": "945df58e799fe53d1bb3b3e37cded8bc"
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
    "url": "assets/js/app.560d0a4e.js",
    "revision": "f7c0d44a679ef38a78f9076259ea0264"
  },
  {
    "url": "graylog/index.html",
    "revision": "9644ea9e35f6d6bd662bfa192153fbf0"
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
    "revision": "8db2f73c2089d0994ae4c7b74e3bcdd9"
  },
  {
    "url": "intrusion/index.html",
    "revision": "88be467cd88beff7ebafe2108cfd6eed"
  },
  {
    "url": "jira/index.html",
    "revision": "2c249a04e49cb4428ad612a7dff05357"
  },
  {
    "url": "ldap/index.html",
    "revision": "2d3105e410403462883c4e6c52aa37b1"
  },
  {
    "url": "mmonit/index.html",
    "revision": "15b99c0ff786c505aa7c5fcc88dd1655"
  },
  {
    "url": "openvas/index.html",
    "revision": "4491c38b073f520cfff4bbfb13675af5"
  },
  {
    "url": "ossec/index.html",
    "revision": "3c6c0e1e4f7e18ecfb6d5799a257d5e8"
  },
  {
    "url": "pcp/index.html",
    "revision": "280bac02e6a298d1a29f2147bef18829"
  },
  {
    "url": "psad/index.html",
    "revision": "f6beb2334b73220298d238a7365283c9"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "d4d3276240f30190552927cce3403fd3"
  },
  {
    "url": "tags.html",
    "revision": "4bf57d37c02713773dcef3bd9dca6c84"
  },
  {
    "url": "wireguard/index.html",
    "revision": "0c0f134f0ae6a89f00d1f49b6730adf6"
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
