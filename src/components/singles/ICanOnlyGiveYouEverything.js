import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FaSpotify, FaAmazon, FaGooglePlay, FaApple } from "react-icons/fa"
import SinglesPRBox from "../SinglesPRBox"
import ExternalLink from "../../components/ExternalLink"
import { iCanOnlyGiveYouEverything } from "../../music-release-manifest"

export const musicSources = [
  {
    label: "Spotify",
    url: iCanOnlyGiveYouEverything.spotify,
    icon: <FaSpotify />,
  },
  {
    label: "Apple Music",
    url: iCanOnlyGiveYouEverything.appleMusic,
    icon: <FaApple />,
  },
  {
    label: "YouTube Music",
    url: iCanOnlyGiveYouEverything.youTubeMusic,
    icon: <FaGooglePlay />,
  },
  {
    label: "Amazon Music",
    url: iCanOnlyGiveYouEverything.amazonMusic,
    icon: <FaAmazon />,
  },
]

export default function SinglesICanOnlyGiveYouEverything() {
  var data = useStaticQuery(graphql`
    query {
      single: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "give-u-everything-album-art-v1.jpg" }
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
              For Immediate Release - November 24, 2020
            </h3>
            <p>
              "Well I try, and I try, but you know that I, can only give you
              everything.""
            </p>
            <p>
              What month November 2020 has been in the United States. A new
              president. A pandemic heating back up. A country divided or coming
              back together? Are our differences really as stark as polarizing,
              profiteering, cable news channels tell us?
            </p>
            <p>
              It's hard to tell. Our parents say this year has felt at times,
              like the 1960s. Change is in the air. What will we do with the
              opportunity this time?
            </p>
            <p>
              The 60s were an explosion of music, ideas, fashion, change. A
              reaction to the 50s, in which we tried to put society back in
              order, post WWII.{" "}
            </p>
            <p>
              Life is fluid, and a series of reactions to what has come before.
              Those reactions are like waves. Changemakers can ride those waves,
              and champion just causes and illustrate new ways of doing and
              thinking about our world.
            </p>
            <p>
              Furbaby drank too much coffee and is going on a weird tangent
              here, but the new single, "I Can Only Give You Everything" is a
              nod to{" "}
              <ExternalLink url="https://en.wikipedia.org/wiki/Them_(band)">
                Them
              </ExternalLink>
              ,{" "}
              <ExternalLink url="https://en.wikipedia.org/wiki/MC5">
                The MC5
              </ExternalLink>
              , and changemakers from the 60s to the 2020s.
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
