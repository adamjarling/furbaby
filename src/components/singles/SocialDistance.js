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
              "Social distance"...now is some kind of thing. Will we still be
              talking about social distance next year? In 5 years? Will the 21st
              century be forever social distanced? Will you ever feel the same
              way about being sweat upon say at a punk rock show? Or to flip the
              coin, consider us who now feel more comfortable, more empowered
              with some distance.{" "}
            </p>

            <p>How does this whole thing unwind? </p>

            <p>
              Just some random thoughts which inspired "Social Distance", the
              latest F&TS single release. This particular song is a bit
              full-circle as the lyrics were written by my step-mom, penned in
              late March 2020, probably in response to a lot of stuff maybe past
              and present. I told her I'd put some music to it, and the initial
              music attempt was pretty rough but she approved, and put together
              a really cool montage video of some family vacation photos from
              years past. This collaboration in tricky times was a gentle
              reminder that despite whatever conditions life throws at us all,
              friends & family have avenues to connect.
            </p>

            <p>
              The song sat uncomfortably with me however, and provided a dose of
              inspiration to get better and making demos...and thus began the
              first attempt with "Boxed In", and every single/experiment since
              with some musician friends along the way.{" "}
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
              pulls out a vintage, trippy organ delivering haunting and
              infectious counter melodies. And classic{" "}
              <ExternalLink url="https://www.instagram.com/stories/thebryanw/2519994367008475573/">
                Bryan Wilkinson
              </ExternalLink>{" "}
              bad-ass rhythm rock swagger.
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
