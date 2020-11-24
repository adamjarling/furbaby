import React from "react"
import SinglesICanOnlyGiveYouEverything from "../singles/ICanOnlyGiveYouEverything"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"
import ExternalLink from "../ExternalLink"
import VideoResponsive from "../VideoResponsive"
import PrBox from "../PrBox"

const ICanOnlyGiveYouEverythingHero = ({ className }) => {
  console.log("className", className)
  var data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "lava-lamp.jpg" }) {
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
          <h2 className="title">I Can Only Give You Everything</h2>
          <div className="mb-6">
            {/* <VideoResponsive
              url="https://www.youtube.com/embed/5bRFZN4X_3g"
              title="I Can Only Give You Everything by FURBABY"
            /> */}
          </div>
          <div className="pb-6">
            <SinglesICanOnlyGiveYouEverything />
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

// TODO: Make background darker on mobile below
const StyledBackgroundSection = styled(ICanOnlyGiveYouEverythingHero)`
  &:before {
    opacity: 0.3 !important;
  }
`

export default StyledBackgroundSection
