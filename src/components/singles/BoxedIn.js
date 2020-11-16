import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FaSpotify, FaAmazon, FaGooglePlay, FaApple } from "react-icons/fa"
import { boxedIn } from "../../music-release-manifest"
import ExternalLink from "../../components/ExternalLink"
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
    label: "YouTube Music",
    url: boxedIn.youTubeMusic,
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
        <div className="column is-two-thirds">
          <Img fluid={data.boxedInSingle.childImageSharp.fluid} />
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
            <h3 className="has-text-dark title">
              For Immediate Release - June 30, 2020
            </h3>
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
          </div>
          <div className="column is-one-third">
            <div className="notification content is-dark">
              <h4 className="title">Credits</h4>
              <h5>Video</h5>
              <ul>
                <li>
                  Filming &amp; editing:{" "}
                  <ExternalLink url="https://adamarling.com">
                    Adam J. Arling
                  </ExternalLink>
                </li>
                <li>Cat in the box: Topanga Furguson</li>
              </ul>

              <h5>Music</h5>
              <ul>
                <li>Music &amp; lyrics, guitars/bass/vocals: FURBABY</li>
                <li>
                  Additional guitars &amp; solo:{" "}
                  <ExternalLink url="https://www.facebook.com/ratshredder">
                    Dennis "El Guapo" Post
                  </ExternalLink>
                </li>
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
