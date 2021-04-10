import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeroBehindTheDoor from "../../components/heros/BehindTheDoor"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const BehindTheDoorPage = ({ data }) => (
  <Layout>
    <SEO title="Behind The Door" />
    <HeroBehindTheDoor />
  </Layout>
)

export default BehindTheDoorPage

export const behindTheDoorPageQuery = graphql`
  query BehindTheDoorPageTemplate {
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
