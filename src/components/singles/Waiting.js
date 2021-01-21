import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FaSpotify, FaAmazon, FaGooglePlay, FaApple } from "react-icons/fa"
import SinglesPRBox from "../SinglesPRBox"
import ExternalLink from "../../components/ExternalLink"
import { waiting } from "../../music-release-manifest"

export const musicSources = [
  {
    label: "Spotify",
    url: waiting.spotify,
    icon: <FaSpotify />,
  },
  {
    label: "Apple Music",
    url: waiting.appleMusic,
    icon: <FaApple />,
  },
  {
    label: "YouTube Music",
    url: waiting.youTubeMusic,
    icon: <FaGooglePlay />,
  },
  {
    label: "Amazon Music",
    url: waiting.amazonMusic,
    icon: <FaAmazon />,
  },
]

export default function SinglesWaiting() {
  var data = useStaticQuery(graphql`
    query {
      single: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "waiting-album-art.jpg" }
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
        <div className="column is-two-thirds">
          <div className="mb-4">
            <Img fluid={data.single.childImageSharp.fluid} />
          </div>
        </div>

        <div className="column is-one-third">
          {musicSources.map(item => (
            <a
              key={item.url}
              href={item.url}
              className="button is-large is-fullwidth mb-4"
            >
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
              For Immediate Release - January 21, 2021
            </h3>
            <p>
              Official FURBABY and the TIGHT SPACES "Waiting" video/single out
              now.
            </p>
            <p>
              Who hasn't been waiting for something, anything lately? A timely
              nod to who's waiting, what they're waiting for, and what it's like
              when the wait's over.
            </p>
            <p>
              This one was pretty cool as got to "jam virtually" on the track
              with 2 great dudes.{" "}
              <ExternalLink url="https://www.facebook.com/joseph.winters.75">
                Joe Winters
              </ExternalLink>{" "}
              (
              <ExternalLink url="https://www.steepwater.com/">
                Steepwater Band
              </ExternalLink>
              ) who's been a great friend for almost 20 years and shared a few
              stages in the past. He knows &amp; loves the "BOOM" "CRACK". And
              Steepwater Band is probably the best band ever, including their{" "}
              <ExternalLink url="https://www.steepwater.com/">
                latest released mind-melting album
              </ExternalLink>
              .
            </p>
            <p>
              On Rhodes piano, Waiting features the uber-talented
              actor/musician/biz-owner/podcast-host/dancer{" "}
              <ExternalLink url="https://www.instagram.com/calvinwmarty">
                Calvin Marty
              </ExternalLink>
              . Co-owner of Chicago's hippest bar (
              <ExternalLink url="https://www.facebook.com/BestIntentionsBar">
                Best Intentions
              </ExternalLink>
              ) and also currently hosting and producing introspective podcasts
              at{" "}
              <ExternalLink url="https://podcasts.apple.com/us/podcast/irregular-people/id1527478250">
                irRegular People
              </ExternalLink>
              .
            </p>
          </div>
          <div className="column is-one-third">
            <div className="notification content is-dark">
              <h4 className="title">Credits</h4>
              <h5>Video</h5>
              <ul>
                <li>
                  Filming &amp; Editing:{" "}
                  <ExternalLink url="https://www.instagram.com/caseymurtaugh/?hl=en">
                    Casey Murtaugh
                  </ExternalLink>{" "}
                  and{" "}
                  <ExternalLink url="https://adamarling.com">
                    Adam J. Arling
                  </ExternalLink>
                </li>
              </ul>

              <h5>Music</h5>
              <ul>
                <li>Drums: Joe Winters</li>
                <li>Keyboards: Calvin Marty</li>
                <li>
                  Drums recorded by Tony Maietta at{" "}
                  <ExternalLink url="http://www.goodtimesrecordings.com">
                    The Ranch
                  </ExternalLink>
                </li>
                <li>Music &amp; lyrics, guitars/bass/vocals: FURBABY</li>
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
