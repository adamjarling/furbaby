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
              Official FURBABY and the TIGHT SPACES "Next Year (say I love you
              like I should)" video/single out now.
            </p>
            <p>
              I don't have anything clever yet for context around the single,
              except we pulled Bryan Wilkinson into the mix for some mean guitar
              on this one, alongside Joe Winters and Calvin Marty. The band that
              isn't a band is sounding tight!
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
