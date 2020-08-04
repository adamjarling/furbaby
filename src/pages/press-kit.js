import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroPressKit from "../components/heros/PressKit"
import Img from "gatsby-image"
import styled from "styled-components"
import ExternalLink from "../components/ExternalLink"
import { FaDownload } from "react-icons/fa"
import BoxedInVideo from "../components/videos/BoxedInVideo"
import Obfuscate from "react-obfuscate"
import VideoResponsive from "../components/VideoResponsive"

const Furbaby = styled.span`
  font-family: "Faster One", cursive;
`

const PressKitPage = ({ data }) => (
  <Layout>
    <SEO title="Press Kit" />
    <HeroPressKit />
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds content">
            <h2 className="title">Bio</h2>
            <p>
              <Furbaby>FURBABY</Furbaby> is a garage rock band for the 2020s,
              born in the middle of a global pandemic. Why not?
            </p>
            <p>
              Given time to think a little differently about the everything,{" "}
              <Furbaby>FURBABY</Furbaby> records home studio demos, does yoga,
              drinks wine and takes long walks on the beach in the diverse,
              arts-centric, multicultural Rogers Park neighborhood of Chicago.
            </p>
            <p>
              <Furbaby>FURBABY</Furbaby> will most likely never play live, but
              if so it'd be nice to do a little tour of Spain.{" "}
              <Obfuscate
                email="aarling@gmail.com"
                headers={{
                  subject: "Email from Furbaby.rocks",
                }}
              >
                Interested?
              </Obfuscate>
            </p>
            <p>
              <ExternalLink url="https://www.instagram.com/caseymurtaugh/">
                Casey
              </ExternalLink>{" "}
              does the art.{" "}
              <ExternalLink url="https://adamarling.com">Adam</ExternalLink>{" "}
              does the music
            </p>
            <p>
              Coming up...10 singles &amp; accompanying videos over the next few
              months. The first single <strong>"Boxed In"</strong>, was released
              June 30th, 2020.
            </p>
          </div>
          <div className="column is-one-third content">
            <h2 className="title">Music</h2>
            <Img fluid={data.boxedIn.childImageSharp.fluid} />
            <a href="#" className="button is-fullwidth mt-3">
              <span className="icon">
                <FaDownload />
              </span>
              <span>Download WAV audio file</span>
            </a>
            <p className="has-text-centered">Coming soon...</p>
          </div>
        </div>
        <hr />
        <div className="columns">
          <div className="column content">
            <h2 className="title">Videos</h2>
            <div className="mb-3">
              <VideoResponsive
                url="https://www.youtube.com/embed/5bRFZN4X_3g"
                title="Cocoa by FURBABY"
              />
            </div>
            <VideoResponsive
              url="https://www.youtube.com/embed/piCdPUIlJlw"
              title="Boxed In by FURBABY"
            />
          </div>
          <div className="column content">
            <h2 className="title">Photos</h2>
            <Img fluid={data.promoPhoto.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default PressKitPage

export const pressKitPageQuery = graphql`
  query PressKitPageTemplate {
    boxedIn: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "FURBABY-boxed-in-cover-art-no-outline.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    promoPhoto: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "promo-photo-bw.PNG" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
