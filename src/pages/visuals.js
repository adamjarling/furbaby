import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroVisuals from "../components/heros/Visuals"
import Img from "gatsby-image"
import { graphql } from 'gatsby'

const VisualsPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <HeroVisuals />
    <section className="section">
      <div className="container">
        <Img fluid={data.silkscreen.childImageSharp.fluid} />
        <Img fluid={data.lakePic.childImageSharp.fluid} />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <figure className="image is-16by9">
          <iframe
            className="has-ratio"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/JfPbeTd2PW0"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </figure>
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
  }
`
