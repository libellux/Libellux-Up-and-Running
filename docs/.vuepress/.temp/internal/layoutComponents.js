import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/home/forge/Libellux-Up-and-Running/node_modules/vuepress/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/home/forge/Libellux-Up-and-Running/node_modules/vuepress/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
