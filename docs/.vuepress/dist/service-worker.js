if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,r,n)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const a={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return i;case"module":return a;default:return e(s)}}))).then((e=>{const s=n(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"c5bf4e9618c10b66d36715a2aff36f73"},{url:"assets/css/styles.3b6c1e16.css",revision:null},{url:"assets/img/72x72.png",revision:"b36cd3c87f00f07092b6442b7e00b0a6"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/js/205.1ea45288.js",revision:null},{url:"assets/js/293.6494fad0.js",revision:null},{url:"assets/js/491.4a97b311.js",revision:null},{url:"assets/js/540.11f65dc4.js",revision:null},{url:"assets/js/app.52dfa08f.js",revision:null},{url:"assets/js/runtime~app.3f4dfc1b.js",revision:null},{url:"assets/js/v-027091ee.9ae01d9a.js",revision:null},{url:"assets/js/v-05c87ea8.31aade99.js",revision:null},{url:"assets/js/v-15230830.d1dcd8cd.js",revision:null},{url:"assets/js/v-3706649a.720e3ace.js",revision:null},{url:"assets/js/v-45ab5f72.fc98c801.js",revision:null},{url:"assets/js/v-8daa1a0e.5eda4e8a.js",revision:null},{url:"assets/js/v-8eb80d6c.89bb46b8.js",revision:null},{url:"assets/js/v-9d458a02.ea680d7b.js",revision:null},{url:"assets/js/v-9f469928.1b2f47ab.js",revision:null},{url:"assets/js/v-c638a1e8.92087e3e.js",revision:null},{url:"assets/js/v-e4dd43ca.007aad4e.js",revision:null},{url:"clamav/index.html",revision:"d0a081584ac9682d12c5821b0498e2ea"},{url:"graylog/index.html",revision:"823b2a5131446fb7cb6bb3d766ee3782"},{url:"img/icons/1200x627.png",revision:"4ed965ba2daf1f2907b5696f47949426"},{url:"img/icons/1280x640.png",revision:"2f2b95eb6ef52574bd86b1e426be9df9"},{url:"img/icons/144x144.png",revision:"c5abed2721558a98cd5adb1b28d5f032"},{url:"img/icons/1500x500.png",revision:"cb77b3aa40b6fbdd9a25ecb8fed580d3"},{url:"img/icons/192x192.png",revision:"b8853a3b71b3a7e79c116d8d2dc8fe99"},{url:"img/icons/256x256.png",revision:"64014871dd4b25592423d91c4a007f3a"},{url:"img/icons/384x384.png",revision:"f5837cc63fdd26d96461a55d61fb1944"},{url:"img/icons/4096x4096.png",revision:"9e79bb6db785b2243380efb2546cf841"},{url:"img/icons/48x48.png",revision:"c1077dc498ae97b7f5209da9277579e3"},{url:"img/icons/512x512.png",revision:"0a91e0a9adeee05b4a0feeadd06574dd"},{url:"img/icons/72x72.png",revision:"b36cd3c87f00f07092b6442b7e00b0a6"},{url:"img/icons/96x96.png",revision:"2907ea3e33e14a352ba8d282e0f32cd5"},{url:"img/ossec/512x512.png",revision:"bee855a078b5cf7941dcc4c2838ddf1d"},{url:"img/ossec/cloudflare_token.png",revision:"c36576440c64fceb89e53cf4f8dd1921"},{url:"img/ossec/remote_syslog_settings.png",revision:"29e56b2348c0689d577022cc7c799d6e"},{url:"img/ossec/remote_syslog_value.png",revision:"213cebc9172c9a1f8f8a3a011dfd9a95"},{url:"img/ossec/windows_agent_complete.png",revision:"8a5f36cb5a5469e42530fcb44543b045"},{url:"img/ossec/windows_agent_components.png",revision:"15d8bf841dbdce26c04ca09b48538dcf"},{url:"img/ossec/windows_agent_manager.png",revision:"095dfcef88dff43ea831b872ccd87898"},{url:"img/ossec/windows_agent_setup.png",revision:"3781048e9d3c81ec993f3cb08cacaa22"},{url:"img/wireguard/mullvad.png",revision:"c65696e0b1b1b1f2fe809aef5c80f932"},{url:"index.html",revision:"eb7bfb41762767845885662c7b1f3c96"},{url:"mmonit/index.html",revision:"59b90180241145da07163c291a4e3415"},{url:"openvas/index.html",revision:"00455b596e5f57677e9fcfa9b0fc9530"},{url:"ossec/index.html",revision:"aaf5a636de3cb5e74e3accc60c074293"},{url:"privacyidea/index.html",revision:"1525f5b8991f28c9a5baf1fd3a00371f"},{url:"psad/index.html",revision:"7ad6cf71d6ad66c139312ef2e1bea327"},{url:"rsyslog/index.html",revision:"e8cba66e5cab8ad0fb741d4e5bd7387a"},{url:"wireguard/index.html",revision:"84f05b9310669a0e22ea3f2297763f12"}],{})}));
