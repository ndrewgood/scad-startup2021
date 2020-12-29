// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-anchor-links',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SCAD StartUp 2021`,
        icon: `src/assets/images/favicon2.png`
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        // change this later
        component: require.resolve(`./src/containers/layout.js`),
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token
      }
    }
  ]
}
