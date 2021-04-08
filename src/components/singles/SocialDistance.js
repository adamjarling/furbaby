import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FaSpotify, FaAmazon, FaGooglePlay, FaApple } from "react-icons/fa"
import SinglesPRBox from "../SinglesPRBox"
import ExternalLink from "../../components/ExternalLink"
import { socialDistance } from "../../music-release-manifest"

export const musicSources = [
  {
    label: "Spotify",
    url: socialDistance.spotify,
    icon: <FaSpotify />,
  },
  {
    label: "Apple Music",
    url: socialDistance.appleMusic,
    icon: <FaApple />,
  },
  {
    label: "YouTube Music",
    url: socialDistance.youTubeMusic,
    icon: <FaGooglePlay />,
  },
  {
    label: "Amazon Music",
    url: socialDistance.amazonMusic,
    icon: <FaAmazon />,
  },
]

export default function SinglesSocialDistance() {
  var data = useStaticQuery(graphql`
    query {
      single: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "social-distance-album-art-v1b.jpg" }
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
              For Immediate Release - April 8, 2021
            </h3>
            <p>
              Official FURBABY and the TIGHT SPACES "Social Distance"
              video/single out now.
            </p>
            <p>
              "Social distance"...a term we've heard hundreds of times over the
              past year. How will life be the same or different after a year of
              social distance? What's it like to sit on an airplane, a bus, go
              to a show, see a movie? Will you or I ever think about life
              outside the confines of "social distance" again? Is social
              distance a passing phase or a new way in which human being's
              social behavior has evolved?
            </p>
          </div>
          <div className="column is-one-third">
            <div className="notification content is-dark">
              <h4 className="title">Credits</h4>
              <h5>Artwork</h5>
              <p>
                <ExternalLink url="https://www.instagram.com/caseymurtaugh/?hl=en">
                  Casey Murtaugh
                </ExternalLink>
              </p>
              <h5>Video</h5>
              <ul>
                <li>
                  Filming &amp; Editing:{" "}
                  <ExternalLink url="https://adamarling.com">
                    Adam J. Arling
                  </ExternalLink>
                  and{" "}
                  <ExternalLink url="https://www.instagram.com/caseymurtaugh/?hl=en">
                    Casey Murtaugh
                  </ExternalLink>{" "}
                  and
                </li>
              </ul>

              <h5>Music</h5>
              <ul>
                <li>Drums: Joe Winters</li>
                <li>Keyboards &amp; Vocals: Calvin Marty</li>
                <li>Guitars &amp; Vocals: Bryan Wilkinson</li>
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

              <h5>Lyrics</h5>
              <ul>
                <li>Priscilla Arling</li>
              </ul>
            </div>
          </div>
        </div>
      </SinglesPRBox>
    </>
  )
}
