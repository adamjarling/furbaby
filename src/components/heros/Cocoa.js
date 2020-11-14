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
          <h2 className="title">Cocoa</h2>
          <div className="mb-6">
            <VideoResponsive
              url="https://www.youtube.com/embed/5bRFZN4X_3g"
              title="Cocoa by FURBABY"
            />

            <div className="content mt-4 has-text-left-mobile is-size-7-mobile"></div>
          </div>
          <div className="pb-6">
            <SinglesCocoa />
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

// TODO: Make background darker on mobile below
const StyledBackgroundSection = styled(HeroCocoa)`
  &:before {
    opacity: 0.3 !important;
  }
`

export default StyledBackgroundSection
