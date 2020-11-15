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
import MusicButton from "../MusicButton"
import SinglesPRBox from "../SinglesPRBox"
import MusicButtonsWrapper from "../MusicButtonsWrapper"

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

export default function SinglesBehindTheDoor() {
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
    }
  `)

  return (
    <>
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="mb-4">
            <Img
              fluid={data.behindTheDoor.childImageSharp.fluid}
              style={{ border: "1px solid white" }}
            />
          </div>
          <MusicButtonsWrapper>
            {musicSources.map(item => (
              <MusicButton
                key={item.label}
                label={item.label}
                url={item.url}
                icon={item.icon}
              />
            ))}
          </MusicButtonsWrapper>
        </div>
        <div className="column is-half">
          <SinglesPRBox>
            <h4 className="has-text-dark">
              For Immediate Release - September 10, 2020
            </h4>
            <p>
              Chicago's FURBABY releases it's third single, "Behind The Door" on
              September 10, 2020.
            </p>
            <p>
              "This tune jumped out from a droning riff I was messing with
              backstage in Key West, Florida. While procrastinating learning a
              crazy complicated end synth run to ABBA's "Lay Your Love On Me",
              this bendy 2-string thing sounded so simple and cave-man. It's
              amazing what one comes up with when your mind gets lost in the
              clouds."
            </p>
            <p>
              The lyrics are further inspired by some kind of relationship
              between perception and hiding places. Perhaps a poor-man's Doors
              Jim Morrison reference, but nonetheless a psych-rock vantage point
              from which to approach a tune.
            </p>
            <p>
              "It's great to hide, but we all gotta come out sometime rur real."
            </p>
          </SinglesPRBox>
        </div>
      </div>
    </>
  )
}
