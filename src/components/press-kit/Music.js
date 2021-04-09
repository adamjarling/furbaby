import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import DownloadAudioButton from "../../components/DownloadAudioButton"
import { useStaticQuery, graphql } from "gatsby"
import {
  behindTheDoor,
  boxedIn,
  cocoa,
  iCanOnlyGiveYouEverything,
  nextYear,
  reachingOut,
  socialDistance,
  waiting,
} from "../../music-release-manifest"

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
      socialDistance: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "social-distance-album-art-v1b.jpg" }
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
          <Link to="/singles/social-distance">
            <Img fluid={data.socialDistance.childImageSharp.fluid} />
          </Link>
          <DownloadAudioButton fileStr={socialDistance.wav} />
        </SingleWrapper>
        <SingleWrapper>
          <Link to="/singles/next-year">
            <Img fluid={data.nextYear.childImageSharp.fluid} />
          </Link>
          <DownloadAudioButton fileStr={nextYear.wav} />
        </SingleWrapper>
        <SingleWrapper>
          <Link to="/singles/waiting">
            <Img fluid={data.waiting.childImageSharp.fluid} />
          </Link>
          <DownloadAudioButton fileStr={waiting.wav} />
        </SingleWrapper>
        <SingleWrapper>
          <Link to="/singles/i-can-only-give-you-everyhing">
            <Img fluid={data.iCanOnlyGiveYouEverything.childImageSharp.fluid} />
          </Link>
          <DownloadAudioButton fileStr={iCanOnlyGiveYouEverything.wav} />
        </SingleWrapper>
        <SingleWrapper>
          <Link to="/singles/reaching-out">
            <Img fluid={data.reachingOut.childImageSharp.fluid} />
          </Link>
          <DownloadAudioButton fileStr={reachingOut.wav} />
        </SingleWrapper>
        <SingleWrapper>
          <Link to="/singles/behind-the-door">
            <Img fluid={data.behindTheDoor.childImageSharp.fluid} />
          </Link>
          <DownloadAudioButton fileStr={behindTheDoor.wav} />
        </SingleWrapper>
        <SingleWrapper>
          <Link to="/singles/cocoa">
            <Img fluid={data.cocoa.childImageSharp.fluid} />
          </Link>
          <DownloadAudioButton fileStr={cocoa.wav} />
        </SingleWrapper>
        <SingleWrapper>
          <Link to="/singles/boxed-in">
            <Img fluid={data.boxedIn.childImageSharp.fluid} />
          </Link>
          <DownloadAudioButton fileStr={boxedIn.wav} />
        </SingleWrapper>
      </div>
    </>
  )
}
