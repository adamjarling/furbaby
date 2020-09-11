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
import { behindTheDoor } from "../../music-release-manifest"

export const musicSources = [
  {
    label: "Spotify",
    url: behindTheDoor.spotify,
    icon: <FaSpotify />,
  },
  {
    label: "Apple Music",
    url: behindTheDoor.appleMusic,
    icon: <FaApple />,
  },
  {
    label: "Google Play",
    url: behindTheDoor.googlePlay,
    icon: <FaGooglePlay />,
  },
  {
    label: "Amazon Music",
    url: behindTheDoor.amazonMusic,
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

export default function SinglesBehindTheDoor() {
  var data = useStaticQuery(graphql`
    query {
      boxedInSingle: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "behind-the-door-cover-art-v2.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 70) {
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
