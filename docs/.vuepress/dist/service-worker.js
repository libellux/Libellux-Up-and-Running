if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const b=e=>i(e,r),l={module:{uri:r},exports:t,require:b};s[r]=Promise.all(a.map((e=>l[e]||b(e)))).then((e=>(d(...e),t)))}}define(["./workbox-dbb64b4e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-goNvtARU.js",revision:"9c0b3f9788a5fde675478925370b789c"},{url:"assets/app-DwdMjt-K.js",revision:"695905a62d39ceee32ee749aff83ba24"},{url:"assets/docsearch-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/index-DiZEX-Ml.js",revision:"fa112b5cda5ee3c969c504c6a3080b4c"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-55aR_Hmx.js",revision:"8f0991386abaf56b418919dbbb4d4874"},{url:"assets/index.html-B9g9dXZM.js",revision:"8da7c502bee5a2031c803aeb18f2fe71"},{url:"assets/index.html-BF2YC925.js",revision:"052d007846e4b38348e56eb30d3887b4"},{url:"assets/index.html-BOMjkE51.js",revision:"6e555d9bde1187d0a90861b812eaa0bd"},{url:"assets/index.html-BTPZoowM.js",revision:"8cbcd1f13c88d40eab9b843365b710fd"},{url:"assets/index.html-BZ_0VJYA.js",revision:"8345f113ebe81a804a3b48b95f989495"},{url:"assets/index.html-CFbICpqk.js",revision:"b2b87afd403dbb86108f28a007a0d511"},{url:"assets/index.html-CNMSDO2-.js",revision:"078adb8264a0dfbbf484c0716e4ec475"},{url:"assets/index.html-DIFlkZRH.js",revision:"e5166f34abd3af96677e8d50f0adfb2b"},{url:"assets/index.html-DiWXDQHx.js",revision:"18bbaf356c98dcf96f69b262c5c1ea91"},{url:"assets/index.html-HeUwxJ-x.js",revision:"2d4df99f69849d86a93392ea3de77289"},{url:"assets/privacy-policy.html-CYrzBlGT.js",revision:"4e961e512355ec55daa3c2cf6b9a8e70"},{url:"assets/style-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/style-uHO8Hgvz.css",revision:"d7fbf6a5385b16bbe19aad93d35e042f"},{url:"img/icons/1500x500.svg",revision:"910ebabc564fce7de8a047c6d31e6f9a"},{url:"index.html",revision:"399047267ca422a38b5d1095c120c752"},{url:"404.html",revision:"bc4b6e88317a531ec23e4625c54cf815"}],{}),e.cleanupOutdatedCaches()}));
