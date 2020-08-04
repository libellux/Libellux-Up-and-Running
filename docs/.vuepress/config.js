module.exports = {
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-174138980-1'
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://docs.libellux.com'
      }
    ],
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
  description: 'Libellux: Up and Running',
  head: [
    ['link', { rel: 'icon', href: '/img/72x72.png' }]
  ],
  themeConfig: {
    logo: '/img/72x72.png',
    smoothScroll: true,
    repo: 'libellux/Libellux-Up-and-Running',
    docsDir: 'docs',
    editLinks: true,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Libellux: Up and Running', link: '/' },
    ],
    sidebar: [
      {
        title: 'Libellux: Up and Running',
        collapsable: false,
        siderbarDepth: 1,
        children: [
          '/',
          {
            title: 'M/Monit System Monitoring',
            path: 'mmonit/',
          },
          {
            title: 'Performance Co-Pilot Grafana',
            path: 'pcp/',
          },
          {
            title: 'OSSEC Host Intrusion Detection',
            path: 'ossec/',
          },
          {
            title: 'PSAD Intrusion Detection',
            path: 'psad/',
          },
          {
            title: 'OpenVAS Vulnerability Scanner',
            path: 'openvas/',
          },
          {
            title: 'Graylog Centralized Log Management',
            path: 'graylog/',
          },
          {
            title: 'Rsyslog Log Processing',
            path: 'rsyslog/',
          },
          {
            title: 'Jira Service Desk',
            path: 'jira/',
          },
        ]
      },
    ]
  }
}
