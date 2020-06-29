import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PhotoGrid from "../components/PhotoGrid"
import BoxedIn from "../components/BoxedIn"
import BoxedInVideo from "../components/videos/BoxedInVideo"
import ExplodingFur from "../components/heros/ExplodingFur"
import HeroBoxedIn from "../components/heros/BoxedIn"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    {/* <section className={`hero has-background is-medium`}>
      <Img
        fluid={data.bgImage.childImageSharp.fluid}
        className="hero-background"
      />
      <div className="hero-body is-flex">
        <div className="container">
          <h1 className="is-sr-only">
            <span className="title hero-image-bg-title is-inline-block">
              Furbaby garage rock
            </span>
          </h1>
        </div>
      </div>
    </section> */}

    <ExplodingFur />

    <HeroBoxedIn />

    {/* <section className="hero is-light">
      <div className="hero-body">
        <div className="container">
          <h2 className="title">Visions of the Fur</h2>
          <h3 className="subtitle">
            Art &amp; photos from Furbaby's neighborhood
          </h3>
          <Link to="/visuals" className="button">
            Go to Visuals
          </Link>
        </div>
      </div>
    </section> */}

    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column content">
            <h3 className="title">Fur What?</h3>
            <p className="has-text-justified">
              <span>FURBABY</span> is a garage rock experiment for the 2020s,
              born in the midst of uncertain times. Perhaps a by-product of
              acknowledging we need to think a little differently nowadays, ahem
              outside THE BOX, try something new, re-frame what we thought we
              knew, and open up our minds to shape the world our way, not their
              way.
            </p>
            <Img fluid={data.silkscreen.childImageSharp.fluid} />
          </div>
          <div className="column content">
            <h3 className="title">Fur Real?</h3>
            <Img fluid={data.boxPic.childImageSharp.fluid} />
            <p className="has-text-justified pt-4">
              Yes, fur better or worse. Creating a soundtrack for Chicago's
              northside beaches; fur beach-goers seen every day from Europe,
              Africa, and USA, hippies, punks, reggae-dudes, families, all just
              chillin'.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

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

    lakePic: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "IMG_2366.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    silkscreen: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "IMG_2420.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
