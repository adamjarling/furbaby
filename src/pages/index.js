import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ExplodingFur from "../components/heros/ExplodingFur"
import HeroBoxedIn from "../components/heros/BoxedIn"
import { Link } from "gatsby"
import HeroAboutTeaser from "../components/heros/AboutTeaser"
import InspiredBy from "../components/InspiredBy"
import HomeSlider from "../components/HomeSlider"
import HeroCocoa from "../components/heros/Cocoa"

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

    <HomeSlider />

    {/* <HeroCocoa /> */}

    <section className="section">
      <div className="container">
        <figure className="image is-16by9">
          <iframe
            className="has-ratio"
            width="1024"
            height="576"
            src="https://www.youtube.com/embed/ZDVW2WS5nUc"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </figure>
      </div>
    </section>

    <HeroBoxedIn />

    <HeroAboutTeaser />

    <InspiredBy />
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
