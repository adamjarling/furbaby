import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBoxedIn from "../components/heros/BoxedIn"

const BoxedInPage = ({ data }) => (
  <Layout>
    <SEO title="Boxed In" />
    <HeroBoxedIn />
  </Layout>
)

export default BoxedInPage

export const boxedInPageQuery = graphql`
  query BoxedInPageTemplate {
    boxedIn: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "FURBABY-boxed-in-cover-art-no-outline.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
