import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroPressKit from "../components/heros/PressKit"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"
import PressKitBio from "../components/press-kit/Bio"
import PressKitVideos from "../components/press-kit/Videos"
import PressKitMusic from "../components/press-kit/Music"
import PressKitPhotos from "../components/press-kit/Photos"
import DownloadAudioButton from "../components/DownloadAudioButton"

const PressKitPage = ({ data }) => (
  <Layout>
    <SEO title="Press Kit - - Furbaby and the Tight Spaces" />
    <HeroPressKit />
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds has-text-justified">
            <PressKitBio />
          </div>

          <div className="column is-one-third content">
            <h2 className="title">Latest Release</h2>
            <Link to="/singles/next-year" className="bright-hover">
              <Img fluid={data.nextYear.childImageSharp.fluid} />
            </Link>
            <DownloadAudioButton
              fileStr={
                "https://drive.google.com/file/d/17Ecqw-KDG-0gy0O67QJgG-FlWlk_yYym/view?usp=sharing"
              }
            />
          </div>
        </div>

        <section className="section">
          <PressKitPhotos />
        </section>

        <section className="section">
          <PressKitMusic />
        </section>

        <section className="section">
          <PressKitVideos />
        </section>
      </div>
    </section>
  </Layout>
)

export default PressKitPage

export const pressKitPageQuery = graphql`
  query PressKitPageTemplate {
    nextYear: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "next-year-album-art-v2-sharp.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    waiting: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "waiting-album-art.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
