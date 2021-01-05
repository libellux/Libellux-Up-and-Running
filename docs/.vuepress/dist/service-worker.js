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
    "revision": "ab6f7fa02741eaad9ed78a8afd97dcaa"
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
    "url": "assets/js/10.82f915fd.js",
    "revision": "8eabeeac7d60865687b044ddd7c356fa"
  },
  {
    "url": "assets/js/11.59dba166.js",
    "revision": "700d708b2888eb1302ed59e7e2e2c38e"
  },
  {
    "url": "assets/js/12.72fea953.js",
    "revision": "952cb455a14ba9b084b3be3d81e42e02"
  },
  {
    "url": "assets/js/13.bf49f214.js",
    "revision": "666edbc7e46b9a982e70bff553d2449e"
  },
  {
    "url": "assets/js/14.92440c9c.js",
    "revision": "28979b46af2c105f975058a2a13db45b"
  },
  {
    "url": "assets/js/15.0511ab1a.js",
    "revision": "744f5305e78d4482648affed4f507f7f"
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
    "url": "assets/js/18.8533039b.js",
    "revision": "2a0238fca4604d000c61de34b3642221"
  },
  {
    "url": "assets/js/19.d36e0588.js",
    "revision": "3c3325a10b5b13fec13e3f082ee38a5f"
  },
  {
    "url": "assets/js/2.d874648d.js",
    "revision": "8f0eea0fe97531e64e50c987d3c857fe"
  },
  {
    "url": "assets/js/20.e8370514.js",
    "revision": "a4f712b21f54ea2c00cde278f182acc8"
  },
  {
    "url": "assets/js/21.6bc93fc0.js",
    "revision": "6cfa5d44530c73fb9a158710427b3823"
  },
  {
    "url": "assets/js/22.64d11083.js",
    "revision": "ab38737d839f99b056a260fe58634fc4"
  },
  {
    "url": "assets/js/23.8d929163.js",
    "revision": "b8f851828106e6a06e06fde2c3b5dd79"
  },
  {
    "url": "assets/js/24.a821532a.js",
    "revision": "3792fda06ee21caada6bb49c5d49e15f"
  },
  {
    "url": "assets/js/25.76d95e0d.js",
    "revision": "70a4b0a1e08d8dc871c2636f8db7113d"
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
    "url": "assets/js/app.d64a935a.js",
    "revision": "f3244d19e7ec6f477d0344ea88ce82a3"
  },
  {
    "url": "graylog/index.html",
    "revision": "a3b447eabe23cfa044fa8f5bdb8e2f97"
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
    "revision": "6791f933d05545a95ce304b3edd47c22"
  },
  {
    "url": "intrusion/index.html",
    "revision": "aba515cd43045097ea817072b70c11ec"
  },
  {
    "url": "jira/index.html",
    "revision": "e5929f0d29607eafac0edada6c475ee2"
  },
  {
    "url": "ldap/index.html",
    "revision": "c2eb456262ba7576d3efc337d4643fe6"
  },
  {
    "url": "mmonit/index.html",
    "revision": "374d7b73eebf161642da0a39ffb42a38"
  },
  {
    "url": "openvas/index.html",
    "revision": "0f5ef3391fc8f649126259bc333bf951"
  },
  {
    "url": "ossec/index.html",
    "revision": "d5998657f9db4c654b74de934face8e2"
  },
  {
    "url": "pcp/index.html",
    "revision": "e0ceff18dad5edaef8f5ea737dace54a"
  },
  {
    "url": "privacyidea/index.html",
    "revision": "fa27eabbad9c715c51ae453aeef01653"
  },
  {
    "url": "psad/index.html",
    "revision": "ea9cd8635b2e4d16c6181f79edc755c6"
  },
  {
    "url": "radius/index.html",
    "revision": "bba36efdb6324590acbf26636e29b645"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "903537de283f12b4fab4305b47863ac6"
  },
  {
    "url": "tags.html",
    "revision": "e1be42afa9106e2f7ccaf8b1ae7671d9"
  },
  {
    "url": "u2f/index.html",
    "revision": "71ce9ccd5a8b9f11407b917b9e5109c0"
  },
  {
    "url": "wireguard/index.html",
    "revision": "2b10f16ce23aaa90d3a100aa82bbdb9e"
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
