export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc180181c765938354986b3',
                  title: 'Sanity Studio',
                  name: 'scad-startup-2021-studio',
                  apiId: '3056b733-f882-413a-96cc-5d01b2a7b830'
                },
                {
                  buildHookId: '5fc18018613244bbedf965cc',
                  title: 'Blog Website',
                  name: 'scad-startup-2021',
                  apiId: 'a143298a-ad00-45b6-9e3b-e9386632e56a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ndrewgood/scad-startup2021',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://scad-startup-2021.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
