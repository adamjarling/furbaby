module.exports = {
  siteMetadata: {
    url: "https://www.furbaby.rocks/",
    title: `Furbaby and the Tight Spaces - garage rock art project`,
    description: `FURBABY and the TIGHT SPACES is a garage rock experiment for the 2020s, fronted by Chicago musician Adam J. Arling.`,
    author: `Adam J. Arling`,
    distributors: {
      amazonMusic: `https://music.amazon.com/artists/B08BR4TXGF/furbaby?marketplaceId=ATVPDKIKX0DER&musicTerritory=US`,
      appleMusic: `https://music.apple.com/us/artist/furbaby/1520136448`,
      facebook: `https://www.facebook.com/furBabyAndtheTightSpaces`,
      instagram: `https://www.instagram.com/furbaby_rocks/`,
      spotify: `https://open.spotify.com/artist/1hpsUJGJST9u6Qf8KWn8CR?si=Faiv2grEQX6vwJ9z_4sMQQ`,
      youTubeChannel: `https://www.youtube.com/channel/UCSoulFKYB6zGzHhbV-rkPzg/`,
      youTubeMusic: `https://music.youtube.com/channel/UC0piiF582lfZJbNFcoQTapQ`,
    },
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
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://rocks.us7.list-manage.com/subscribe/post?u=4c8d7e492a0e818026e69137a&amp;id=58cecb8155", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
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
        icon: `src/images/fur-512x512.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
