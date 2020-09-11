import React from "react"
import SinglesCocoa from "../singles/Cocoa"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"
import ExternalLink from "../ExternalLink"
import VideoResponsive from "../VideoResponsive"
import PrBox from "../PrBox"

const background = css`
  background: black;
  padding: 0.75rem 1.25rem;
  color: white;
  display: inline-block;
`

const HeroCocoa = ({ className }) => {
  console.log("className", className)
  var data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "photo-triangle-wall.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920, grayscale: true) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      className={`hero is-medium mb-6 faded ${className}`}
      fluid={data.desktop.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="title">Cocoa</h2>
          <div className="pb-6">
            <SinglesCocoa />
          </div>
          <PrBox>
            <h4>For Immediate Release - August 4, 2020</h4>
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
              got in a fight, and <strong>Billy Corgan</strong> lost only cause
              it's after the year 2000.{" "}
              <ExternalLink url="https://www.billboard.com/articles/columns/rock/7386036/the-smashing-pumpkins-billy-corgan-gish-at-25-classic-track-by-track-look-back">
                Gish
              </ExternalLink>{" "}
              still rules."
            </p>
          </PrBox>
          <div className="mt-6">
            <VideoResponsive
              url="https://www.youtube.com/embed/5bRFZN4X_3g"
              title="Cocoa by FURBABY"
            />

            <div className="content mt-4 has-text-left-mobile is-size-7-mobile"></div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

// TODO: Make background darker on mobile below
const StyledBackgroundSection = styled(HeroCocoa)`
  &:before {
    opacity: 0.5 !important;
  }
`

export default StyledBackgroundSection
