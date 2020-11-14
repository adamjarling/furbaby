import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBoxedIn from "../components/heros/BoxedIn"
import { Link } from "gatsby"
import HeroAboutTeaser from "../components/heros/AboutTeaser"
import InspiredBy from "../components/InspiredBy"
import HomeSlider from "../components/HomeSlider"
import HeroCocoa from "../components/heros/Cocoa"
import HeroBehindTheDoor from "../components/heros/BehindTheDoor"
import HeroReachingOut from "../components/heros/ReachingOut"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <HomeSlider />

    <HeroReachingOut />

    <HeroBehindTheDoor />

    <HeroCocoa />

    <HeroBoxedIn />

    {/* <HeroAboutTeaser /> */}

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
      relativePath: { eq: "photo-box-lake.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
