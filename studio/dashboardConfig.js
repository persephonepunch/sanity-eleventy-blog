export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '6021c409bd55cf302e694c2e',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-4tgyuxri',
                  apiId: 'f1412887-f81f-4d25-8965-12ffe9693a0b'
                },
                {
                  buildHookId: '6021c409dbeb3923ceae3cf5',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-uw3pcp4o',
                  apiId: '24622a24-bb0a-4aa3-a18c-dc480545034d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/persephonepunch/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-uw3pcp4o.netlify.app', category: 'apps'}
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
