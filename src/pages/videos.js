import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import VideoResponsive from "../components/VideoResponsive"

const Furbaby = styled.span`
  font-family: "Faster One", cursive;
`

const VideosPage = ({ data }) => (
  <Layout>
    <SEO title="Videos" />

    <section className="section">
      <div className="container">
        <h1 className="title is-sr-only">Videos</h1>

        <h2 className="title is-size-2 has-text-centered">
          Behind The Door (Teaser)
        </h2>
        <VideoResponsive
          url="https://www.youtube.com/embed/ZGC17B3cQTU"
          title="Behind The Door (Teaser) by FURBABY"
        />

        <h2 className="title is-size-2 has-text-centered mt-6">Cocoa</h2>
        <VideoResponsive
          url="https://www.youtube.com/embed/5bRFZN4X_3g"
          title="Cocoa by FURBABY"
        />

        <h2 className="title is-size-2 has-text-centered mt-6">Boxed In</h2>
        <VideoResponsive
          url="https://www.youtube.com/embed/piCdPUIlJlw"
          title="Boxed In by FURBABY"
        />

        <h2 className="title is-size-2 has-text-centered mt-6">Promo Videos</h2>
        <div className="columns">
          <div className="column">
            <VideoResponsive
              url="https://www.youtube.com/embed/ZDVW2WS5nUc"
              title="Cocoa Teaser Video"
            />
          </div>
          <div className="column">
            <VideoResponsive
              url="https://www.youtube.com/embed/FoAahoFIfeg"
              title="Cocoa Teaser Video"
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default VideosPage

export const videosPageQuery = graphql`
  query VideosPageTemplate {
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
