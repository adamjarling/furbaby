import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import DownloadAudioButton from "../../components/DownloadAudioButton"
import { useStaticQuery, graphql } from "gatsby"
import boxedInWav from "../../assets/boxed-in_44.1k_16bit-master3.wav"
import cocoaWav from "../../assets/cocoa_44.1k_16bit-master4.wav"
import behindTheDoorWav from "../../assets/behind-the-door_44.1k_16bit-master4.wav"
import reachingOutWav from "../../assets/reaching-out-(higher-ground)_44.1k_16bit-master2.wav"
import iCanOnlyGiveYou from "../../assets/i-can-only-give-u_44.1k_16bit-master2.wav"
import waitingAudio from "../../assets/waiting_44.1k_16bit-master5.wav"

const SingleWrapper = ({ children }) => (
  <div className="column content is-one-third bright-hover">{children}</div>
)

export default function PressKitMusic() {
  var data = useStaticQuery(graphql`
    query {
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
  `)

  return (
    <>
      <h2 className="title">Music</h2>
      <div className="columns is-multiline">
        <SingleWrapper>
          <Link to="/singles/next-year">
            <Img fluid={data.nextYear.childImageSharp.fluid} />
          </Link>
        </SingleWrapper>
        <SingleWrapper>
          <Link to="/singles/waiting">
            <Img fluid={data.waiting.childImageSharp.fluid} />
          </Link>
          <DownloadAudioButton fileStr={waitingAudio} />
        </SingleWrapper>
        <SingleWrapper>
          <Link to="/singles/i-can-only-give-you-everyhing">
            <Img fluid={data.iCanOnlyGiveYouEverything.childImageSharp.fluid} />
          </Link>
          <DownloadAudioButton fileStr={iCanOnlyGiveYou} />
        </SingleWrapper>
        <SingleWrapper>
          <Link to="/singles/reaching-out">
            <Img fluid={data.reachingOut.childImageSharp.fluid} />
          </Link>
          <DownloadAudioButton fileStr={reachingOutWav} />
        </SingleWrapper>
        <SingleWrapper>
          <Link to="/singles/behind-the-door">
            <Img fluid={data.behindTheDoor.childImageSharp.fluid} />
          </Link>
          <DownloadAudioButton fileStr={behindTheDoorWav} />
        </SingleWrapper>
        <SingleWrapper>
          <Link to="/singles/cocoa">
            <Img fluid={data.cocoa.childImageSharp.fluid} />
          </Link>
          <DownloadAudioButton fileStr={cocoaWav} />
        </SingleWrapper>
        <SingleWrapper>
          <Link to="/singles/boxed-in">
            <Img fluid={data.boxedIn.childImageSharp.fluid} />
          </Link>
          <DownloadAudioButton fileStr={boxedInWav} />
        </SingleWrapper>
      </div>
    </>
  )
}
