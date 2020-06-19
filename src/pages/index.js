import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import mp3 from "../boxed-in-sample.mp3"
import gif from "../images/exploding-star.gif"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <section className={`hero has-background is-dark is-medium`}>
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

          <img
            src={gif}
            className="is-pulled-right mt-6"
            style={{ width: "600px" }}
            alt="Furbaby in a box"
          />
        </div>
      </div>
    </section>

    <section className="section has-text-white has-text-centered">
      <div>
        <figure>
          <audio controls src={mp3}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
        <p>New trashy garage single "Boxed In" coming soon...fur u.</p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Img fluid={data.boxPic.childImageSharp.fluid} />
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
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    boxPic: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "IMG_2203.jpeg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
