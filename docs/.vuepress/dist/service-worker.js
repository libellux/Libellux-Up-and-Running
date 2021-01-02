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
    "revision": "dcde439e14cb6760e1891cc9db9c02b7"
  },
  {
    "url": "assets/css/0.styles.b8ab5160.css",
    "revision": "1cd13711469d3f4ec212c535dc98fdfc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6432e638.js",
    "revision": "57cd9d5495e671941b6d10e1892015e4"
  },
  {
    "url": "assets/js/11.4beedad9.js",
    "revision": "a49e4ad6f777f01f0a987ab3f17003e2"
  },
  {
    "url": "assets/js/12.ca0c1543.js",
    "revision": "05e3e3a72cd1ef49cc5a87880affb898"
  },
  {
    "url": "assets/js/13.f7fa1c82.js",
    "revision": "157da3ef6126f71d058bf30a9e1ec787"
  },
  {
    "url": "assets/js/14.cf94a634.js",
    "revision": "9fc778c479dd6c8383d7df185c744ecf"
  },
  {
    "url": "assets/js/15.bad2d2f1.js",
    "revision": "d998c55b18342fc1df142d391f9be64e"
  },
  {
    "url": "assets/js/16.d40e511c.js",
    "revision": "ec79f5139e23e429e2baaed26a051067"
  },
  {
    "url": "assets/js/17.df5a9235.js",
    "revision": "10416e9f26d138542290f8755d9a734d"
  },
  {
    "url": "assets/js/18.8883ad56.js",
    "revision": "bb3bd54f249dcf7977e0f24676588232"
  },
  {
    "url": "assets/js/19.4b8d28f1.js",
    "revision": "1e048dbb5fddcf332ea0afad3c634dd5"
  },
  {
    "url": "assets/js/2.ea066569.js",
    "revision": "d0a4d88a09eb0710c7175e80dde44fce"
  },
  {
    "url": "assets/js/20.cee09cb7.js",
    "revision": "653fb39561158a2cdeb05e02fd655dee"
  },
  {
    "url": "assets/js/21.c9521772.js",
    "revision": "3e791a3fa3d0c64c851d96cef2606508"
  },
  {
    "url": "assets/js/22.4838b5af.js",
    "revision": "be7b289b57e1aa3c91a3195c5f146c44"
  },
  {
    "url": "assets/js/23.4eec5ead.js",
    "revision": "651b790f438db5abbaa056cb5248e6a6"
  },
  {
    "url": "assets/js/24.57c97489.js",
    "revision": "b553adb659c9aa77b07ba858462c188a"
  },
  {
    "url": "assets/js/25.4ce260ce.js",
    "revision": "64bd993493c9f0dc58e513013d9a36a5"
  },
  {
    "url": "assets/js/26.216e5f8e.js",
    "revision": "14b99b09efebdc074058d6d949fe59b6"
  },
  {
    "url": "assets/js/3.e7b4331e.js",
    "revision": "acc788e8be846a01160af146ee967aa9"
  },
  {
    "url": "assets/js/4.3fa1f224.js",
    "revision": "b10bd328e6bb02359980e9cb0df300ea"
  },
  {
    "url": "assets/js/5.e80311fb.js",
    "revision": "913c422bab33103a497f83179c9c3e09"
  },
  {
    "url": "assets/js/6.c38da527.js",
    "revision": "dd7e053c779f1ae1cc13efba538002ff"
  },
  {
    "url": "assets/js/7.d42f1830.js",
    "revision": "011174fba0dce2d7ae66f83d69c16b09"
  },
  {
    "url": "assets/js/8.53185ee8.js",
    "revision": "ced7dcd3180bade61a38ddce1d01a5f6"
  },
  {
    "url": "assets/js/9.a5744e40.js",
    "revision": "be8ac9ea473ede45deb1096e408b3b7c"
  },
  {
    "url": "assets/js/app.80fb013b.js",
    "revision": "81da7e3cad50065fb9b1804f3503bfd9"
  },
  {
    "url": "graylog/index.html",
    "revision": "2e584d07084d8780301650895fa9fa04"
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
    "revision": "d50cd231a60048f932e7aea2986f7746"
  },
  {
    "url": "intrusion/index.html",
    "revision": "ace67523bf111fba6fe2184157e67509"
  },
  {
    "url": "jira/index.html",
    "revision": "e577c2afa1b3af3a0ed558d4d5c15a21"
  },
  {
    "url": "ldap/index.html",
    "revision": "fe60e9ddba91a5fee1bf9813f9207d0e"
  },
  {
    "url": "mmonit/index.html",
    "revision": "4c8416c7268658fd4a656d21f48f8a8c"
  },
  {
    "url": "openvas/index.html",
    "revision": "e983bd49c7f44603f9731946a000af5c"
  },
  {
    "url": "ossec/index.html",
    "revision": "50755da878b76661d5baa85ff91b8941"
  },
  {
    "url": "pcp/index.html",
    "revision": "84ed88d5da067612228388d1779d3746"
  },
  {
    "url": "privacyidea/index.html",
    "revision": "1267fe76b99d83e4a8327496a9b0f294"
  },
  {
    "url": "psad/index.html",
    "revision": "df36ca1fb2db4b61613d3417b547ab12"
  },
  {
    "url": "radius/index.html",
    "revision": "b4443365014dec4c564de1f700de8294"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "77cfaad7aea9e9f4b7fbd9b8a0065eb5"
  },
  {
    "url": "tags.html",
    "revision": "14da26fe5ba8ff58b6c1636152b875c8"
  },
  {
    "url": "u2f/index.html",
    "revision": "e6e8a7d255788365bb7f94b8a8c09cfe"
  },
  {
    "url": "wireguard/index.html",
    "revision": "341f0b44533bdaa2d0db44e5ec856eb0"
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
