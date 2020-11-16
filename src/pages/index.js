import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InspiredBy from "../components/InspiredBy"
import HeroSplash1 from "../components/heros/Splash1"
import AlbumsAnimated from "../components/AlbumsAnimated"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSplash1 />
      <div className="mt-4">
        <AlbumsAnimated />
      </div>
      {/* <InspiredBy /> */}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    bgImage: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "FURBABY-design.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
