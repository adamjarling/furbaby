import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InspiredBy from "../components/InspiredBy"
import HeroSplash1 from "../components/heros/Splash1"
import AlbumsAnimated from "../components/AlbumsAnimated"
import Press2021NwiTimes from "../components/news/2021-nwitimes"
import NewSection from "../components/news/Section"
import NewsSection from "../components/news/Section"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSplash1 />
      {/* <section className="section">
        <div className="container">
          <Press2021NwiTimes />
        </div>
      </section> */}
      <NewsSection />
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
