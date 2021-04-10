import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeroSocialDistance from "../../components/heros/SocialDistance"
import { graphql } from "gatsby"

const SocialDistancePage = ({ data }) => (
  <Layout>
    <SEO title="SocialDistance" />
    <HeroSocialDistance />
  </Layout>
)

export default SocialDistancePage

export const SocialDistancePageQuery = graphql`
  query SocialDistancePageTemplate {
    cocoa: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "social-distance-album-art-v1b.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
