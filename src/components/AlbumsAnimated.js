import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useSpring, animated } from "react-spring"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { iCanOnlyGiveYouEverything } from "../music-release-manifest"

function Album({ fluid, to }) {
  return (
    <div className="column is-half">
      <Link to={to}>
        <Img fluid={fluid} className="bright-hover" />
      </Link>
    </div>
  )
}

export default function AlbumsAnimated() {
  var data = useStaticQuery(graphql`
    query {
      behindTheDoor: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "behind-the-door-cover-art-v2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      boxedIn: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "FURBABY-boxed-in-cover-art-no-outline.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      cocoa: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "cocoa-single-cover.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      iCanOnlyGiveYouEverything: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "give-u-everything-album-art-v1.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      nextYear: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "next-year-album-art-v2-sharp.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      reachingOut: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "reaching-out-album-art-v2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      waiting: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "waiting-album-art.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { reachingOut, behindTheDoor, cocoa, boxedIn, nextYear, waiting } = data

  const albums = [
    {
      fluid: data.nextYear.childImageSharp.fluid,
      to: "/singles/next-year",
    },
    {
      fluid: data.waiting.childImageSharp.fluid,
      to: "/singles/waiting",
    },
    {
      fluid: data.iCanOnlyGiveYouEverything.childImageSharp.fluid,
      to: "/singles/i-can-only-give-you-everything",
    },
    { fluid: reachingOut.childImageSharp.fluid, to: "/singles/reaching-out" },
    {
      fluid: behindTheDoor.childImageSharp.fluid,
      to: "/singles/behind-the-door",
    },
    { fluid: cocoa.childImageSharp.fluid, to: "/singles/cocoa" },
    { fluid: boxedIn.childImageSharp.fluid, to: "/singles/boxed-in" },
  ]

  return (
    <div className="container">
      <div className="columns is-multiline">
        {albums.map(album => (
          <Album fluid={album.fluid} to={album.to} key={album.to} />
        ))}
      </div>
    </div>
  )
}
