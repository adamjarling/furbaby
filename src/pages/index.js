import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InspiredBy from "../components/InspiredBy"
import HeroSplash1 from "../components/heros/Splash1"
import AlbumsAnimated from "../components/AlbumsAnimated"
import Press2021NwiTimes from "../components/news/2021-nwitimes"
import FandTS from "../components/FandTS"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSplash1 />
      <section className="section">
        <div className="container content">
          {/* <Press2021NwiTimes /> */}
          {/* <p>
            <FandTS /> records demos, reads, does yoga, drinks wine and takes
            long walks on the beach in Chicago USA.
          </p> */}
          <p>
            <FandTS /> is an alt/garage/psych art project band that reflects
            what's going on in a world that just got fast-forwarded into the
            future.
          </p>
          <p>Enjoy the jams!</p>
        </div>
      </section>

      <div className="mt-4">
        <AlbumsAnimated />
      </div>
      <InspiredBy />
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
