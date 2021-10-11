import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/home/forge/21_4_3/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/home/forge/21_4_3/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
