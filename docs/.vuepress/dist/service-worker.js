if(!self.define){let e,s={};const i=(i,d)=>(i=new URL(i+".js",d).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(d,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let r={};const t=e=>i(e,a),n={module:{uri:a},exports:r,require:t};s[a]=Promise.all(d.map((e=>n[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-dbb64b4e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-Cy1GWw4p.js",revision:"0da288d36b81a61cb04b57f6cdb22021"},{url:"assets/app-CILEnMiM.js",revision:"60908640d4fb8979c1dc7923bf62fab7"},{url:"assets/docsearch-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/index-DiZEX-Ml.js",revision:"fa112b5cda5ee3c969c504c6a3080b4c"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-Bc5jBnB4.js",revision:"c4384ed1188d962956ba4e6ce140e4e2"},{url:"assets/index.html-BeDC036f.js",revision:"5134b4fdf5d9c88bab82953c7877e5a0"},{url:"assets/index.html-Bua8AqCW.js",revision:"b82ee9beb155ea4c46f3a38dba29ec8d"},{url:"assets/index.html-C9EIjS4g.js",revision:"81a7fd8ce45bd65712a2548df2bae309"},{url:"assets/index.html-CPfXBiNo.js",revision:"84bdcdf1e118ea695139fa1a8c446ff5"},{url:"assets/index.html-Cv7pn6Lh.js",revision:"47200ca8f57424faca19fc2072ed9f6f"},{url:"assets/index.html-DiU3CtLY.js",revision:"e6321e0bc4b66b6c91306f3f7ef66cc1"},{url:"assets/index.html-Do1ATxo2.js",revision:"3bf3cd0c8933011024b899203eb438bf"},{url:"assets/index.html-DPKySAMa.js",revision:"8f970cda608880c66c5c3df5275257ef"},{url:"assets/index.html-PMGgbpeD.js",revision:"d5c1fe430f0bb04105322c639c195ed3"},{url:"assets/index.html-zib67whT.js",revision:"1482aecdc9abd4270f7fd96432e52b84"},{url:"assets/privacy-policy.html-BA0jiBWV.js",revision:"aec413435db8fa775af2d4dd61769abd"},{url:"assets/style-l0sNRNKZ.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/style-uHO8Hgvz.css",revision:"d7fbf6a5385b16bbe19aad93d35e042f"},{url:"img/icons/1500x500.svg",revision:"910ebabc564fce7de8a047c6d31e6f9a"},{url:"index.html",revision:"0c05f3ca2672fcf4c4535aab3fad3d08"},{url:"404.html",revision:"67eda6397eca97a3de664932411d0c60"}],{}),e.cleanupOutdatedCaches()}));
