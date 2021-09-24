import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Libellux: Up & Running",["/index.html","/README.md"]],
  ["v-c638a1e8","/clamav/","ClamAV Antivirus Server",["/clamav/index.html","/clamav/README.md"]],
  ["v-8eb80d6c","/openvas/","Greenbone Vulnerability Manager",["/openvas/index.html","/openvas/README.md"]],
  ["v-e4dd43ca","/ossec/","OSSEC Host Intrusion Detection System",["/ossec/index.html","/ossec/README.md"]],
  ["v-15230830","/psad/","PSAD Port Scan Attack Detector",["/psad/index.html","/psad/README.md"]],
  ["v-15554e84","/test/","docs",["/test/index.html","/test/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
