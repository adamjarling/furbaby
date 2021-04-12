import React from "react"
import SinglesSocialDistance from "../singles/SocialDistance"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"
import VideoResponsive from "../VideoResponsive"
import { socialDistance } from "../../music-release-manifest"

const SocialDistanceHero = ({ className }) => {
  var data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "social-distance-album-art-v1b.jpg" }) {
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
      className={`hero is-medium mb-6 faded ${className}`}
      fluid={data.desktop.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="title">Social Distance</h2>
          <div className="mb-6">
            <VideoResponsive
              url={`https://www.youtube.com/embed/${socialDistance.youTubeId}`}
              title="Waiting by FURBABY and the Tight Spaces"
            />
          </div>
          <div className="pb-6">
            <SinglesSocialDistance />
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

// TODO: Make background darker on mobile below
const StyledBackgroundSection = styled(SocialDistanceHero)`
  &:before {
    opacity: 0.3 !important;
  }
`

export default StyledBackgroundSection
