/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `markdown-pages`,
      path: `${__dirname}/blog/`
    },
    {
      resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/blog/`,
      name: `markdown-pages`,
    },
  },
  `gatsby-transformer-remark`,
    ],
}
