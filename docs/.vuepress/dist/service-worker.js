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
    "revision": "021a7c9f18d0c9d65d7cf17859b3e1db"
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
    "url": "assets/js/10.b2e5a975.js",
    "revision": "598adccc8698a1527f235f435109d50e"
  },
  {
    "url": "assets/js/11.0320b633.js",
    "revision": "109dd2de900b1fee6cb3ae18f0c8be39"
  },
  {
    "url": "assets/js/12.c89e6e1d.js",
    "revision": "4e58cc592f9dde932f6c6aa0a11335d7"
  },
  {
    "url": "assets/js/13.be64d57c.js",
    "revision": "4eb33b072b85d45a8e625aac48ac5420"
  },
  {
    "url": "assets/js/14.8b0ff03b.js",
    "revision": "f9fabcb8559d1bb9a4f18e5c15013552"
  },
  {
    "url": "assets/js/15.e26fd78a.js",
    "revision": "63f5e4d3233d627476d8818c95549b0d"
  },
  {
    "url": "assets/js/16.f3d22f69.js",
    "revision": "f4b4c861a1c632cc5094423395096557"
  },
  {
    "url": "assets/js/17.cd909f53.js",
    "revision": "f6b3c7cc8a2fc629ae2a553ab69e7a9f"
  },
  {
    "url": "assets/js/18.3c77d9d8.js",
    "revision": "596176fa693da273f881c10e8406f9e4"
  },
  {
    "url": "assets/js/19.13c45390.js",
    "revision": "5d1684d7224d990c8cadaf12bc053dc9"
  },
  {
    "url": "assets/js/2.e28a458f.js",
    "revision": "f7848b08f8e0500557adf501c57eabe3"
  },
  {
    "url": "assets/js/20.69dbcc2a.js",
    "revision": "a30d13014322f2eaa0f45a0ca4c3b53a"
  },
  {
    "url": "assets/js/21.b81d1885.js",
    "revision": "80a3cb6c9ce5feb981c91f99c19d9174"
  },
  {
    "url": "assets/js/22.f23a8741.js",
    "revision": "1e7d57e4aec80bc58f7dd2e1af8ec463"
  },
  {
    "url": "assets/js/23.018be8dc.js",
    "revision": "b1efd20090b3209eb0ff7fe46201e325"
  },
  {
    "url": "assets/js/24.f7cd0e39.js",
    "revision": "06596281be1ce101e7409f66bfcc9b08"
  },
  {
    "url": "assets/js/25.98fd9d8e.js",
    "revision": "18bc89c766b469637ec753e1fd031418"
  },
  {
    "url": "assets/js/26.b1c35f23.js",
    "revision": "8355e6ea174f708c4febee7b7dd8845e"
  },
  {
    "url": "assets/js/3.1f33fffe.js",
    "revision": "b07f580f1fc7f69a8a58ed480570faf6"
  },
  {
    "url": "assets/js/4.b602723c.js",
    "revision": "313bf5b1c612f67707fb3ddebbb58f54"
  },
  {
    "url": "assets/js/5.e2ac7791.js",
    "revision": "618a39ea54f91100c9454e0eec76713b"
  },
  {
    "url": "assets/js/6.3b618b4a.js",
    "revision": "3cae484c28e3a4d94b06531925709d80"
  },
  {
    "url": "assets/js/7.bb6d04de.js",
    "revision": "3e1fd88c0c91896067340f099597df98"
  },
  {
    "url": "assets/js/8.01864534.js",
    "revision": "ac6bfb3252d6e4b634a3dc2bbbad709e"
  },
  {
    "url": "assets/js/9.6c51ddc2.js",
    "revision": "d8897812ad9cb8ce401e6d74cd2a685a"
  },
  {
    "url": "assets/js/app.47488a98.js",
    "revision": "64cd5d408e46d307b02a27333ee586bf"
  },
  {
    "url": "graylog/index.html",
    "revision": "c83a9e8779081eeeb0d7ff9a78841d59"
  },
  {
    "url": "img/books.png",
    "revision": "9cd234e3b3f0ec39854959d384e9cd5c"
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
    "revision": "ce4374a84227d15cac6430f1e752a05f"
  },
  {
    "url": "intrusion/index.html",
    "revision": "0b00a1507b1146c946284b8e260be99e"
  },
  {
    "url": "jira/index.html",
    "revision": "31c464ed4eedd9c85981dea132eac886"
  },
  {
    "url": "ldap/index.html",
    "revision": "ee1e0103850cdfc9080248e6ecabcc6a"
  },
  {
    "url": "mmonit/index.html",
    "revision": "2e1c5c9dd82bd6f9747b014a1b83bbcb"
  },
  {
    "url": "openvas/index.html",
    "revision": "fec095ca93b43cf9e9775d5ba7bbe81e"
  },
  {
    "url": "ossec/index.html",
    "revision": "7ef8ac2347776ad3c82ed82d61286f6c"
  },
  {
    "url": "pcp/index.html",
    "revision": "fe007666fa613d2a5103fec59b8e9197"
  },
  {
    "url": "privacyidea/index.html",
    "revision": "70a0f1773369984f45784f2549ddaf13"
  },
  {
    "url": "psad/index.html",
    "revision": "635dbdb293c05f95be4d029cd15ce5df"
  },
  {
    "url": "radius/index.html",
    "revision": "1aafa745aca57c4bd23aeab288bda43f"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "2f9bd0b78f0c39e360867086af09ca3c"
  },
  {
    "url": "tags.html",
    "revision": "bf20fd6a83a0d9479184afbf7c81c388"
  },
  {
    "url": "u2f/index.html",
    "revision": "f5410c78382d7501e082bdcce787555a"
  },
  {
    "url": "wireguard/index.html",
    "revision": "5748dd253d7844f372f6c376bae2302c"
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
