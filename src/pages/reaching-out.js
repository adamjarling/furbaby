import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroReachingOut from "../components/heros/ReachingOut"

const ReachingOutPage = ({ data }) => (
  <Layout>
    <SEO title="Reaching Out (for Higher Ground)" />
    <HeroReachingOut />
  </Layout>
)

export default ReachingOutPage

export const ReachingOutPageQuery = graphql`
  query ReachingOutPageTemplate {
    behindTheDoor: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "behind-the-door-cover-art-v2.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
