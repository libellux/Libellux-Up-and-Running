export default {
  transformPageData(pageData) {
    const canonicalUrl = `https://libellux.com/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonicalUrl }
    ])
  },
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-BF661YHCGV' }],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BF661YHCGV');`
    ]
  ],
  lang: 'en-US',
  title: 'Libellux',
  description: 'Up and Running',
  appearance: 'dark',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    search: {
      provider: 'local',
      //options: {
      //  appId: 'AS5YOFW2K6',
      //  apiKey: '374dffc87cc7634d4814d1c936b599d3',
      //  indexName: 'libellux'
    },
    logo: '/img/72x72.png',
    nav: [
      { text: 'Get started', link: '/getting-started' },
      { text: 'Status', link: 'https://status.libellux.com' }
    ],
    sidebar: [
      {
        text: 'Up and Running',
        items: [
          { text: 'Introduction', link: '/getting-started' },
          { text: 'Release notes', link: '/release-notes' }
        ]
      },
      {
        text: 'Zero Trust Network',
        items: [
          { text: 'Tailscale', link: '/' },
          { text: 'Traefik', link: '/' },
          { text: 'WireGuard Secure VPN Tunnel', link: '/' }
        ]
      },
      {
      text: 'Intrusion Detection and Prevention ',
        items: [
          { text: 'Greenbone Vulnerability Manager', link: '/intrusion-detection/greenbone-vulnerability-manager' },
          { text: 'OSSEC Host Intrusion Detection', link: '/intrusion-detection/ossec' },
          { text: 'ClamAV Anti-virus Engine', link: '/intrusion-detection/clamav' },
          { text: 'Snort Network Intrusion Detection', link: '/intrusion-detection/snort' },
          { text: 'CrowdSec Security Engine', link: '/' },
          { text: 'PSAD Port Scan Attack Detector', link: '/' }
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/libellux/Libellux-Up-and-Running' }
    ],
    markdown: {
      image: {
        lazyLoading: true
      }
    },
  },
}
