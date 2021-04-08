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
              "Social distance"...now it's a thing. Will we still be talking
              about social distance next year, in 5 years? Will the 21st century
              be forever social distanced? And/or what about people who've
              always felt socially distanced?
            </p>
            <p>
              Just some random thoughts which inspired "Social Distance", the
              single. This particular song has a special place in the furry
              heart of Furbaby as the lyrics were written by my step-mom, penned
              (I believe), in late March 2020 in response to a lot of stuff. I
              told her I'd put some music to it, and the song was dreadful but
              she loved it and made a really cool montage video of some family
              vacation photos from years past. This family collaboration was a
              nice reminder that even in super weird times, friends &amp; family
              can still connect with each other.
            </p>
            <p>
              Fast forward about 12 months and hot damn, the tightest non-band
              in the land delivers another round of tasteful performances.{" "}
              <ExternalLink url="https://www.facebook.com/joseph.winters.75">
                Joe Winters
              </ExternalLink>{" "}
              ruling on drums.{" "}
              <ExternalLink url="http://www.calvinmarty.com/">
                Calvin Marty
              </ExternalLink>{" "}
              pulls out a vintage, trippy organ. And classic{" "}
              <ExternalLink url="https://www.instagram.com/stories/thebryanw/2519994367008475573/">
                Bryan Wilkinson
              </ExternalLink>{" "}
              rythm rock swagger.{" "}
            </p>
            <p>Thanks dudes!</p>
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
