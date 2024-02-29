// .vuepress/plugins/adsense.js

export default {
    clientID: 'ca-pub-3592345228354158',
    adSlot: '2528003179',
    
    extendPageData($page) {
      if (typeof document !== 'undefined') {
        document.addEventListener('DOMContentLoaded', () => {
          const adContainer = document.getElementById('adsense-in-article');
          if (adContainer) {
            adContainer.innerHTML = `
              <ins class="adsbygoogle"
                   style="display:block; text-align:center;"
                   data-ad-layout="in-article"
                   data-ad-client="${this.clientID}"
                   data-ad-slot="${this.adSlot}"
                   data-ad-format="fluid"></ins>
              <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            `;
          }
        });
      }
    }
};
