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
    "revision": "502e2de5273e7438b09c3afbc59b93ab"
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
    "url": "assets/js/10.4793372d.js",
    "revision": "b5adb3905916ef89e22b652e9085e0ec"
  },
  {
    "url": "assets/js/11.d35e1875.js",
    "revision": "1ec84edc80635002dfdf45765214600b"
  },
  {
    "url": "assets/js/12.a1e01fb3.js",
    "revision": "d2b9be493c7ef9b117c4052ce0519e16"
  },
  {
    "url": "assets/js/13.5250c27e.js",
    "revision": "b7d0192e209f511e335eeb0adc87d873"
  },
  {
    "url": "assets/js/14.0cded0f3.js",
    "revision": "80e7c8298c842b26b7d75bd8df4bb296"
  },
  {
    "url": "assets/js/15.fe9867f8.js",
    "revision": "cabda3db89eb0588def4943e5c48130f"
  },
  {
    "url": "assets/js/16.02e77844.js",
    "revision": "b2425f8f6086fb57b907d4abf7e63bb7"
  },
  {
    "url": "assets/js/17.07c0ae23.js",
    "revision": "129d13a55eacdfc7837a397151e3ad04"
  },
  {
    "url": "assets/js/18.c22eee66.js",
    "revision": "eeaff73eaafcba2f1f18a8169e31510c"
  },
  {
    "url": "assets/js/19.b6980fc0.js",
    "revision": "ec3bd09d250a88a0d20331e95dcb18b4"
  },
  {
    "url": "assets/js/2.53560d62.js",
    "revision": "abc347dcc53c298ab65a913e8fafc435"
  },
  {
    "url": "assets/js/20.795852d2.js",
    "revision": "9d26535baa6d23e57e9310b8910facbc"
  },
  {
    "url": "assets/js/21.74072a1e.js",
    "revision": "e4d0a8fd6f7aed25dfec8d4d811e1970"
  },
  {
    "url": "assets/js/22.5c492b1b.js",
    "revision": "f2996a5937daf8eb86fdd27a81b0ae53"
  },
  {
    "url": "assets/js/23.99b73445.js",
    "revision": "e1fcd8fd97d272dfa549708b0477f8fd"
  },
  {
    "url": "assets/js/24.2eef5566.js",
    "revision": "a0b1174b6f3650dc95e44550aa62f1a0"
  },
  {
    "url": "assets/js/25.3badae01.js",
    "revision": "1295ec1ba9c1a064ee4198f9b3eb46e1"
  },
  {
    "url": "assets/js/26.71f40962.js",
    "revision": "f0d8a28ae7331a6c33b78353e0129c3e"
  },
  {
    "url": "assets/js/27.25c7bcb9.js",
    "revision": "964bc0409cec047991de9b9628557409"
  },
  {
    "url": "assets/js/3.74960433.js",
    "revision": "4929284f0bad126536cb938db97d487c"
  },
  {
    "url": "assets/js/4.6ad81ea5.js",
    "revision": "cb1c32f7cb15ba13114fcc00877b1464"
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
    "url": "assets/js/7.98efc515.js",
    "revision": "c9cd97ba8992cddc098db427eada6a23"
  },
  {
    "url": "assets/js/8.18751691.js",
    "revision": "3492ccb5a6c89edc770adeb8ebd154d5"
  },
  {
    "url": "assets/js/9.3ad68b16.js",
    "revision": "aa36ef7cd5c8f0e5a8caba996c3a7745"
  },
  {
    "url": "assets/js/app.b4a404a4.js",
    "revision": "576c702dd1f0aece8c3cf9ccc8927a38"
  },
  {
    "url": "clamav/index.html",
    "revision": "35658e40bf2aaed64cf1cb2b11636018"
  },
  {
    "url": "graylog/index.html",
    "revision": "65f5406267ad4acc034b7e0d6ca56abc"
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
    "url": "img/clamav/clamdtop.png",
    "revision": "70e640af3e69f4f974905a9381e7bb37"
  },
  {
    "url": "img/clamav/win10client1.png",
    "revision": "f34cd1352dd6ed4a0ba01e39c66e0ce2"
  },
  {
    "url": "img/clamav/win10client2.png",
    "revision": "73f9904f6b426f5e487673d5a8e72b0e"
  },
  {
    "url": "img/clamav/win10client3.png",
    "revision": "1f99bca85b1744912a236d4f77b430ef"
  },
  {
    "url": "img/clamav/win10client4.png",
    "revision": "7ce922e5c56669526fc1ff8c1161ffdd"
  },
  {
    "url": "img/clamav/win10client5.png",
    "revision": "2b920569ffbc48ab27b34519f886022a"
  },
  {
    "url": "img/clamav/win10client6.png",
    "revision": "2939567bf03afc738ab77248a4ca3dab"
  },
  {
    "url": "img/clamav/win10client7.png",
    "revision": "4434a4c43d1293366fd3fa1f4c2e54d4"
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
    "revision": "626dd1ffe96a0de22a2f4b11fdab5674"
  },
  {
    "url": "intrusion/index.html",
    "revision": "4bc1bb15cc460b11640767ead84dd40e"
  },
  {
    "url": "jira/index.html",
    "revision": "e640a89db47c9edb5771f029248650af"
  },
  {
    "url": "ldap/index.html",
    "revision": "74b8a4a4b41187310c37e66edb852c5d"
  },
  {
    "url": "mmonit/index.html",
    "revision": "f03019fd70c1eb49a688410e4c361b3c"
  },
  {
    "url": "openvas/index.html",
    "revision": "3025eead087b79f44e04e770734e0123"
  },
  {
    "url": "ossec/index.html",
    "revision": "25ff2c0dac985f8d78056c914dd63e6c"
  },
  {
    "url": "pcp/index.html",
    "revision": "f413a9aa6699478066d2e4487b196d6b"
  },
  {
    "url": "privacyidea/index.html",
    "revision": "38a77a07e32ae41fcb77671a4ee2ede6"
  },
  {
    "url": "psad/index.html",
    "revision": "80a78605127fbf26e5aea40a5c212d45"
  },
  {
    "url": "radius/index.html",
    "revision": "58b045f2f09c9bb404635cad701f6186"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "cbd44bf5fc2da800457dae463a35e4a0"
  },
  {
    "url": "tags.html",
    "revision": "45d18f11e3ac97462b88f34a824f04e1"
  },
  {
    "url": "u2f/index.html",
    "revision": "22e26e0ebda4f6b6217756a9fad28e37"
  },
  {
    "url": "wireguard/index.html",
    "revision": "dba0fa375fccbd39530152ef7024c6ef"
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
