if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let d={};const r=e=>s(e,c),f={module:{uri:c},exports:d,require:r};i[c]=Promise.all(a.map((e=>f[e]||r(e)))).then((e=>(n(...e),d)))}}define(["./workbox-03270c55"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"9cf5b396d3424a57e9885fb811a7ef23"},{url:"ansible/index.html",revision:"7f662edec61dae60e7392413ace920be"},{url:"assets/404.html-DjV8MXx5.js",revision:"43348184c77c9fc53726bc78274396e6"},{url:"assets/app-sJdlpeZX.js",revision:"f7635087488c4b6021250c2f2fca53c9"},{url:"assets/docsearch-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/img/72x72.png",revision:"b36cd3c87f00f07092b6442b7e00b0a6"},{url:"assets/index-DiZEX-Ml.js",revision:"fa112b5cda5ee3c969c504c6a3080b4c"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-Buvjo_Tb.js",revision:"05409c00de7de0332decd33b67306802"},{url:"assets/index.html-C0CavkHZ.js",revision:"52b20edab7bd0c5cd6f9ea14a1dbf325"},{url:"assets/index.html-CqfCttmL.js",revision:"611ec079209d81df3b2e9710e9a4ec57"},{url:"assets/index.html-CvG9TNzD.js",revision:"5c8df37bfedba6cf9df45058aa3272cc"},{url:"assets/index.html-D1inPVL7.js",revision:"d9b0ac8cdbe5985361dec9fbe8d98162"},{url:"assets/index.html-D8pIL6Ut.js",revision:"82c8261a11e496701822b429ce172842"},{url:"assets/index.html-DF0R1A2q.js",revision:"351a82826f39818712069edabee5e578"},{url:"assets/index.html-DSOAOHWR.js",revision:"322e5db63f30281b4a79222dd943a04b"},{url:"assets/index.html-MO-zDUL_.js",revision:"0ad13256ac81f683a1da2e8ed1c06963"},{url:"assets/index.html-mTHi9Hm-.js",revision:"d5021b0c72daaaec006a6436e7c5a9cf"},{url:"assets/index.html-YNKcKpEh.js",revision:"9d38d0160c2e19642c7023554b7a02dc"},{url:"assets/privacy-policy.html-Dk6B4KPv.js",revision:"5d07fa5d45239a8e1fd852f0a854b741"},{url:"assets/style-BdrCfhT3.css",revision:"7590e05f5751e4b62252b54b76fb2de8"},{url:"assets/style-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"clamav/index.html",revision:"3f46b062e0e99bb38170de17347d9f61"},{url:"graylog/index.html",revision:"204d24ed68cfa6c36ccfb4fe451cbf7b"},{url:"img/clamav/clamav_diagram.jpg",revision:"21f5b9627e93487a3533eae1ed7491b3"},{url:"img/clamav/win10client1.png",revision:"f34cd1352dd6ed4a0ba01e39c66e0ce2"},{url:"img/clamav/win10client2.png",revision:"73f9904f6b426f5e487673d5a8e72b0e"},{url:"img/clamav/win10client3.png",revision:"1f99bca85b1744912a236d4f77b430ef"},{url:"img/clamav/win10client4.png",revision:"7ce922e5c56669526fc1ff8c1161ffdd"},{url:"img/clamav/win10client5.png",revision:"2b920569ffbc48ab27b34519f886022a"},{url:"img/clamav/win10client6.png",revision:"2939567bf03afc738ab77248a4ca3dab"},{url:"img/icons/1200x627.png",revision:"4ed965ba2daf1f2907b5696f47949426"},{url:"img/icons/1280x640.png",revision:"2f2b95eb6ef52574bd86b1e426be9df9"},{url:"img/icons/144x144.png",revision:"c5abed2721558a98cd5adb1b28d5f032"},{url:"img/icons/1500x500.png",revision:"cb77b3aa40b6fbdd9a25ecb8fed580d3"},{url:"img/icons/1500x500.svg",revision:"910ebabc564fce7de8a047c6d31e6f9a"},{url:"img/icons/192x192.png",revision:"b8853a3b71b3a7e79c116d8d2dc8fe99"},{url:"img/icons/256x256.png",revision:"64014871dd4b25592423d91c4a007f3a"},{url:"img/icons/384x384.png",revision:"f5837cc63fdd26d96461a55d61fb1944"},{url:"img/icons/4096x4096.png",revision:"9e79bb6db785b2243380efb2546cf841"},{url:"img/icons/48x48.png",revision:"c1077dc498ae97b7f5209da9277579e3"},{url:"img/icons/512x512.png",revision:"0a91e0a9adeee05b4a0feeadd06574dd"},{url:"img/icons/72x72.png",revision:"b36cd3c87f00f07092b6442b7e00b0a6"},{url:"img/icons/96x96.png",revision:"2907ea3e33e14a352ba8d282e0f32cd5"},{url:"img/openvas/gce_success.png",revision:"68690af56e0a7e30759701936d306f0b"},{url:"img/openvas/gsa_about.png",revision:"ad0c3660e39fb5402f90f6ae03018118"},{url:"img/openvas/gsa_auth_target.png",revision:"24526d2baf1cc29af4aa4d72d3b646c2"},{url:"img/openvas/gsa_auth_task.png",revision:"fd7ed294fba694fdc494a9b496118af3"},{url:"img/openvas/gsa_credentials.png",revision:"2b167ef41f7c628b88016c5410bae93e"},{url:"img/openvas/gsa_dashboard.png",revision:"62a7cddd490798fa7338f0709aa6deef"},{url:"img/openvas/gsa_login-2.png",revision:"1186c5dd0e841a7bd357adefdfc4a711"},{url:"img/openvas/gsa_login.png",revision:"c41707e31268ccf0b9450eb95acd3494"},{url:"img/openvas/gsa_newcredentials.png",revision:"9d5bb41889cddfca6c246eb5dff70b3e"},{url:"img/openvas/gsa_noauth_scan.png",revision:"6ca50842204bbaae21d1722a8ad22cf7"},{url:"img/openvas/gsa_noauth_task.png",revision:"fd779e1ba6466b852863936c0bbc4527"},{url:"img/openvas/gsa_target_auth.png",revision:"9a602b0a9cf7ce2ecd67ebd2f5fa59fd"},{url:"img/openvas/gsa_target.png",revision:"2a69f5dd7c68a9f5f1fab0d59bfcc60b"},{url:"img/openvas/gsa_targets.png",revision:"7a3ebf39135e960ee4cc8eae1554eb1d"},{url:"img/openvas/gsa_task.png",revision:"5843f298967649c9d3eaf8302099b621"},{url:"img/openvas/gsa_tasks.png",revision:"578e858b776d0a23609524bf76cf86f6"},{url:"img/openvas/gvm-21_4_4-dashboard.png",revision:"ccbe597cd34b3d566c18149c1a3924d8"},{url:"img/openvas/gvm-21_4_4-feed_status.png",revision:"37741f121cda4728ddf7e669d0cf03d6"},{url:"img/openvas/gvm-21_4_4-gsa_about.png",revision:"bfbe8e865903582b977da1414c1c02ef"},{url:"img/openvas/gvm-21_4_4-gsa_login.png",revision:"9ea9b3d2665730e3088322c753bcd700"},{url:"img/openvas/gvm-22_4_0-dashboard.png",revision:"976ed9b88ea2f457fab3154f52d2ce44"},{url:"img/openvas/gvm-22_4_0-feed_status.png",revision:"5815a7aeb8838e6d4bbd2d040b89c6ff"},{url:"img/openvas/gvm-22_4_0-gsa_about.png",revision:"2fcbb9161fc5279f8a4b0b1eff52aa0c"},{url:"img/openvas/gvm-22_4_0-gsa_login.png",revision:"0c0109fbda0056bf1f2faa0db8e69406"},{url:"img/openvas/vm_settings.png",revision:"b9ac5625eb085a07362fc0c0a596c483"},{url:"img/ossec/512x512.png",revision:"bee855a078b5cf7941dcc4c2838ddf1d"},{url:"img/ossec/cloudflare_token.png",revision:"c36576440c64fceb89e53cf4f8dd1921"},{url:"img/ossec/remote_syslog_settings.png",revision:"29e56b2348c0689d577022cc7c799d6e"},{url:"img/ossec/remote_syslog_value.png",revision:"213cebc9172c9a1f8f8a3a011dfd9a95"},{url:"img/ossec/windows_agent_complete.png",revision:"8a5f36cb5a5469e42530fcb44543b045"},{url:"img/ossec/windows_agent_components.png",revision:"15d8bf841dbdce26c04ca09b48538dcf"},{url:"img/ossec/windows_agent_manager.png",revision:"095dfcef88dff43ea831b872ccd87898"},{url:"img/ossec/windows_agent_setup.png",revision:"3781048e9d3c81ec993f3cb08cacaa22"},{url:"img/psad/psad_diagram.jpg",revision:"d48c1429ce3006deb31363c3e59a700e"},{url:"img/wireguard/mullvad.png",revision:"c65696e0b1b1b1f2fe809aef5c80f932"},{url:"index.html",revision:"9921c7dcd2e3af78c5cfb08a7ab9d343"},{url:"mmonit/index.html",revision:"a78feebce8c355985c4f6be03a4ba301"},{url:"openvas/index.html",revision:"e2cf9c9d36334dd122ff572f00f67fe7"},{url:"ossec/index.html",revision:"a5e543f0400146151c72073053258e2b"},{url:"privacy-policy.html",revision:"333bb2e101393e68fce40e129fc9606a"},{url:"privacyidea/index.html",revision:"7ff5eb7bd71013b6059e706c5d26aa3d"},{url:"psad/index.html",revision:"f5ca14549cb6a1aaa93c4d630f83ec6a"},{url:"rsyslog/index.html",revision:"db18211b0750b588d083f21fd507aef3"},{url:"wireguard/index.html",revision:"73629fa0e4ebc8ee5cd9d40ef905db00"}],{})}));
