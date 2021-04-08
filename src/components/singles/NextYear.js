import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FaSpotify, FaAmazon, FaGooglePlay, FaApple } from "react-icons/fa"
import SinglesPRBox from "../SinglesPRBox"
import ExternalLink from "../../components/ExternalLink"
import { nextYear } from "../../music-release-manifest"

export const musicSources = [
  {
    label: "Spotify",
    url: nextYear.spotify,
    icon: <FaSpotify />,
  },
  {
    label: "Apple Music",
    url: nextYear.appleMusic,
    icon: <FaApple />,
  },
  {
    label: "YouTube Music",
    url: nextYear.youTubeMusic,
    icon: <FaGooglePlay />,
  },
  {
    label: "Amazon Music",
    url: nextYear.amazonMusic,
    icon: <FaAmazon />,
  },
]

export default function SinglesNextYear() {
  var data = useStaticQuery(graphql`
    query {
      single: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "next-year-album-art-v2-sharp.jpg" }
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
              For Immediate Release - February 22, 2021
            </h3>
            <p>
              Official FURBABY and the TIGHT SPACES "Next Year" video/single out
              now.
            </p>

            <p>
              Written and recorded in January, "Next Year" reflects on the
              time-honored tradition of crafting New Years intentions as one
              year ends and a new begins. And then mid-January, as Next Year
              fast becomes This Year, what was it you said you were going to do
              Next Year? What's holding us back from acting on these intentions
              in the past, or the present? How/why are we conditioned to think
              ahead and perhaps overlook being present in the moment? Man, we
              live in a busy world.
            </p>

            <p>
              Notwithstanding such existential crisis, the most dangerous band
              that's not a band in the land, The Tight Spaces, is back and roped
              in a new contributor. You may know Bryan Wilkinson from his tenure
              in Chicago punk icons{" "}
              <ExternalLink url="https://www.facebook.com/blackactresschicago/">
                Black Actress
              </ExternalLink>
              , guitar slinger in{" "}
              <ExternalLink url="https://thelastvegas.com">
                The Last Vegas
              </ExternalLink>
              , touring the world working lasers w/{" "}
              <ExternalLink url="https://toolband.com/">Tool</ExternalLink>, or
              capturing the world via photographs as{" "}
              <ExternalLink url="https://www.instagram.com/isolated.eyes/?hl=en">
                Isolated Eyes
              </ExternalLink>
              . BW tore it up on lead guitar and his signature smooth vocals.
            </p>

            <p>
              And on drums... rocking Keith Moon fills is Joe Winters of
              Steepwater Band fame, holding it d-o-w-n and getting a little
              crazy. Thanks Tony Maietta for capturing the magic, engineering
              drums at The Ranch.
            </p>

            <p>
              Calvin Marty comes through again big time with some tasty Abbey
              Road vibe piano parts and vocals. The chimey and percussive
              approach give the track an extra layer of rhythm and melody that
              guitar alone can't do.
            </p>

            <p>
              The funny thing is that everyone recorded their parts remotely (I
              don't even know where besides The Ranch), to only drums, one
              scratch guitar and a half-baked vocal track. When mixing, it all
              just mysteriously fit together with no overlap. Bizarre, but maybe
              we'll do it the "right" way....next year.
            </p>
          </div>
          <div className="column is-one-third">
            <div className="notification content is-dark">
              <h4 className="title">Credits</h4>
              <h5>Artwork</h5>
              <p>
                <ExternalLink url="https://www.instagram.com/caseymurtaugh/?hl=en">
                  Casey Murtaugh
                </ExternalLink>{" "}
                did a rad painting for the cover.{" "}
              </p>
              <h5>Video</h5>
              <ul>
                <li>
                  Filming &amp; Editing:{" "}
                  <ExternalLink url="https://www.instagram.com/stories/thebryanw/2519994367008475573/">
                    Bryan Wilkinson
                  </ExternalLink>
                  ,{" "}
                  <ExternalLink url="https://www.facebook.com/joseph.winters.75">
                    Joe Winters
                  </ExternalLink>
                  ,
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
                <li>Keyboards &amp; Vocals: Calvin Marty</li>
                <li>Guitars &amp; Vocals: Bryan Wilkinson</li>
                <li>
                  Drums recorded by Tony Maietta at{" "}
                  <ExternalLink url="http://www.goodtimesrecordings.com">
                    The Ranch
                  </ExternalLink>
                </li>
                <li>
                  Music &amp; lyrics, guitars/bass/vocals attempted by Adam J.
                  Arling
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
