import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeroWaiting from "../../components/heros/Waiting"

const WaitingPage = ({ data }) => (
  <Layout>
    <SEO title="Waiting" />
    <HeroWaiting />
  </Layout>
)

export default WaitingPage

export const WaitingPageQuery = graphql`
  query WaitingPageTemplate {
    cocoa: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "waiting-album-art.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
