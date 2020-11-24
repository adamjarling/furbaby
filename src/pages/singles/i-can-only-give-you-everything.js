import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeroICanOnlyGiveYouEverything from "../../components/heros/ICanOnlyGiveYouEverything"

const ICanOnlyGiveYouEverythingPage = ({ data }) => (
  <Layout>
    <SEO title="I Can Only Give You Everything" />
    <HeroICanOnlyGiveYouEverything />
  </Layout>
)

export default ICanOnlyGiveYouEverythingPage

export const iCanOnlyGiveYouEverythingPageQuery = graphql`
  query ICanOnlyGiveYouEverythingPageTemplate {
    cocoa: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "give-u-everything-album-art-v1.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
