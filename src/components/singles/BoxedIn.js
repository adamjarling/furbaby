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
import { boxedIn } from "../../music-release-manifest"
import ExternalLink from "../../components/ExternalLink"
import MusicButton from "../MusicButton"
import MusicButtonsWrapper from "../MusicButtonsWrapper"
import SinglesPRBox from "../SinglesPRBox"

export const musicSources = [
  {
    label: "Spotify",
    url: boxedIn.spotify,
    icon: <FaSpotify />,
  },
  {
    label: "Apple Music",
    url: boxedIn.appleMusic,
    icon: <FaApple />,
  },
  {
    label: "Google Play",
    url: boxedIn.googlePlay,
    icon: <FaGooglePlay />,
  },
  {
    label: "Amazon Music",
    url: boxedIn.amazonMusic,
    icon: <FaAmazon />,
  },
]

export default function SinglesBoxedIn() {
  var data = useStaticQuery(graphql`
    query {
      boxedInSingle: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "FURBABY-boxed-in-cover-art-no-outline.png" }
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
          <Img fluid={data.boxedInSingle.childImageSharp.fluid} />
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
              For Immediate Release - June 30, 2020
            </h4>
            <p>
              Chicago's FURBABY releases it's debut single, "Boxed In" on June
              30, 2020.
            </p>
            <p>
              Featuring Denmark's{" "}
              <ExternalLink url="https://www.facebook.com/ratshredder">
                Dennis "El Guapo" Post
              </ExternalLink>{" "}
              from Warrior Soul/City Kids ripping a proper solo. Thanks dude!
            </p>
            <p>
              Furbaby quotes, "I can't really sing, but I gotta a lotta riffs, a
              lotta time on my hands, and this really cool box. The
              possibilities are endless."
            </p>
            <p>
              Check back in to catch a new single &amp; video every month from
              here til the well runs dry.
            </p>
          </SinglesPRBox>
        </div>
      </div>
    </>
  )
}
