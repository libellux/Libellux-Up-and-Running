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
    "revision": "cc7dc31710e42cfd9d924123d71af849"
  },
  {
    "url": "assets/css/0.styles.f2632a43.css",
    "revision": "d2db7ab2091b9d5e53ec58b1fdc2b5f4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17306ce1.js",
    "revision": "1e2a784a26b36ad542d6515482a9fd9e"
  },
  {
    "url": "assets/js/11.515a6274.js",
    "revision": "28bb4e7bdef06fa3871c6e8f54d0a8c1"
  },
  {
    "url": "assets/js/12.9c73ba1a.js",
    "revision": "90dc92c0611f123869eb779a58c33cca"
  },
  {
    "url": "assets/js/13.0902454e.js",
    "revision": "904a98f845bd579bda3d5b200a965606"
  },
  {
    "url": "assets/js/14.71c740e7.js",
    "revision": "26bae2689c2a72700efde0451dd67ba5"
  },
  {
    "url": "assets/js/15.8e2076cb.js",
    "revision": "8853db225709dc621e187be4c885ecfe"
  },
  {
    "url": "assets/js/16.fb0d351d.js",
    "revision": "a0ef9efc2c30b87f2f82c76ba885ee3c"
  },
  {
    "url": "assets/js/17.12919654.js",
    "revision": "c04bd1ee5e3bfe9f6322afce5bba72bc"
  },
  {
    "url": "assets/js/18.cabdab85.js",
    "revision": "0c7944ba486bb26e14a1eba2b028d9c6"
  },
  {
    "url": "assets/js/19.1eb39127.js",
    "revision": "9c1ae164146305c423865b5a953cc7e0"
  },
  {
    "url": "assets/js/2.9f641a63.js",
    "revision": "62dd46780bfa456a055e384450cf08ad"
  },
  {
    "url": "assets/js/20.4f70464d.js",
    "revision": "bf6582afc1597688ad992c4c11079f4a"
  },
  {
    "url": "assets/js/21.7d3580ad.js",
    "revision": "3be38610fc112978ce095593ceebec11"
  },
  {
    "url": "assets/js/22.3f9c95c1.js",
    "revision": "84f61cf48fd1d8b199610e07b8ff9241"
  },
  {
    "url": "assets/js/23.89bd57c8.js",
    "revision": "8f9147e30d7215bbc90b1e03b2d378f6"
  },
  {
    "url": "assets/js/24.d573b843.js",
    "revision": "7a323cba19454b87b3fa9b999531eee9"
  },
  {
    "url": "assets/js/25.93a38143.js",
    "revision": "cf09763a1ee8b916b4592e73cbe56f50"
  },
  {
    "url": "assets/js/26.81f7206a.js",
    "revision": "9a078a5895261a94359b96a332a25c29"
  },
  {
    "url": "assets/js/3.74960433.js",
    "revision": "4929284f0bad126536cb938db97d487c"
  },
  {
    "url": "assets/js/4.b8feeb08.js",
    "revision": "6a448ce957208e0bf463702284ac7ee8"
  },
  {
    "url": "assets/js/5.5f0d00d5.js",
    "revision": "008c475ab15d90bbf69f3ca4a624aba0"
  },
  {
    "url": "assets/js/6.337888e1.js",
    "revision": "9b9072d0df5036c578fbcc3a5d112c31"
  },
  {
    "url": "assets/js/7.0fdb1b48.js",
    "revision": "50ec0201de3c6677d3c0a1884e70f1c9"
  },
  {
    "url": "assets/js/8.aad0a07e.js",
    "revision": "fcb291912846940888867577a616da8b"
  },
  {
    "url": "assets/js/9.3ad68b16.js",
    "revision": "aa36ef7cd5c8f0e5a8caba996c3a7745"
  },
  {
    "url": "assets/js/app.95fd10c6.js",
    "revision": "ba7990ec26bc07b19c299ebb670e1fa1"
  },
  {
    "url": "graylog/index.html",
    "revision": "0fdcba087345f9bfe7651920178885b2"
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
    "url": "img/wireguard/mullvad.png",
    "revision": "c65696e0b1b1b1f2fe809aef5c80f932"
  },
  {
    "url": "index.html",
    "revision": "cdf24fbd3cf8854a6eddc6608a50d577"
  },
  {
    "url": "intrusion/index.html",
    "revision": "79381426e411b1e564dde517c2931dd8"
  },
  {
    "url": "jira/index.html",
    "revision": "246bd0595a5bf740d5165e03802d3265"
  },
  {
    "url": "ldap/index.html",
    "revision": "3808535752bd4227e13ed8ecad1d2b7e"
  },
  {
    "url": "mmonit/index.html",
    "revision": "ad21b49e36adf7e9ac7b2e630e267743"
  },
  {
    "url": "openvas/index.html",
    "revision": "eedaed77ff9653bbebbff361b05c715f"
  },
  {
    "url": "ossec/index.html",
    "revision": "cf0911b306bcabae880e432551ca2c70"
  },
  {
    "url": "pcp/index.html",
    "revision": "c92aac79dd659c3c210650053e300a75"
  },
  {
    "url": "privacyidea/index.html",
    "revision": "87c017c962b407bda108f491cfdeabe3"
  },
  {
    "url": "psad/index.html",
    "revision": "c4a23eff78392375ac2fab8e427cdab0"
  },
  {
    "url": "radius/index.html",
    "revision": "807a4ef6b2ae600edcd7e579b0d0052b"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "d5825adbce79d2170030c1c7765353d2"
  },
  {
    "url": "tags.html",
    "revision": "c369ab4aa30aa0f8065899146fd77c9b"
  },
  {
    "url": "u2f/index.html",
    "revision": "38fb88ecc82b88e2277ee05c2d22ba08"
  },
  {
    "url": "wireguard/index.html",
    "revision": "43e84f2e450734f03621dbc84976e842"
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
