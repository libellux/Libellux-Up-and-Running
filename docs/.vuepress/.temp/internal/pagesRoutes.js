import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Libellux: Up & Running"},["/index.html","/README.md"]],
  ["v-8fc8fc20","/ansible/",{"title":"Ansible provisioning, configuration management, and application-deployment tool"},["/ansible/index.html","/ansible/README.md"]],
  ["v-45ab5f72","/graylog/",{"title":"Graylog Centralized Log Management"},["/graylog/index.html","/graylog/README.md"]],
  ["v-c638a1e8","/clamav/",{"title":"ClamAV Antivirus Server"},["/clamav/index.html","/clamav/README.md"]],
  ["v-9f469928","/mmonit/",{"title":"M/Monit System Monitoring"},["/mmonit/index.html","/mmonit/README.md"]],
  ["v-8eb80d6c","/openvas/",{"title":"Greenbone Vulnerability Manager"},["/openvas/index.html","/openvas/README.md"]],
  ["v-e4dd43ca","/ossec/",{"title":"OSSEC Host Intrusion Detection System"},["/ossec/index.html","/ossec/README.md"]],
  ["v-027091ee","/privacyidea/",{"title":"Two-factor authentication w/ privacyIDEA and YubiKey"},["/privacyidea/index.html","/privacyidea/README.md"]],
  ["v-15230830","/psad/",{"title":"PSAD Port Scan Attack Detector"},["/psad/index.html","/psad/README.md"]],
  ["v-9d458a02","/rsyslog/",{"title":"Rsyslog Syslog Processing"},["/rsyslog/index.html","/rsyslog/README.md"]],
  ["v-05c87ea8","/wireguard/",{"title":"WireGuard Secure VPN Tunnel"},["/wireguard/index.html","/wireguard/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
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
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
