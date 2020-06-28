import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroVisuals from "../components/heros/Visuals"

const VisualsPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <HeroVisuals />
    <section className="section">
      <div className="container content">
        <div className="column is-10 is-offset-1">
          <p>
            <span className="fur-font">Furbaby</span> is visual. Casey Murtaugh
            handles that because Adam can't be trusted.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default VisualsPage

export const pageQuery = graphql`
  query VisualsPageTemplate {
    boxPic: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "studio.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
