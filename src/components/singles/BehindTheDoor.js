import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FaSpotify, FaAmazon, FaGooglePlay, FaApple } from "react-icons/fa"
import { behindTheDoor } from "../../music-release-manifest"
import SinglesPRBox from "../SinglesPRBox"
import ExternalLink from "../../components/ExternalLink"

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
    label: "YouTube Music",
    url: behindTheDoor.youTubeMusic,
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
      boxedInSingle: file(
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
        <div className="column is-two-thirds">
          <div className="mb-4">
            <Img
              fluid={data.boxedInSingle.childImageSharp.fluid}
              style={{ border: "1px solid white" }}
            />
          </div>
        </div>
        <div className="column is-one-third">
          {musicSources.map(item => (
            <a href={item.url} className="button is-large is-fullwidth mb-4">
              <span className="icon">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
      <SinglesPRBox>
        <div className="columns">
          <div className="column is-two-thirds">
            <h3 className="title has-text-dark">
              For Immediate Release - September 10, 2020
            </h3>
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
              "It's great to hide, but we all gotta come out sometime fur real."
            </p>
          </div>
          <div className="column is-one-third ">
            <div className="notification content is-dark">
              <h4 className="title">Credits</h4>
              <h5>Video</h5>
              <ul>
                <li>
                  Filming:{" "}
                  <ExternalLink url="https://www.instagram.com/caseymurtaugh/?hl=en">
                    Casey Murtaugh
                  </ExternalLink>
                </li>
                <li>
                  Editing:{" "}
                  <ExternalLink url="https://adamarling.com">
                    Adam J. Arling
                  </ExternalLink>
                </li>
              </ul>
              <h5>Music</h5>
              <ul>
                <li>Written &amp; performed by: FURBABY</li>
                <li>
                  Mixing/Mastering:{" "}
                  <ExternalLink url="https://adamarling.com">
                    Adam J. Arling
                  </ExternalLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SinglesPRBox>
    </>
  )
}
