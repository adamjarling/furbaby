import React from "react"
import SinglesBehindTheDoor from "../singles/BehindTheDoor"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"
import ExternalLink from "../ExternalLink"
import VideoResponsive from "../VideoResponsive"
import { behindTheDoor } from "../../music-release-manifest"
import PrBox from "../PrBox"

const background = css`
  background: black;
  padding: 0.75rem 1.25rem;
  color: white;
  display: inline-block;
`

const HeroBehindTheDoor = ({ className }) => {
  console.log("className", className)
  var data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "art-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 65, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      className={`hero is-medium faded mb-6 ${className}`}
      fluid={data.desktop.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="title">Behind The Door</h2>
          <div className="pb-6">
            <SinglesBehindTheDoor />
          </div>
          <PrBox>
            <h4>For Immediate Release - September 10, 2020</h4>
            <p>
              Chicago's FURBABY releases it's third single, "Behind The Door" on
              September 10, 2020.
            </p>
            <p>
              "This tune kinda jumped out from a droning riff I was messing
              with, while procrastinating learning the crazy complicated end run
              to ABBA's "Lay Your Love On Me" down in Key West, Florida. It's
              amazing what one comes up with when your mind gets lost in space."
            </p>
            <p>
              They song is inspired by a relationship between perception and
              hiding places. Perhaps a poor-man's Doors Jim Morrison reference,
              but nonetheless a psych-rock vantage point from which to approach
              lyrics.
            </p>
            <p>
              "It's cool to hide, but you gotta come out sometime. Fur real."
            </p>
          </PrBox>

          <div className="mt-6">
            <VideoResponsive
              url={`https://www.youtube.com/embed/${behindTheDoor.youTubeId}`}
              title="Behind The Door by FURBABY"
            />
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(HeroBehindTheDoor)`
  &:before {
    opacity: 0.2 !important;
  }
`

export default StyledBackgroundSection
