import{V as se}from"./chunks/theme.D_WcWG9L.js";import{l as le,c as me,J as ce,p as ue,a5 as he,m as x,o as pe}from"./chunks/framework.-E9IboRH.js";/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var z=Object.assign||function(c){for(var t=1;t<arguments.length;t++){var d=arguments[t];for(var s in d)Object.prototype.hasOwnProperty.call(d,s)&&(c[s]=d[s])}return c},T=function(t){return t.tagName==="IMG"},ge=function(t){return NodeList.prototype.isPrototypeOf(t)},O=function(t){return t&&t.nodeType===1},V=function(t){var d=t.currentSrc||t.src;return d.substr(-4).toLowerCase()===".svg"},G=function(t){try{return Array.isArray(t)?t.filter(T):ge(t)?[].slice.call(t).filter(T):O(t)?[t].filter(T):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(T):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},fe=function(t){var d=document.createElement("div");return d.classList.add("medium-zoom-overlay"),d.style.background=t,d},ve=function(t){var d=t.getBoundingClientRect(),s=d.top,p=d.left,A=d.width,I=d.height,v=t.cloneNode(),N=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,S=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return v.removeAttribute("id"),v.style.position="absolute",v.style.top=s+N+"px",v.style.left=p+S+"px",v.style.width=A+"px",v.style.height=I+"px",v.style.transform="",v},E=function(t,d){var s=z({bubbles:!1,cancelable:!1,detail:void 0},d);if(typeof window.CustomEvent=="function")return new CustomEvent(t,s);var p=document.createEvent("CustomEvent");return p.initCustomEvent(t,s.bubbles,s.cancelable,s.detail),p},be=function c(t){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=window.Promise||function(o){function r(){}o(r,r)},p=function(o){var r=o.target;if(r===L){b();return}g.indexOf(r)!==-1&&R({target:r})},A=function(){if(!(w||!e.original)){var o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(U-o)>a.scrollOffset&&setTimeout(b,150)}},I=function(o){var r=o.key||o.keyCode;(r==="Escape"||r==="Esc"||r===27)&&b()},v=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=o;if(o.background&&(L.style.background=o.background),o.container&&o.container instanceof Object&&(r.container=z({},a.container,o.container)),o.template){var i=O(o.template)?o.template:document.querySelector(o.template);r.template=i}return a=z({},a,r),g.forEach(function(l){l.dispatchEvent(E("medium-zoom:update",{detail:{zoom:m}}))}),m},N=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return c(z({},a,o))},S=function(){for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];var l=r.reduce(function(n,h){return[].concat(n,G(h))},[]);return l.filter(function(n){return g.indexOf(n)===-1}).forEach(function(n){g.push(n),n.classList.add("medium-zoom-image")}),C.forEach(function(n){var h=n.type,f=n.listener,k=n.options;l.forEach(function(y){y.addEventListener(h,f,k)})}),m},W=function(){for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];e.zoomed&&b();var l=r.length>0?r.reduce(function(n,h){return[].concat(n,G(h))},[]):g;return l.forEach(function(n){n.classList.remove("medium-zoom-image"),n.dispatchEvent(E("medium-zoom:detach",{detail:{zoom:m}}))}),g=g.filter(function(n){return l.indexOf(n)===-1}),m},Z=function(o,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return g.forEach(function(l){l.addEventListener("medium-zoom:"+o,r,i)}),C.push({type:"medium-zoom:"+o,listener:r,options:i}),m},D=function(o,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return g.forEach(function(l){l.removeEventListener("medium-zoom:"+o,r,i)}),C=C.filter(function(l){return!(l.type==="medium-zoom:"+o&&l.listener.toString()===r.toString())}),m},j=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=o.target,i=function(){var n={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},h=void 0,f=void 0;if(a.container)if(a.container instanceof Object)n=z({},n,a.container),h=n.width-n.left-n.right-a.margin*2,f=n.height-n.top-n.bottom-a.margin*2;else{var k=O(a.container)?a.container:document.querySelector(a.container),y=k.getBoundingClientRect(),B=y.width,X=y.height,Q=y.left,$=y.top;n=z({},n,{width:B,height:X,left:Q,top:$})}h=h||n.width-a.margin*2,f=f||n.height-a.margin*2;var _=e.zoomedHd||e.original,ee=V(_)?h:_.naturalWidth||h,te=V(_)?f:_.naturalHeight||f,H=_.getBoundingClientRect(),oe=H.top,re=H.left,P=H.width,q=H.height,ne=Math.min(Math.max(P,ee),h)/P,ae=Math.min(Math.max(q,te),f)/q,M=Math.min(ne,ae),ie=(-re+(h-P)/2+a.margin+n.left)/M,de=(-oe+(f-q)/2+a.margin+n.top)/M,F="scale("+M+") translate3d("+ie+"px, "+de+"px, 0)";e.zoomed.style.transform=F,e.zoomedHd&&(e.zoomedHd.style.transform=F)};return new s(function(l){if(r&&g.indexOf(r)===-1){l(m);return}var n=function B(){w=!1,e.zoomed.removeEventListener("transitionend",B),e.original.dispatchEvent(E("medium-zoom:opened",{detail:{zoom:m}})),l(m)};if(e.zoomed){l(m);return}if(r)e.original=r;else if(g.length>0){var h=g;e.original=h[0]}else{l(m);return}if(e.original.dispatchEvent(E("medium-zoom:open",{detail:{zoom:m}})),U=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,w=!0,e.zoomed=ve(e.original),document.body.appendChild(L),a.template){var f=O(a.template)?a.template:document.querySelector(a.template);e.template=document.createElement("div"),e.template.appendChild(f.content.cloneNode(!0)),document.body.appendChild(e.template)}if(e.original.parentElement&&e.original.parentElement.tagName==="PICTURE"&&e.original.currentSrc&&(e.zoomed.src=e.original.currentSrc),document.body.appendChild(e.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),e.original.classList.add("medium-zoom-image--hidden"),e.zoomed.classList.add("medium-zoom-image--opened"),e.zoomed.addEventListener("click",b),e.zoomed.addEventListener("transitionend",n),e.original.getAttribute("data-zoom-src")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("srcset"),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading"),e.zoomedHd.src=e.zoomed.getAttribute("data-zoom-src"),e.zoomedHd.onerror=function(){clearInterval(k),console.warn("Unable to reach the zoom image target "+e.zoomedHd.src),e.zoomedHd=null,i()};var k=setInterval(function(){e.zoomedHd.complete&&(clearInterval(k),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",b),document.body.appendChild(e.zoomedHd),i())},10)}else if(e.original.hasAttribute("srcset")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading");var y=e.zoomedHd.addEventListener("load",function(){e.zoomedHd.removeEventListener("load",y),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",b),document.body.appendChild(e.zoomedHd),i()})}else i()})},b=function(){return new s(function(o){if(w||!e.original){o(m);return}var r=function i(){e.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(e.zoomed),e.zoomedHd&&document.body.removeChild(e.zoomedHd),document.body.removeChild(L),e.zoomed.classList.remove("medium-zoom-image--opened"),e.template&&document.body.removeChild(e.template),w=!1,e.zoomed.removeEventListener("transitionend",i),e.original.dispatchEvent(E("medium-zoom:closed",{detail:{zoom:m}})),e.original=null,e.zoomed=null,e.zoomedHd=null,e.template=null,o(m)};w=!0,document.body.classList.remove("medium-zoom--opened"),e.zoomed.style.transform="",e.zoomedHd&&(e.zoomedHd.style.transform=""),e.template&&(e.template.style.transition="opacity 150ms",e.template.style.opacity=0),e.original.dispatchEvent(E("medium-zoom:close",{detail:{zoom:m}})),e.zoomed.addEventListener("transitionend",r)})},R=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=o.target;return e.original?b():j({target:r})},J=function(){return a},Y=function(){return g},K=function(){return e.original},g=[],C=[],w=!1,U=0,a=d,e={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?a=t:(t||typeof t=="string")&&S(t),a=z({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},a);var L=fe(a.background);document.addEventListener("click",p),document.addEventListener("keyup",I),document.addEventListener("scroll",A),window.addEventListener("resize",b);var m={open:j,close:b,toggle:R,update:v,clone:N,attach:S,detach:W,on:Z,off:D,getOptions:J,getImages:Y,getZoomedImage:K};return m};function ye(c,t){t===void 0&&(t={});var d=t.insertAt;if(!(!c||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],p=document.createElement("style");p.type="text/css",d==="top"&&s.firstChild?s.insertBefore(p,s.firstChild):s.appendChild(p),p.styleSheet?p.styleSheet.cssText=c:p.appendChild(document.createTextNode(c))}}var ze=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";ye(ze);const we=he("",11),ke=x("p",null,[x("a",{target:"_blank",class:"dark-only",href:"https://betteruptime.com/"},[x("img",{style:{width:"130px",height:"52px"},alt:"Better Uptime Website Monitoring",src:"https://betteruptime.com/assets/static_assets/badges/dark.png"})]),x("a",{target:"_blank",class:"light-only",href:"https://betteruptime.com/"},[x("img",{style:{width:"130px",height:"52px"},alt:"Better Uptime Website Monitoring",src:"https://betteruptime.com/assets/static_assets/badges/light.png"})])],-1),Se=JSON.parse('{"title":"Getting started","description":"Install open-source software from source to focus on Zero Trust Network principles, enhancing security for existing applications, and deploying tools for threat detection and prevention.","frontmatter":{"title":"Getting started","description":"Install open-source software from source to focus on Zero Trust Network principles, enhancing security for existing applications, and deploying tools for threat detection and prevention.","head":[["link",{"rel":"canonical","href":"https://libellux.com/getting-started.html"}]]},"headers":[],"relativePath":"getting-started.md","filePath":"getting-started.md","lastUpdated":1736729876000}'),Ee={name:"getting-started.md"},Ce=Object.assign(Ee,{setup(c){const t=[{avatar:"https://github.com/libellux.png",name:"Fredrik Hilmersson",title:"Author",sponsor:"https://ko-fi.com/B0B31BJU3",actionText:"Buy Me a Coffee",links:[{icon:"github",link:"https://github.com/libellux"},{icon:"twitter",link:"https://twitter.com/libellux_"}]}];return le(()=>{be("[data-zoomable]",{background:"var(--vp-c-bg)"})}),(d,s)=>(pe(),me("div",null,[we,ce(ue(se),{size:"small",members:t}),ke]))}});export{Se as __pageData,Ce as default};
