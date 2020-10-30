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
    "revision": "96a2f4b6b86619536574253956548acf"
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
    "url": "assets/js/10.35348df8.js",
    "revision": "e9ad8dd1cef98eb1ff16cd335f561aef"
  },
  {
    "url": "assets/js/11.9424e09c.js",
    "revision": "b0491b68c7f523a83eef8fae568133b1"
  },
  {
    "url": "assets/js/12.5f7cf064.js",
    "revision": "1b564a1f148b3c5c9cb8bf84e30c7b50"
  },
  {
    "url": "assets/js/13.95657298.js",
    "revision": "66a0e2e2dbe1bd20674665b5b2e5c626"
  },
  {
    "url": "assets/js/14.76964f4f.js",
    "revision": "309f5d7bffb8576fec57fe60544b63ba"
  },
  {
    "url": "assets/js/15.816c8a0b.js",
    "revision": "704f7cca2d052661fe32731930db15ef"
  },
  {
    "url": "assets/js/16.1360ac48.js",
    "revision": "3e9992af7b9e500b259d0be04cff3cd4"
  },
  {
    "url": "assets/js/17.a18e5e39.js",
    "revision": "500e65b4d9e3a9df726487b3a486d50a"
  },
  {
    "url": "assets/js/18.b44844e0.js",
    "revision": "b6714347eebab718ec403d54e79c9e15"
  },
  {
    "url": "assets/js/19.545bd46f.js",
    "revision": "087afb1fe0bce0f50ff8dfaf3c95abfa"
  },
  {
    "url": "assets/js/2.e353e761.js",
    "revision": "53e4a7a67c98e05d30e5415cd5881dca"
  },
  {
    "url": "assets/js/20.d9e98458.js",
    "revision": "8e3b709f29ee9315935e736a8aa249b1"
  },
  {
    "url": "assets/js/21.ad621412.js",
    "revision": "8126cda4c852600b37ba2a4ced911672"
  },
  {
    "url": "assets/js/22.28ec2cca.js",
    "revision": "71a2df6702266a70d89b3c6737a10742"
  },
  {
    "url": "assets/js/23.7020c092.js",
    "revision": "51cb532519322a9486280bb7c0653cae"
  },
  {
    "url": "assets/js/24.d055dc44.js",
    "revision": "bd64ca58adba28fb08ee5534f0aee4f3"
  },
  {
    "url": "assets/js/3.3f5c497c.js",
    "revision": "1e6e700f546c84f36b8a387f243b5576"
  },
  {
    "url": "assets/js/4.ed4be205.js",
    "revision": "f9bc216320a9e3d7a720334fdc31ff4e"
  },
  {
    "url": "assets/js/5.a313e72d.js",
    "revision": "5d35b994a0693d9825c1d4b85454cc70"
  },
  {
    "url": "assets/js/6.55729b8b.js",
    "revision": "acf1620f722514e544453aeaa8e0b315"
  },
  {
    "url": "assets/js/7.219e3ca1.js",
    "revision": "3532289fbabe187038e0aa8ba72176eb"
  },
  {
    "url": "assets/js/8.7c740bba.js",
    "revision": "2d0aab6a89ad671250d19520e03a7d73"
  },
  {
    "url": "assets/js/9.cf3ea7ae.js",
    "revision": "1b1604b8ea4ec0d8b8e0cb14980ef1b7"
  },
  {
    "url": "assets/js/app.d453dce2.js",
    "revision": "bd2bd3bc84d4b143c27503de33d11d70"
  },
  {
    "url": "graylog/index.html",
    "revision": "9458086b832b552c1340c7194609a311"
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
    "revision": "bd4364eb1b10f0802050d4e272f5e569"
  },
  {
    "url": "intrusion/index.html",
    "revision": "bf0ebfef3d724dc9f7663e51750eee00"
  },
  {
    "url": "jira/index.html",
    "revision": "d6f859f97541fd63a85be775cab7f2f3"
  },
  {
    "url": "ldap/index.html",
    "revision": "f247d8fe42a2332a5aeab98a5b11d5f9"
  },
  {
    "url": "mmonit/index.html",
    "revision": "3a441ee5f0cf8ebac7899634fa2dfaac"
  },
  {
    "url": "openvas/index.html",
    "revision": "f1ee6f2c5da080b1dea65bf0869778e8"
  },
  {
    "url": "ossec/index.html",
    "revision": "d3a971872823a7034d76c6c3c553c3e7"
  },
  {
    "url": "pcp/index.html",
    "revision": "148ea6713cd2631536f9860181483960"
  },
  {
    "url": "psad/index.html",
    "revision": "48aec1cf5df03ec0032e25fe7d2c9ba0"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "518fe7b00f23bd3167fcbc60c1f5b402"
  },
  {
    "url": "tags.html",
    "revision": "31cd421d90b4adfad4743a0035cf6f9b"
  },
  {
    "url": "u2f/index.html",
    "revision": "06c21ec10a77eb9cf2abffbaac1cc0c9"
  },
  {
    "url": "wireguard/index.html",
    "revision": "80fb6f00b5d3175f64600506f0caad7f"
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
