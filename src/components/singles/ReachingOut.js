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
import { reachingOut } from "../../music-release-manifest"
import ExternalLink from "../../components/ExternalLink"
import SinglesPRBox from "../SinglesPRBox"

export const musicSources = [
  {
    label: "Spotify",
    url: reachingOut.spotify,
    icon: <FaSpotify />,
  },
  {
    label: "Apple Music",
    url: reachingOut.appleMusic,
    icon: <FaApple />,
  },
  {
    label: "YouTube Music",
    url: reachingOut.youTubeMusic,
    icon: <FaGooglePlay />,
  },
  {
    label: "Amazon Music",
    url: reachingOut.amazonMusic,
    icon: <FaAmazon />,
  },
]

export default function SinglesReachingOut() {
  var data = useStaticQuery(graphql`
    query {
      reachingOut: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "reaching-out-album-art-v2.jpg" }
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
          <Img
            fluid={data.reachingOut.childImageSharp.fluid}
            className="has-shadow"
          />
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
            <h3 className="title has-text-dark">
              Fur Immediate Release - October 20, 2020
            </h3>
            <p>
              Official FURBABY video for the new single "Reaching Out (for
              Higher Ground)" out now.
            </p>

            <p>
              This tune asks, what is it about higher places? Why do living
              things climb mountains, build houses on hills, go to the top of
              the Sears tower in Chicago, or climb a tree? What do we get out of
              that vantage point, and why go there?"
            </p>

            <p>
              Armed with a cheap green screen getup, a wicked thrift-store
              fringe and some space videos from NASA's digital archives, Furbaby
              uses these rudimentary tools to see what's up. Outer space seems
              an increasingly decent alternative these days as well.
            </p>

            <p>
              Special thanks to the mad man from Spain,{" "}
              <ExternalLink url="https://www.facebook.com/ivan.t.bachiller">
                Iván Tambac
              </ExternalLink>{" "}
              for laying some awesome drums down on Reaching Out (for Higher
              Ground).
            </p>
          </div>
          <div className="column is-one-third ">
            <div className="notification content is-dark">
              <h4 className="title">Credits</h4>
              <h5>Video</h5>
              <ul>
                <li>
                  Filming:{" "}
                  <ExternalLink url="https://www.instagram.com/caseymurtaugh/?hl=en">
                    Casey Murtaugh
                  </ExternalLink>
                </li>
                <li>
                  Editing:{" "}
                  <ExternalLink url="https://adamarling.com">
                    Adam J. Arling
                  </ExternalLink>
                </li>
              </ul>
              <h5>Music</h5>
              <ul>
                <li>Music &amp; lyrics, guitars/bass/vocals: FURBABY</li>
                <li>
                  Drums:{" "}
                  <ExternalLink url="https://www.facebook.com/ivan.t.bachiller">
                    Iván Tambac
                  </ExternalLink>{" "}
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
