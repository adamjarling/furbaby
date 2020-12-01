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
              Official FURBABY video for the new single "I Can Only Give You
              Everything" out now.
            </p>

            <p>
              "Well I try, and I try, but you know that I, can only give you
              everything."
            </p>

            <p>
              Everything. Well what a month November 2020 has been, living in
              the United States. A heated election, pandemic, lockdown, and
              glimpses of hope on the horizon all wrapped up together. It can
              get overwhelming.
            </p>

            <p>
              This video is a story of what happens when it gets overwhelming,
              and you take a little trip via a 60's pop classic tune, say{" "}
              <ExternalLink url="https://en.wikipedia.org/wiki/Them_(band)">
                Them
              </ExternalLink>{" "}
              or the{" "}
              <ExternalLink url="https://en.wikipedia.org/wiki/MC5">
                The MC5's
              </ExternalLink>{" "}
              I Can Only Give You Everything. The record spins. You become
              sleepy, hypnotized and maybe wake up in a dreamy place like a
              groovy lava lamp.
            </p>

            <p>
              But you can't live there forever; you're in a bubble. So you reach
              out to a special someone. They grab you, jostle you around some,
              and set you free.
            </p>

            <p>
              You're released into the rejuvenating sea, and see beautiful
              things.
            </p>

            <p>
              Refreshed, you return from this trip just as the song marches on.
              You're pulled back into the record spinning. Was it real, was it a
              dream? Things are different now, and that's ok. Everything must
              go. Sometimes I can only give you everything.
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
