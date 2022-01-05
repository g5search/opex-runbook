module.exports = {
  base: '/opex-runbook/',
  themeConfig: {
    logo: '/midnight-g5-logo.png',
    sidebar: [
      '/',
      '/node/',
      '/docker-k8s/',
      '/postgres/',
      '/contributing/'
    ],
    search: false,
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Getting Started',
        ariaLabel: 'Getting Started Menu',
        items: [{
            text: 'Prerequisites',
            link: '/getting-started/prerequisites/'
          },
          {
            text: 'Installation',
            link: '/getting-started/installation/'
          },
          {
            text: 'Postgres',
            link: '/postgres/'
          },
        ]
      },
      {
        text: 'Testing',
        ariaLabel: 'Testing Menu',
        items: [{
            text: 'General Testing Info',
            link: '/testing/general-testing-info/'
          },
          {
            text: 'Unit Testing',
            link: '/testing/unit-testing/'
          },
          {
            text: 'Regression Testing',
            link: '/testing/regression-testing/'
          },
          {
            text: 'Smoke Testing',
            link: '/testing/smoke-testing/'
          },
        ]
      },
      {
        text: 'Contributing',
        link: '/contributing/'
      },
      {
        text: 'Contact',
        link: '/getting-started/contact/'
      }
    ]
  }
}