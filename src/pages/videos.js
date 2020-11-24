import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import VideoResponsive from "../components/VideoResponsive"
import {
  behindTheDoor,
  cocoa,
  boxedIn,
  reachingOut,
} from "../music-release-manifest"

const VideoWrapper = styled.div`
  padding: 1rem 0 8rem;
`

const VideosPage = ({ data }) => (
  <Layout>
    <SEO title="Videos" />

    <section className="section">
      <div className="container">
        <h1 className="title is-sr-only">Videos</h1>

        <VideoWrapper>
          <h2 className="title is-size-2 has-text-centered">
            Reaching Out (For Higher Ground)
          </h2>
          <VideoResponsive
            url={`https://www.youtube.com/embed/${reachingOut.youTubeId}`}
            title="Reaching Out (For Higher Ground) by FURBABY"
          />
        </VideoWrapper>

        <VideoWrapper>
          <h2 className="title is-size-2 has-text-centered">Behind The Door</h2>
          <VideoResponsive
            url={`https://www.youtube.com/embed/${behindTheDoor.youTubeId}`}
            title="Behind The Door by FURBABY"
          />
        </VideoWrapper>

        <VideoWrapper>
          <h2 className="title is-size-2 has-text-centered">Cocoa</h2>
          <VideoResponsive
            url={`https://www.youtube.com/embed/${cocoa.youTubeId}`}
            title="Cocoa by FURBABY"
          />
        </VideoWrapper>

        <VideoWrapper>
          <h2 className="title is-size-2 has-text-centered">Boxed In</h2>
          <VideoResponsive
            url={`https://www.youtube.com/embed/${boxedIn.youTubeId}`}
            title="Boxed In by FURBABY"
          />
        </VideoWrapper>

        <h2 className="title is-size-2 has-text-centered">Promo Videos</h2>
        <div className="columns is-multiline">
          <div className="column is-half">
            <VideoResponsive
              url="https://www.youtube.com/embed/ZGC17B3cQTU"
              title="Behind The Door Teaser Video"
            />
          </div>
          <div className="column is-half">
            <VideoResponsive
              url="https://www.youtube.com/embed/ZDVW2WS5nUc"
              title="Cocoa Teaser Video"
            />
          </div>
          <div className="column is-half">
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
