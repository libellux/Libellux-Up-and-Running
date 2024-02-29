import { h }  from "vue";
import { defineClientConfig } from "vuepress/client";
import { setupPwa } from "/home/toothpick/adsense/Libellux-Up-and-Running/node_modules/.pnpm/@vuepress+plugin-pwa@2.0.0-rc.17_vuepress@2.0.0-rc.8/node_modules/@vuepress/plugin-pwa/lib/client/composables/setupPwa.js";
import { PwaReadyPopup as _PwaReadyPopup } from "/home/toothpick/adsense/Libellux-Up-and-Running/node_modules/.pnpm/@vuepress+plugin-pwa@2.0.0-rc.17_vuepress@2.0.0-rc.8/node_modules/@vuepress/plugin-pwa/lib/client/components/PwaReadyPopup.js";

import "/home/toothpick/adsense/Libellux-Up-and-Running/node_modules/.pnpm/@vuepress+plugin-pwa@2.0.0-rc.17_vuepress@2.0.0-rc.8/node_modules/@vuepress/plugin-pwa/lib/client/styles/vars.css";

const locales = __PWA_LOCALES__;

const PwaReadyPopup = () => h(_PwaReadyPopup, { locales })

export default defineClientConfig({
  setup: () => {
    setupPwa(__SW_PATH__, __SW_FORCE_UPDATE__);
  },
  rootComponents: [
    PwaReadyPopup,
  ],
});
