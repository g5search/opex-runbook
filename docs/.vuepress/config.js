module.exports ={
  base: '/opex-runbook/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Getting Started',
        ariaLabel: 'Getting Started Menu',
        items: [
          { text: 'Getting Started', link: '/getting-started/' },
          { text: 'Prerequisites', link: '/getting-started/prerequisites/' },
          { text: 'Installation', link: '/getting-started/installation/' },
          { text: 'Postgres', link: '/postgres/'},
        ]
    },
    {
        text: 'General Testing Info', 
        ariaLabel: 'Testing Menu',
        items: [
          { text: 'General Testing Info', link: '/testing/general-testing-info/' },
      	  { text: 'Unit Testing', link: '/testing/unit-testing/' },
          { text: 'Regression Testing', link: '/testing/regression-testing/' },
          { text: 'Smoke Testing', link: '/testing/smoke-testing/' },
          ]
    },      
       { text: 'Contributing', link: '/contributing/' },
       { text: 'Contact', link: 'getting-started/contact/' }
       ]
   }
}