module.exports ={
  base: '/opex-runbook/',
  themeConfig: {
    logo: '/midnight-g5-logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Node', link: '/node/' },
      { text: 'Docker & K8s', link: '/docker-k8s/' },
      { text: 'Postgres', link: '/postgres/' },
      { text: 'Contributing', link: '/contributing/' }
    ],
    sidebar: [
      '/',
      '/node/',
      '/docker-k8s/',
      '/postgres/',
      '/contributing/'
    ]
  }
}
