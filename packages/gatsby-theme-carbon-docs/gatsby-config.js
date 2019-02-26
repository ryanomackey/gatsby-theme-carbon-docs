module.exports = {
  siteMetadata: {
    title: 'Carbon',
    subtitle: 'Docs Starter',
    gitUrl: 'http://github.com',
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout/index.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 770,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: 'docs',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
  ],
};
