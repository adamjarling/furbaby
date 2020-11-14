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
      desktop: file(relativePath: { eq: "behind-the-door-cover-art-v2.jpg" }) {
        childImageSharp {
          fluid(quality: 50, maxWidth: 1600, grayscale: false) {
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
          <div className="mb-6">
            <VideoResponsive
              url={`https://www.youtube.com/embed/${behindTheDoor.youTubeId}`}
              title="Behind The Door by FURBABY"
            />
          </div>
          <div className="pb-6">
            <SinglesBehindTheDoor />
          </div>
          <PrBox></PrBox>
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
