module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-cosmicjs`,
      options: {
        bucketSlug: `krc-heating-production`, // Get this value in Bucket > Settings
        objectTypes: [`index`],
        // If you have enabled read_key to fetch data (optional).
        apiAccess: {
          read_key: `13FJz8qQxP2jUSt7Qyu9TxVCMQLTa6P7XjOkB8hFNlZkjtWEZA`, // Get this value in Bucket > Settings
        },
        localMedia: true, // Download media locally for gatsby image (optional)
        limit: 1000, // The number of Objects to fetch on each request (optional)
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
