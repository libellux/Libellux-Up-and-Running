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
    "revision": "2cd49c1e5e14a217275d0fc53434916c"
  },
  {
    "url": "assets/css/0.styles.4974b1bb.css",
    "revision": "039ff4dd1454570412f4c01affe0263d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7deb71f3.js",
    "revision": "a061a05a56250c168d43c212a30fe494"
  },
  {
    "url": "assets/js/11.90a1b736.js",
    "revision": "f1d12a87915b72f8b3b3a6b43b9dcea5"
  },
  {
    "url": "assets/js/12.26fcf040.js",
    "revision": "d9adebdb4f0c6b730cc33f6516ead392"
  },
  {
    "url": "assets/js/13.beb6a0e4.js",
    "revision": "23633d8c999c5e7b497ba39b61ccc994"
  },
  {
    "url": "assets/js/14.7e6513b2.js",
    "revision": "34628c81d6601bfa18129f3e3132b349"
  },
  {
    "url": "assets/js/15.038aac1a.js",
    "revision": "38eaa18e38164deb07ba9873caa302d7"
  },
  {
    "url": "assets/js/16.232fe041.js",
    "revision": "a8fac868f9e4ffccef86b92adb4a8e05"
  },
  {
    "url": "assets/js/17.7bbedf9f.js",
    "revision": "ad61bbd72b2f634a966d9c9bc00fbbc4"
  },
  {
    "url": "assets/js/18.1242f96e.js",
    "revision": "5f4806881036cc1f4354ef28173bf29a"
  },
  {
    "url": "assets/js/19.17230b42.js",
    "revision": "cc925ef44f9fdcdfaf19b6d9b007cc4e"
  },
  {
    "url": "assets/js/2.8343db12.js",
    "revision": "20e28ad2e63c561b0ef92e24d21e5ba1"
  },
  {
    "url": "assets/js/20.dd61ebcf.js",
    "revision": "4588bd8fcdd4e3b54c0299b8775d9f70"
  },
  {
    "url": "assets/js/21.cce7be46.js",
    "revision": "646b7470be958697afacc1ab90342ad6"
  },
  {
    "url": "assets/js/22.34e36254.js",
    "revision": "66818a964c15bbb2fe2878185c9797d8"
  },
  {
    "url": "assets/js/23.c3bd3947.js",
    "revision": "9e6d49b61207d886278dc30bcc8973ad"
  },
  {
    "url": "assets/js/24.6729a8d5.js",
    "revision": "368a7b68470a98163e82eb77cf1cf104"
  },
  {
    "url": "assets/js/25.fc2c30a7.js",
    "revision": "9ab2fc0a713d49628a817a41092f89fc"
  },
  {
    "url": "assets/js/26.8418c8da.js",
    "revision": "5faf4b4358d2c53df7442bd7a7ae9143"
  },
  {
    "url": "assets/js/27.6a463658.js",
    "revision": "ce41b34b67a9b9003cb37ed812247594"
  },
  {
    "url": "assets/js/28.a7554720.js",
    "revision": "b5af93f64603741611fd32d5447c6fd4"
  },
  {
    "url": "assets/js/29.eaf7e528.js",
    "revision": "878fd35a732b68883a3fee5f1e9500a1"
  },
  {
    "url": "assets/js/3.9c3d9303.js",
    "revision": "2fd5702096a182038942a31d535f17ae"
  },
  {
    "url": "assets/js/4.76acc4ad.js",
    "revision": "e1b237edb74b838594fc85b403a1423d"
  },
  {
    "url": "assets/js/5.71ad2b80.js",
    "revision": "008d14a42de9174ed326ecf01157008e"
  },
  {
    "url": "assets/js/6.f711ba6a.js",
    "revision": "fe45f78072e7ba313e5744d259aa4724"
  },
  {
    "url": "assets/js/7.11d40bb1.js",
    "revision": "c2f853d28b84a4195dc03ecef3a72c00"
  },
  {
    "url": "assets/js/8.83461a6f.js",
    "revision": "da7bfc386f339d3e88b414554d369303"
  },
  {
    "url": "assets/js/9.d665bcf2.js",
    "revision": "731170bd8a72048bccb1b26f98052569"
  },
  {
    "url": "assets/js/app.795dfc27.js",
    "revision": "ba057c820e932a447946951cf9e838a2"
  },
  {
    "url": "graylog/index.html",
    "revision": "40a46d1b20f90f7cdd062243de3e6ff8"
  },
  {
    "url": "img/books.png",
    "revision": "b81b1b341f147ea86ca39c01a82eef58"
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
    "url": "img/icons/video.png",
    "revision": "458a3a6e4546bb82373acf69b6f582e8"
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
    "url": "img/network.png",
    "revision": "b7599cc93fd5862f7d7b95c1014e2d32"
  },
  {
    "url": "img/openvas/gce_success.png",
    "revision": "68690af56e0a7e30759701936d306f0b"
  },
  {
    "url": "img/openvas/gsa_auth_target.png",
    "revision": "24526d2baf1cc29af4aa4d72d3b646c2"
  },
  {
    "url": "img/openvas/gsa_auth_task.png",
    "revision": "fd7ed294fba694fdc494a9b496118af3"
  },
  {
    "url": "img/openvas/gsa_credentials.png",
    "revision": "2b167ef41f7c628b88016c5410bae93e"
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
    "url": "img/openvas/gsa_newcredentials.png",
    "revision": "9d5bb41889cddfca6c246eb5dff70b3e"
  },
  {
    "url": "img/openvas/gsa_noauth_scan.png",
    "revision": "6ca50842204bbaae21d1722a8ad22cf7"
  },
  {
    "url": "img/openvas/gsa_noauth_task.png",
    "revision": "fd779e1ba6466b852863936c0bbc4527"
  },
  {
    "url": "img/openvas/gsa_target_auth.png",
    "revision": "9a602b0a9cf7ce2ecd67ebd2f5fa59fd"
  },
  {
    "url": "img/openvas/gsa_target.png",
    "revision": "2a69f5dd7c68a9f5f1fab0d59bfcc60b"
  },
  {
    "url": "img/openvas/gsa_targets.png",
    "revision": "7a3ebf39135e960ee4cc8eae1554eb1d"
  },
  {
    "url": "img/openvas/gsa_task.png",
    "revision": "5843f298967649c9d3eaf8302099b621"
  },
  {
    "url": "img/openvas/gsa_tasks.png",
    "revision": "578e858b776d0a23609524bf76cf86f6"
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
    "url": "img/privacyidea/privacyidea_login.png",
    "revision": "807fcb9651a316aa89188daee7c120cc"
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
    "revision": "b7a4bbd30d90382a2741ad2b2065e86a"
  },
  {
    "url": "intrusion/index.html",
    "revision": "049c228a9e3345b74f90bc95e2d177f3"
  },
  {
    "url": "jira/index.html",
    "revision": "854e3055c4a3b2a8bd810b73ce1b5926"
  },
  {
    "url": "ldap/index.html",
    "revision": "ffe9bf194188a81f83ffc33748d90b32"
  },
  {
    "url": "mmonit/index.html",
    "revision": "d695577ae831e47cbb36275797129fe4"
  },
  {
    "url": "openvas/index.html",
    "revision": "b662c38f2ecfc2952570b8454b942f76"
  },
  {
    "url": "ossec/index.html",
    "revision": "f4075de724913f9b8efef5b9260491e6"
  },
  {
    "url": "pcp/index.html",
    "revision": "be7672d404c4cd6cd5dac00e96c4d925"
  },
  {
    "url": "privacyidea/index.html",
    "revision": "8b04e744360b5658688b235640223747"
  },
  {
    "url": "psad/index.html",
    "revision": "6aa5cecafe18ca478eba088f1ca50bb7"
  },
  {
    "url": "radius/index.html",
    "revision": "15f22b95cf41639a954f97962f949d7d"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "efd86a3dd691c1cde51abb62f522a9a1"
  },
  {
    "url": "tags.html",
    "revision": "54d82a7070f6916b3493060c0aade602"
  },
  {
    "url": "u2f/index.html",
    "revision": "9a902d779a1647b4523cd84212a223d0"
  },
  {
    "url": "wireguard/index.html",
    "revision": "efcfd489d8086512816df03f26fc3cec"
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
