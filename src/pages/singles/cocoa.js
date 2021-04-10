import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeroCocoa from "../../components/heros/Cocoa"
import { graphql } from "gatsby"

const CocoaPage = ({ data }) => (
  <Layout>
    <SEO title="Cocoa" />
    <HeroCocoa />
  </Layout>
)

export default CocoaPage

export const cocoaPageQuery = graphql`
  query CocoaPageTemplate {
    cocoa: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "cocoa-single-cover.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
