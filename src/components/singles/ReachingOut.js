import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import {
  FaSpotify,
  FaAmazon,
  FaGooglePlay,
  FaApple,
  FaItunes,
} from "react-icons/fa"
import { reachingOut } from "../../music-release-manifest"

export const musicSources = [
  {
    label: "Spotify",
    url: reachingOut.spotify,
    icon: <FaSpotify />,
  },
  {
    label: "Apple Music",
    url: reachingOut.appleMusic,
    icon: <FaApple />,
  },
  {
    label: "Google Play",
    url: reachingOut.googlePlay,
    icon: <FaGooglePlay />,
  },
  {
    label: "Amazon Music",
    url: reachingOut.amazonMusic,
    icon: <FaAmazon />,
  },
]

function MusicButton({ label, url, icon }) {
  return (
    <div className="column is-half">
      <a href={url} target="_blank" className="button is-fullwidth">
        <span className="icon">{icon}</span>
        <span>{label}</span>
      </a>
    </div>
  )
}

export default function SinglesReachingOut() {
  var data = useStaticQuery(graphql`
    query {
      boxedInSingle: file(
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

  return (
    <>
      <div className="columns is-centered">
        <div className="column is-8">
          <div className="mb-4">
            <Img fluid={data.boxedInSingle.childImageSharp.fluid} />
          </div>
          <div className="columns is-multiline">
            {musicSources.map(item => (
              <MusicButton
                key={item.label}
                label={item.label}
                url={item.url}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
