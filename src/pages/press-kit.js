import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroPressKit from "../components/heros/PressKit"
import Img from "gatsby-image"
import styled from "styled-components"
import ExternalLink from "../components/ExternalLink"
import Obfuscate from "react-obfuscate"
import VideoResponsive from "../components/VideoResponsive"
import boxedInWav from "../assets/boxed-in_44.1k_16bit-master3.wav"
import cocoaWav from "../assets/cocoa_44.1k_16bit-master4.wav"
import behindTheDoorWav from "../assets/behind-the-door_44.1k_16bit-master4.wav"
import reachingOutWav from "../assets/reaching-out-(higher-ground)_44.1k_16bit-master2.wav"
import * as musicManifest from "../music-release-manifest"
import DownloadAudioButton from "../components/DownloadAudioButton"
import DownloadPhoto from "../components/DownloadPhoto"
import { Link } from "gatsby"

const Furbaby = styled.span`
  text-transform: uppercase;
`

const PressKitPage = ({ data }) => (
  <Layout>
    <SEO title="Press Kit" />
    <HeroPressKit />
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds has-text-justified">
            <h2 className="title">Bio</h2>
            <div className="content">
              <p>
                <Furbaby>FURBABY</Furbaby> is an alt/garage/psych side-project
                hatched for the 2020s. It's a vehicle for experimenting with
                music, videos, photography and reflecting what's going on in a
                world that just got fast-forwarded into the future.
              </p>
              <p>
                <Furbaby>FURBABY</Furbaby> records demos, reads, does yoga,
                drinks wine and takes long walks on the beach in the diverse,
                arts-centric Rogers Park neighborhood of Chicago USA.
              </p>
              <p className="is-italic">
                "When things shut down in the USA in March 2020, everyone had a
                lot of time on their hands. After being an active musician for
                years on end, it was a chance to sit down with some ideas and
                flesh 'em out. Trying different tones, textures, ways of
                writing. Saying "why not?" a lot."
              </p>

              <p>
                In past and current lives <Furbaby>FURBABY</Furbaby> has toured
                and/or recorded with{" "}
                <ExternalLink url="https://thelastvegas.com">
                  The Last Vegas
                </ExternalLink>
                ,{" "}
                <ExternalLink url="https://urgeoverkill.com/">
                  Urge Overkill
                </ExternalLink>
                ,{" "}
                <ExternalLink url="https://www.gethip.com/site/artists/cynics/">
                  The Cynics
                </ExternalLink>
                ,{" "}
                <ExternalLink url="https://www.warriorsoulofficial.com/">
                  Warrior Soul
                </ExternalLink>
                ,{" "}
                <ExternalLink url="https://www.abbarama.com/">
                  ABBARAMA
                </ExternalLink>
                ,{" "}
                <ExternalLink url="https://en.wikipedia.org/wiki/The_Dogs_D%27Amour">
                  Tyla and Dogs 'D Amour
                </ExternalLink>
                ,{" "}
                <ExternalLink url="https://www.blackangusrock.com/">
                  Black Angus
                </ExternalLink>
                ,{" "}
                <ExternalLink url="https://www.facebook.com/EarlySound">
                  Early Sound
                </ExternalLink>
                ,{" "}
                <ExternalLink url="https://www.keithscottblues.com/">
                  Keith Scott Blues Band
                </ExternalLink>
                ,{" "}
                <ExternalLink url="#">The Electric Blues Junkies</ExternalLink>,{" "}
                and others.
              </p>
              <p>
                <Furbaby>FURBABY</Furbaby> may or may not play live, but if so
                it'd be nice to do a little tour of Spain.{" "}
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
                Coming up...10 singles &amp; accompanying videos over the next
                few months.
              </p>
            </div>
          </div>

          <div className="column is-one-third content">
            <h2 className="title">Latest Release</h2>
            <Link to="singles/i-can-only-give-you-everything">
              <Img
                fluid={data.iCanOnlyGiveYouEverything.childImageSharp.fluid}
              />
            </Link>
          </div>
        </div>

        <section className="section">
          <h2 className="title">Videos</h2>
          <div className="columns is-multiline">
            <div className="column content is-half">
              <VideoResponsive
                url={`https://www.youtube.com/embed/${musicManifest.reachingOut.youTubeId}`}
                title="Reaching Out (for Higher Ground) FURBABY"
              />
            </div>
            <div className="column content is-half">
              <VideoResponsive
                url={`https://www.youtube.com/embed/${musicManifest.behindTheDoor.youTubeId}`}
                title="Behind the Door FURBABY"
              />
            </div>
            <div className="column content is-half">
              <VideoResponsive
                url="https://www.youtube.com/embed/5bRFZN4X_3g"
                title="Cocoa by FURBABY"
              />
            </div>
            <div className="column content is-half">
              <VideoResponsive
                url="https://www.youtube.com/embed/piCdPUIlJlw"
                title="Boxed In by FURBABY"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="title">Music</h2>
          <div className="columns is-multiline">
            <div className="column content is-one-third">
              <Link to="singles/i-can-only-give-you-everyhing">
                <Img
                  fluid={data.iCanOnlyGiveYouEverything.childImageSharp.fluid}
                />
              </Link>
            </div>
            <div className="column content is-one-third">
              <Link to="singles/reaching-out">
                <Img fluid={data.reachingOut.childImageSharp.fluid} />
              </Link>
              <DownloadAudioButton fileStr={reachingOutWav} />
            </div>
            <div className="column content is-one-third">
              <Link to="singles/behind-the-door">
                <Img fluid={data.behindTheDoor.childImageSharp.fluid} />
              </Link>
              <DownloadAudioButton fileStr={behindTheDoorWav} />
            </div>
            <div className="column content is-one-third">
              <Link to="singles/cocoa">
                <Img fluid={data.cocoa.childImageSharp.fluid} />
              </Link>
              <DownloadAudioButton fileStr={cocoaWav} />
            </div>
            <div className="column content is-one-third">
              <Link to="singles/boxed-in">
                <Img fluid={data.boxedIn.childImageSharp.fluid} />
              </Link>
              <DownloadAudioButton fileStr={boxedInWav} />
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="title">Photos</h2>
          <div className="columns">
            <div className="column">
              <Img fluid={data.triangleWall.childImageSharp.fluid} />
              <DownloadPhoto
                fileStr={data.triangleWall.childImageSharp.fluid.src}
              />
            </div>
            <div className="column">
              <Img fluid={data.promoPhotoBox.childImageSharp.fluid} />
              <DownloadPhoto
                fileStr={data.promoPhotoBox.childImageSharp.fluid.src}
              />
            </div>
          </div>
        </section>
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
    iCanOnlyGiveYouEverything: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "give-u-everything-album-art-v1.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    promoPhotoBox: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "photo-box-lake.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    promoPhoto: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "promo-photo-bw.PNG" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 80, grayscale: false) {
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
    triangleWall: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "photo-triangle-wall.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
