import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import HeroReachingOut from "../components/heros/ReachingOut"

const ReachingOutPlaceholderPage = ({ data }) => (
  <Layout>
    <SEO title="Reaching Out (for Higher Ground)" />
    <HeroReachingOut />
  </Layout>
)

export default ReachingOutPlaceholderPage

export const ReachingOutPlaceholderPageQuery = graphql`
  query ReachingOutPlaceholderPageTemplate {
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
