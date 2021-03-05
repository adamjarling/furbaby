import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import VideoResponsive from "../components/VideoResponsive"
import {
  behindTheDoor,
  cocoa,
  boxedIn,
  iCanOnlyGiveYouEverything,
  nextYear,
  reachingOut,
  waiting,
} from "../music-release-manifest"

const VideoWrapper = styled.div`
  padding: 1rem 0 2rem;
`

const Title = ({ children }) => (
  <h2 className="title is-size-2 is-size-4-mobile has-text-centered">
    {children}
  </h2>
)

const VideosPage = ({ data }) => (
  <Layout>
    <SEO title="Videos" />

    <section className="section">
      <div className="container">
        <h1 className="title is-sr-only">Videos</h1>

        <VideoWrapper>
          <Title>Next Year</Title>
          <VideoResponsive
            url={`https://www.youtube.com/embed/${nextYear.youTubeId}`}
            title="Next Year by FURBABY and the Tight Spaces"
          />
        </VideoWrapper>

        <VideoWrapper>
          <Title>Waiting</Title>
          <VideoResponsive
            url={`https://www.youtube.com/embed/${waiting.youTubeId}`}
            title="Waiting by FURBABY and the Tight Spaces"
          />
        </VideoWrapper>

        <VideoWrapper>
          <Title>I Can Only Give You Everything</Title>
          <VideoResponsive
            url={`https://www.youtube.com/embed/${iCanOnlyGiveYouEverything.youTubeId}`}
            title="I Can Only Give You Everything by FURBABY"
          />
        </VideoWrapper>

        <VideoWrapper>
          <Title>Reaching Out (For Higher Ground)</Title>
          <VideoResponsive
            url={`https://www.youtube.com/embed/${reachingOut.youTubeId}`}
            title="Reaching Out (For Higher Ground) by FURBABY"
          />
        </VideoWrapper>

        <VideoWrapper>
          <Title>Behind The Door</Title>
          <VideoResponsive
            url={`https://www.youtube.com/embed/${behindTheDoor.youTubeId}`}
            title="Behind The Door by FURBABY"
          />
        </VideoWrapper>

        <VideoWrapper>
          <Title>Cocoa</Title>
          <VideoResponsive
            url={`https://www.youtube.com/embed/${cocoa.youTubeId}`}
            title="Cocoa by FURBABY"
          />
        </VideoWrapper>

        <VideoWrapper>
          <Title>Boxed In</Title>
          <VideoResponsive
            url={`https://www.youtube.com/embed/${boxedIn.youTubeId}`}
            title="Boxed In by FURBABY"
          />
        </VideoWrapper>

        <h2 className="title is-size-2 has-text-centered mt-6">Promo Videos</h2>
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
