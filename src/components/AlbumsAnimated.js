import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useSpring, animated } from "react-spring"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { iCanOnlyGiveYouEverything } from "../music-release-manifest"

function Album({ fluid, to }) {
  const [state, toggle] = React.useState(true)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  })

  /*
    0 % { transform: scale(1); }
    25 % { transform: scale(.97); }
    35 % { transform: scale(.9); }
    45 % { transform: scale(1.1); }
    55 % { transform: scale(.9); }
    65 % { transform: scale(1.1); }
    75 % { transform: scale(1.03); }
    100 % { transform: scale(1); }
`*/
  return (
    // <div className="column is-half" onMouseEnter={() => toggle(!state)}>
    //   <animated.div
    //     style={{
    //       opacity: x.interpolate({ range: [0, 1], output: [0.7, 1] }),
    //       transform: x
    //         .interpolate({
    //           range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
    //           output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
    //         })
    //         .interpolate(x => `scale(${x})`),
    //     }}
    //   >
    //     <Link to={to}>
    //       <Img fluid={fluid} />
    //     </Link>
    //   </animated.div>
    // </div>
    <div className="column is-half hvr-grow-rotate">
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

  const { reachingOut, behindTheDoor, cocoa, boxedIn, waiting } = data

  const albums = [
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
    <div>
      <div className="columns is-multiline">
        {albums.map(album => (
          <Album fluid={album.fluid} to={album.to} key={album.to} />
        ))}
      </div>
    </div>
  )
}
