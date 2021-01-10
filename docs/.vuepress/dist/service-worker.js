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
    "revision": "72389529dfb0bd34bdd11764d65b22fb"
  },
  {
    "url": "assets/css/0.styles.d1ace3c6.css",
    "revision": "5cccd062dd56c3d84d238b8bb5a93bf4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.763d4f5c.js",
    "revision": "efaec5719ee796565d31450a0b5f4c79"
  },
  {
    "url": "assets/js/11.1e31a3db.js",
    "revision": "0feb2fe9df5553d5423ecb747ad7c172"
  },
  {
    "url": "assets/js/12.72fea953.js",
    "revision": "952cb455a14ba9b084b3be3d81e42e02"
  },
  {
    "url": "assets/js/13.935b29cc.js",
    "revision": "05272f2c07ede5c07ec11e945f0f6f4b"
  },
  {
    "url": "assets/js/14.b14d6ea0.js",
    "revision": "53d0131725b88c4ba22f5b9e750ca383"
  },
  {
    "url": "assets/js/15.cf6894a6.js",
    "revision": "a957ab491b9959773baa6fa07cce6a35"
  },
  {
    "url": "assets/js/16.134f8a48.js",
    "revision": "a5e0f5276a881b28e28506772066cee6"
  },
  {
    "url": "assets/js/17.6166684c.js",
    "revision": "4843df53b617726bcdda313a510a410d"
  },
  {
    "url": "assets/js/18.beed4f5f.js",
    "revision": "f16a7e4664b441ecfa5aa5ec70195bc4"
  },
  {
    "url": "assets/js/19.a6967300.js",
    "revision": "973320c27aea8440dc3bb6b61c93ff00"
  },
  {
    "url": "assets/js/2.d874648d.js",
    "revision": "8f0eea0fe97531e64e50c987d3c857fe"
  },
  {
    "url": "assets/js/20.f4df2e15.js",
    "revision": "f51a719b5dbf786c43374e535c7bda24"
  },
  {
    "url": "assets/js/21.081f4d3d.js",
    "revision": "f2d1f737ce02376ff7f3df6474059258"
  },
  {
    "url": "assets/js/22.d9f42ac4.js",
    "revision": "5ef79d1d7bcf8f743d9665e99ce74542"
  },
  {
    "url": "assets/js/23.9e43aaae.js",
    "revision": "d3a2f20396542f0b35f4d20744113e10"
  },
  {
    "url": "assets/js/24.de85801d.js",
    "revision": "b553adb659c9aa77b07ba858462c188a"
  },
  {
    "url": "assets/js/25.3b02e7be.js",
    "revision": "9ab2fc0a713d49628a817a41092f89fc"
  },
  {
    "url": "assets/js/26.56278487.js",
    "revision": "5a5a2fa9bd3442aea345477af57e37ae"
  },
  {
    "url": "assets/js/3.ea75f214.js",
    "revision": "20ee0ed44eb21d70506dc134d73fac4c"
  },
  {
    "url": "assets/js/4.9c9bfe33.js",
    "revision": "84b9a74ff02084c0d2ff6b99b295cc5c"
  },
  {
    "url": "assets/js/5.a6c68754.js",
    "revision": "81dd3f676d8bea0fe6f8578a096fc319"
  },
  {
    "url": "assets/js/6.fc5642e0.js",
    "revision": "94d02ca2f6f86a0b196e0a3fc3d83df5"
  },
  {
    "url": "assets/js/7.91802edd.js",
    "revision": "21608b450192a61bd2f0af039db74694"
  },
  {
    "url": "assets/js/8.5d069f14.js",
    "revision": "99b37537b4f04d5c82d46b85847ddc3c"
  },
  {
    "url": "assets/js/9.75eddf3f.js",
    "revision": "9e37d59ebf96965496bdabdd3168ab31"
  },
  {
    "url": "assets/js/app.0a8d29c4.js",
    "revision": "f247d1683834ba6117e87facf75a313d"
  },
  {
    "url": "graylog/index.html",
    "revision": "48196e032d30ca20fd7a1f81f6cbe6c8"
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
    "revision": "7dc40b711d4d4cd4d31400fd036594b8"
  },
  {
    "url": "intrusion/index.html",
    "revision": "ba8c2aa24a378095d61364d031091c24"
  },
  {
    "url": "jira/index.html",
    "revision": "7b252ec216b4f7e4e5c38b8cff26c54d"
  },
  {
    "url": "ldap/index.html",
    "revision": "b1b7128aa4b1b4145fba99b98133e78a"
  },
  {
    "url": "mmonit/index.html",
    "revision": "70178ba1700219b9becd4d50dda052ab"
  },
  {
    "url": "openvas/index.html",
    "revision": "88f5237583ba673da695c822a10557db"
  },
  {
    "url": "ossec/index.html",
    "revision": "f12117b58eceb140623bed455ce2e834"
  },
  {
    "url": "pcp/index.html",
    "revision": "372f6122557543cb1f5ece35d8a39ec2"
  },
  {
    "url": "privacyidea/index.html",
    "revision": "666a914557b2e1d94e9310a6c6e5ba95"
  },
  {
    "url": "psad/index.html",
    "revision": "6e55e9d23dcb44253a4f78e4d3470acf"
  },
  {
    "url": "radius/index.html",
    "revision": "e8340c61403c02bf4c7ccd9a99d7d1bc"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "b35779c3b083bfdbbb8b88cd346a6273"
  },
  {
    "url": "tags.html",
    "revision": "39d5d9231535ef02a825f664366d7989"
  },
  {
    "url": "u2f/index.html",
    "revision": "0889ce6bbe4d22ab7ca3075059eabf17"
  },
  {
    "url": "wireguard/index.html",
    "revision": "ad0d1ed1473578f4fc9f504f7c2ffea3"
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
