module.exports = {
  plugins: [
    [
      '@vuepress/back-to-top',
    ],
    [
      '@vuepress/last-updated',
      {
        dateOptions:{
          hours12: false
        }
      }
    ],
    [
      '@vuepress/medium-zoom',
      {
        selector: 'img.zoom-custom-imgs',
        options: {
          margin: 16
        }
      }
    ],
  ],
  title: 'Libellux',
  description: 'Libellux: Library & Education',
  head: [
    ['link', { rel: 'icon', href: '/img/avatar.png' }]
  ],
  themeConfig: {
    logo: '/img/avatar.png',
    repo: 'libellux/libellux-docs',
    editLinks: true, // // defaults to false, set to true to enable
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Libellux: Up and Running', link: '/libellux/' },
      { text: 'Win 98 PC build', link: '/win98/' },
    ],
    sidebar: [
      {
        title: 'Library & Education',
        collapsable: false,
        siderbarDepth: 1,
        children: [
          '/'
        ]
      },
      {
        title: 'Libellux: Up and Running',
        collapsable: false,
        siderbarDepth: 1,
        children: [
          'libellux/',
          {
            title: 'M/Monit System Monitoring',
            path: 'libellux/mmonit/',
          },
          {
            title: 'Performance Co-Pilot Grafana',
            path: 'libellux/pcp/',
          },
          {
            title: 'OSSEC Host Intrusion Detection',
            path: 'libellux/ossec/',
          },
          {
            title: 'PSAD Intrusion Detection',
            path: 'libellux/psad/',
          },
          {
            title: 'OpenVAS Vulnerability Scanner',
            path: 'libellux/openvas/',
          },
          {
            title: 'Graylog Centralized Log Management',
            path: 'libellux/graylog/',
          },
          {
            title: 'Rsyslog Log Processing',
            path: 'libellux/rsyslog/',
          },
          {
            title: 'Jira Service Desk',
            path: 'libellux/jira/',
          },
        ]
      },
      {
        title: 'Windows 98 PC build',
        collapsable: false,
        siderbarDepth: 1,
        children: [
          'win98/',
          {
            title: 'Motherboard',
            path: 'win98/motherboard/',
          },
          {
            title: 'Processor',
            path: 'win98/processor/',
          },
          {
            title: 'Memory',
            path: 'win98/memory/',
          },
          {
            title: 'Harddrive',
            path: 'win98/harddrive/',
          },
          {
            title: 'Graphics card',
            path: 'win98/graphics/',
          },
          {
            title: '3D Accelerator',
            path: 'win98/3dfx/',  
          },
        ]
      },
    ]
  }
}
