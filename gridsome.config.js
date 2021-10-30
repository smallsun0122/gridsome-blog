// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
     {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['Articles', 'Projects', 'Follows', 'Socials'],
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    StrapiArticles: [
      {
        path: '/blog/detail/:id',
        component: './src/templates/Detail.vue'
      }
    ],
    StrapiProjects: [
      {
        path: '/project/detail/:id',
        component: './src/templates/ProdectDetail.vue'
      }
    ],
    StrapiSocials: [
      {
        path: '/social/detail/:id',
        component: './src/templates/SocialDetail.vue'
      }
    ],
    StrapiFollows: [
      {
        path: '/follow/detail/:id',
        component: './src/templates/FollowDetail.vue'
      }
    ]
  }
}
