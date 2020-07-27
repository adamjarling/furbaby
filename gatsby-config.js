module.exports = {
  siteMetadata: {
    title: `Furbaby garage rock art project`,
    description: `FURBABY is a garage rock experiment for the 2020s, fronted by Chicago musician Adam J. Arling.`,
    author: `Adam J. Arling`,
    boxedInYouTube: `https://youtu.be/piCdPUIlJlw`,
    youTubeChannel: `https://www.youtube.com/channel/UCSoulFKYB6zGzHhbV-rkPzg/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-171029760-1",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Furbaby rocks`,
        short_name: `furbabyrocks`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/fur-logo-512x512.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
