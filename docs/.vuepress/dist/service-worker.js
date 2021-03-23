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
    "revision": "7c07190d6dc71444bd19b9b1734be2d7"
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
    "url": "assets/js/10.eba5ccfb.js",
    "revision": "788f139d59039dce7c1391cbf3442727"
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
    "url": "assets/js/17.ab0b673e.js",
    "revision": "0648b5148beffce3f291e860a73bbd32"
  },
  {
    "url": "assets/js/18.7fd4dc8f.js",
    "revision": "dc29b650a1d34de4b9881760e830878a"
  },
  {
    "url": "assets/js/19.32ef3c4c.js",
    "revision": "4b4481853a89114e11e20b3b8cecbb3e"
  },
  {
    "url": "assets/js/2.bc582ca1.js",
    "revision": "4e2d87acdfdbcd63290cf0287f75ea06"
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
    "url": "assets/js/25.0f7e550b.js",
    "revision": "bfa0f0607f70d0517368ab6ab485fe98"
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
    "url": "assets/js/6.355dcf85.js",
    "revision": "fc9d82b49b98eadb10805a634a3f94cf"
  },
  {
    "url": "assets/js/7.0fdb1b48.js",
    "revision": "50ec0201de3c6677d3c0a1884e70f1c9"
  },
  {
    "url": "assets/js/8.6af0b5e2.js",
    "revision": "3492ccb5a6c89edc770adeb8ebd154d5"
  },
  {
    "url": "assets/js/9.3ad68b16.js",
    "revision": "aa36ef7cd5c8f0e5a8caba996c3a7745"
  },
  {
    "url": "assets/js/app.dc0a9300.js",
    "revision": "a8784d1fe269d2e949812d5d3e1a93cc"
  },
  {
    "url": "graylog/index.html",
    "revision": "66d3e8618a00bef136540fb23c2c9898"
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
    "revision": "9fd959d72bd8e7cfe2a471a02c154f84"
  },
  {
    "url": "intrusion/index.html",
    "revision": "aac5282131133557413b141e6ec6622c"
  },
  {
    "url": "jira/index.html",
    "revision": "f291a9a637cd9454ee209be481bced85"
  },
  {
    "url": "ldap/index.html",
    "revision": "cff678d44136ae2b390b3214c66c4b24"
  },
  {
    "url": "mmonit/index.html",
    "revision": "8065a2382325290dca8825482b09c403"
  },
  {
    "url": "openvas/index.html",
    "revision": "765a2d1b2dd0f5197133fc040da79a07"
  },
  {
    "url": "ossec/index.html",
    "revision": "289ec5965ac6753a5d533bc670d2292c"
  },
  {
    "url": "pcp/index.html",
    "revision": "74019b4198a3a07b94a4524ff555d11e"
  },
  {
    "url": "privacyidea/index.html",
    "revision": "5c2828745e2b3e463cdbfb98f33aa8da"
  },
  {
    "url": "psad/index.html",
    "revision": "2e517e0cb0e44e312b19c26085407aa4"
  },
  {
    "url": "radius/index.html",
    "revision": "ba8c6e9385e413df1db75908419fc9a2"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "e7e417f6f23af43f3a2bac1051f690df"
  },
  {
    "url": "tags.html",
    "revision": "808e9019d87bf62b7be1131a0ad41871"
  },
  {
    "url": "u2f/index.html",
    "revision": "b07d7d5f6ecc4dbd2477f4d749ae9d77"
  },
  {
    "url": "wireguard/index.html",
    "revision": "0e87e136df3f69bd5f2e52d9d10dddad"
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
