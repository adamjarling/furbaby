import React from "react"
import BoxedIn from "../BoxedIn"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"
import BoxedInVideo from "../videos/BoxedInVideo"
import ExternalLink from "../ExternalLink"
import VideoResponsive from "../VideoResponsive"
import PrBox from "../PrBox"
import SinglesBoxedIn from "../singles/BoxedIn"

const background = css`
  background: black;
  padding: 0.75rem 1.25rem;
  color: white;
  display: inline-block;
`
const Title = styled.span`
  ${background}
`
const Subtitle = styled.h3`
  ${background}
  line-height: 1;
  padding: 0.25rem 0.5rem;
`

const HeroBoxedIn = ({ className }) => {
  console.log("className", className)
  var data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "photo-box-lake.jpg" }) {
        childImageSharp {
          fluid(quality: 60, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      className={`hero is-medium faded ${className}`}
      fluid={data.desktop.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="title">Boxed In</h2>
          <div className="mb-6">
            <VideoResponsive
              url="https://www.youtube.com/embed/piCdPUIlJlw"
              title="Boxed In by FURBABY"
            />
          </div>
          <div className="pb-6">
            <SinglesBoxedIn />
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

// TODO: Make background darker on mobile below
const StyledBackgroundSection = styled(HeroBoxedIn)`
  &:before {
    opacity: 0.3 !important;
  }
`

export default StyledBackgroundSection
