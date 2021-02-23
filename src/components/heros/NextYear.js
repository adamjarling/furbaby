import React from "react"
import SinglesNextYear from "../singles/NextYear"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"
import ExternalLink from "../ExternalLink"
import VideoResponsive from "../VideoResponsive"
import { nextYear } from "../../music-release-manifest"

const NextYearHero = ({ className }) => {
  var data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "next-year-album-art-v2-sharp.jpg" }) {
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
          <h2 className="title">Next Year</h2>
          <div className="mb-6">
            {/* <VideoResponsive
              url={`https://www.youtube.com/embed/${waiting.youTubeId}`}
              title="Waiting by FURBABY and the Tight Spaces"
            /> */}
          </div>
          <div className="pb-6">
            <SinglesNextYear />
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

// TODO: Make background darker on mobile below
const StyledBackgroundSection = styled(NextYearHero)`
  &:before {
    opacity: 0.3 !important;
  }
`

export default StyledBackgroundSection
