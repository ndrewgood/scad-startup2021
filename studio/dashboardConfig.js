
export default {
  widgets: [
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'Feel free to make changes to the content. ***Content doesnt get updated until you press `Deploy` connected to `StartUp 2021 Website: Frontend`*** ❤️',
              sites: [
                {
                  buildHookId: '5fc180181c765938354986b3',
                  title: 'Sanity Studio: Backend',
                  name: 'scad-startup-2021-studio',
                  apiId: '3056b733-f882-413a-96cc-5d01b2a7b830'
                },
                {
                  buildHookId: '5fc18018613244bbedf965cc',
                  title: 'StartUp 2021 Website: Frontend',
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
    }
  ]
}

