import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useSpring, animated } from "react-spring"
import { Link } from "gatsby"
import Img from "gatsby-image"

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

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
          fluid(maxWidth: 1000, quality: 100) {
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
    }
  `)

  const { reachingOut, behindTheDoor, cocoa, boxedIn } = data

  const albums = [
    { fluid: reachingOut.childImageSharp.fluid, to: "/singles/reaching-out" },
    {
      fluid: behindTheDoor.childImageSharp.fluid,
      to: "/singles/behind-the-door",
    },
    { fluid: cocoa.childImageSharp.fluid, to: "/singles/cocoa" },
    { fluid: boxedIn.childImageSharp.fluid, to: "/singles/boxed-in" },
  ]

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  return (
    <div className="columns is-multiline">
      {albums.map(({ fluid, to }) => (
        <div className="column is-half">
          <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
          >
            {" "}
            <Link to={to}>
              <Img fluid={fluid} />
            </Link>
          </animated.div>
        </div>
      ))}
    </div>
  )
}
