'use strict'

const siteConfig = require('./config.js')

module.exports = {
  trailingSlash: 'always',
  siteMetadata: {
    url: siteConfig.url,
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    copyright: siteConfig.copyright,
    menu: siteConfig.menu,
    author: siteConfig.author,
  },
  plugins: [
    'gatsby-plugin-lodash',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/media`,
        name: 'media',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
        sassOptions: {
          precision: 6,
          outputStyle: 'compressed',
        },
      },
    },
    'gatsby-plugin-catch-links',
  ],
}
