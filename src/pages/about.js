import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroAbout from "../components/heros/About"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <HeroAbout />
    <section className="section">
      <div className="container content">
        <div className="column is-10 is-offset-1">
          <p>
            <span>FURBABY</span> is a garage rock experiment for the 2020s, born
            in the midst of uncertain times. Perhaps a by-product of
            acknowledging we need to think a little differently nowadays, ahem
            outside THE BOX, try something new, re-frame what we thought we
            knew, and open up our minds to shape the world our way, not their
            way.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate {
    boxPic: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "IMG_2203.jpeg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
