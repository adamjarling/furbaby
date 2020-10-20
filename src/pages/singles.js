import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Link } from "gatsby"

const SinglesPage = ({ data }) => (
  <Layout>
    <SEO title="Singles" />
    <div className="container mt-6">
      <h1 className="title">Singles</h1>
      <p className="subtitle">A new single every month, fur u.</p>
    </div>
    <section className="section">
      <div className="columns is-multiline">
        <div className="column is-half">
          <Link to="/reaching-out">
            <Img fluid={data.reachingOut.childImageSharp.fluid} />
          </Link>
        </div>
        <div className="column is-half">
          <Link to="/behind-the-door">
            <Img fluid={data.behindTheDoor.childImageSharp.fluid} />
          </Link>
        </div>
        <div className="column is-half">
          <Link to="/cocoa">
            <Img fluid={data.cocoa.childImageSharp.fluid} />
          </Link>
        </div>
        <div className="column is-half">
          <Link to="/boxed-in">
            <Img fluid={data.boxedIn.childImageSharp.fluid} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default SinglesPage

export const singlesPageQuery = graphql`
  query SinglesPageTemplate {
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
    behindTheDoor: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "behind-the-door-cover-art-v2.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cocoa: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "cocoa-single-cover.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reachingOut: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "reaching-out-album-art-v2.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
