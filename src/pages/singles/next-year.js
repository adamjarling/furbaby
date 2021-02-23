import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeroNextYear from "../../components/heros/NextYear"

const NextYearPage = ({ data }) => (
  <Layout>
    <SEO title="NextYear" />
    <HeroNextYear />
  </Layout>
)

export default NextYearPage

export const NextYearPageQuery = graphql`
  query NextYearPageTemplate {
    cocoa: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "next-year-album-art-v2-sharp.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
