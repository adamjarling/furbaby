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

export const musicSources = [
  {
    label: "Spotify",
    url:
      "https://open.spotify.com/album/2BUiOdFxCOYRRt2sWUj2Bk?si=PpTgsQeeSeOrE8HoVpL2cg",
    icon: <FaSpotify />,
  },
  {
    label: "Apple Music",
    url: "https://music.apple.com/us/album/cocoa-single/1525576097",
    icon: <FaApple />,
  },
  {
    label: "Google Play",
    url:
      "https://play.google.com/store/music/album/Furbaby_Cocoa?id=Bxfjxlvr7uqh5ismdtyo5ftrp2e",
    icon: <FaGooglePlay />,
  },
  {
    label: "Amazon Music",
    url: "https://www.amazon.com/dp/B08F4FLD1V",
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

export default function SinglesCocoa() {
  var data = useStaticQuery(graphql`
    query {
      boxedInSingle: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "cocoa-single-cover.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
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
