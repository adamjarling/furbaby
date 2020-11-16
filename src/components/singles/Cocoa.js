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
import MusicButton from "../MusicButton"
import MusicButtonsWrapper from "../MusicButtonsWrapper"
import SinglesPRBox from "../SinglesPRBox"
import ExternalLink from "../../components/ExternalLink"

export const musicSources = [
  {
    label: "Spotify",
    url:
      "https://open.spotify.com/album/2BUiOdFxCOYRRt2sWUj2Bk?si=PpTgsQeeSeOrE8HoVpL2cg",
    icon: <FaSpotify />,
  },
  {
    label: "Apple Music",
    url: "https://music.apple.com/us/album/cocoa-single/1525576097",
    icon: <FaApple />,
  },
  {
    label: "YouTube Music",
    url:
      "https://play.google.com/store/music/album/Furbaby_Cocoa?id=Bxfjxlvr7uqh5ismdtyo5ftrp2e",
    icon: <FaGooglePlay />,
  },
  {
    label: "Amazon Music",
    url: "https://www.amazon.com/dp/B08F4FLD1V",
    icon: <FaAmazon />,
  },
]

export default function SinglesCocoa() {
  var data = useStaticQuery(graphql`
    query {
      single: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "cocoa-single-cover.jpg" }
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
              For Immediate Release - August 4, 2020
            </h3>
            <p>
              Chicago's FURBABY releases it's second single, "Cocoa" on August
              4, 2020.
            </p>
            <p>
              A fuzzed-out romp through Chicago's northside{" "}
              <ExternalLink url="https://en.wikipedia.org/wiki/Rogers_Park,_Chicago">
                Rogers Park neighborhood
              </ExternalLink>{" "}
              and beachfront, Cocoa reflects on the world which people share
              with others.
            </p>
            <p>
              "There's this stretch of the Loyola beach where benches connect
              into{" "}
              <ExternalLink url="http://loyolaphoenix.com/2019/09/artists-of-the-wall-27-years-of-community/">
                one giant, flowing, mural painted annually by community artists
              </ExternalLink>
              . It's a peak inside the local's heads, their lives, and what they
              feel comfortable or inspired to share with their neighbors."
            </p>
            <p>
              "Whatever it is, it creates some kind of chill zone where people
              of all ages, races, and genders blend together at the beach and
              the diversity shines when amplified. It's like, 'why isnt it like
              this all the time?'"
            </p>
            <p>
              Tonally the song cranks up{" "}
              <a href="https://www.daredevilpedals.com/" target="_blank">
                Daredevil Pedal's fuzz boxes
              </a>{" "}
              to 11, and features Chicago's{" "}
              <ExternalLink url="https://www.instagram.com/lifebygoose/">
                Andrew "Goose" Giese
              </ExternalLink>{" "}
              playing some mean drums.
            </p>
            <p>
              Furbaby comments, "I kinda wanted Cocoa's music to sound like{" "}
              <ExternalLink url="https://ramones.com/">
                The Ramones
              </ExternalLink>{" "}
              and{" "}
              <ExternalLink url="https://www.smashingpumpkins.com/">
                Smashing Pumpkins
              </ExternalLink>{" "}
              got in a fight, and Billy Corgan lost only cause it's after the
              year 2000.{" "}
              <ExternalLink url="https://www.billboard.com/articles/columns/rock/7386036/the-smashing-pumpkins-billy-corgan-gish-at-25-classic-track-by-track-look-back">
                Gish
              </ExternalLink>{" "}
              still rules."
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
                <li>Artist Wall Mural: Cole ...</li>
              </ul>

              <h5>Music</h5>
              <ul>
                <li>Music &amp; lyrics, guitars/bass/vocals: FURBABY</li>
                <li>
                  Drums:{" "}
                  <ExternalLink url="https://www.instagram.com/lifebygoose/">
                    Andrew "Goose" Giese
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
