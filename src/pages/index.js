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
      <SEO title="Home - Furbaby and the Tight Spaces" />
      <HeroSplash1 />
      <section className="section">
        <div className="container content">
          {/* <Press2021NwiTimes /> */}
          {/* <p>
            <FandTS /> records demos, reads, does yoga, drinks wine and takes
            long walks on the beach in Chicago USA.
          </p> */}
          <div className="columns is-mobile is-centered">
            <div className="column is-three-fifths">
              <p className="is-size-3 has-text-centered">
                <FandTS /> is an alt/garage/psych art-project band for a world
                fast-forwarded into the future.
              </p>
            </div>
          </div>
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
