import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InspiredBy from "../components/InspiredBy"
import HeroSplash1 from "../components/heros/Splash1"
import AlbumsAnimated from "../components/AlbumsAnimated"
import Press2021NwiTimes from "../components/news/2021-nwitimes"
import FandTS from "../components/FandTS"
import { graphql } from "gatsby"
import * as musicManifest from "../music-release-manifest"
import VideoResponsive from "../components/VideoResponsive"
import useRandomNumber from "../hooks/use-random-number"
import { Link } from "gatsby"

const sampleVids = [
  {
    url: `https://www.youtube.com/embed/${musicManifest.socialDistance.youTubeId}`,
    title: "Social Distance by FURBABY and the Tight Spaces",
  },
  {
    url: `https://www.youtube.com/embed/${musicManifest.nextYear.youTubeId}`,
    title: "Next Year by FURBABY and the Tight Spaces",
  },
  {
    url: `https://www.youtube.com/embed/${musicManifest.iCanOnlyGiveYouEverything.youTubeId}`,
    title: "Next Year by FURBABY and the Tight Spaces",
  },
  {
    url: `https://www.youtube.com/embed/${musicManifest.waiting.youTubeId}`,
    title: "Next Year by FURBABY and the Tight Spaces",
  },
  {
    url: `https://www.youtube.com/embed/${musicManifest.reachingOut.youTubeId}`,
    title: "Next Year by FURBABY and the Tight Spaces",
  },
]

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home - Furbaby and the Tight Spaces" />
      <HeroSplash1 />
      <section className="section">
        <div className="container content">
          {/* <Press2021NwiTimes /> */}
          {/* <p>
            <FandTS /> records demos, reads, does yoga, drinks wine and takes
            long walks on the beach in Chicago USA.
          </p> */}
          <div className="columns is-mobile is-centered">
            <div className="column is-three-fifths-desktop">
              <p className="is-size-3 is-size-5-mobile has-text-centered">
                <FandTS /> is an alt/garage/psych art-project band for a world
                fast-forwarded into the future.
              </p>
            </div>
          </div>

          <VideoResponsive {...sampleVids[useRandomNumber(5)]} />
        </div>
      </section>

      <section className="hero is-white">
        <div className="hero-body has-text-centered">
          <p className="title is-uppercase">LIVE SHOW!</p>
          <p className="subtitle">
            Flatts and Sharpe Music Festival
            <br />
            July 10, 2021
            <br />
            Rogers Park, Chicago, IL
          </p>
          <Link to="shows" className="button">
            Get Details
          </Link>
        </div>
      </section>

      <div className="mt-4">
        <AlbumsAnimated />
      </div>
      <InspiredBy />
    </Layout>
  )
}

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
  }
`
