import React from "react"
import SinglesReachingOut from "../singles/ReachingOut"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"
import VideoResponsive from "../VideoResponsive"
import { reachingOut } from "../../music-release-manifest"

const background = css`
  background: black;
  padding: 0.75rem 1.25rem;
  color: white;
  display: inline-block;
`

const HeroReachingOut = ({ className }) => {
  var data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "lake.jpg" }) {
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
          <h2 className="title">Reaching Out (for Higher Ground)</h2>
          <div className="mb-6">
            <VideoResponsive
              url={`https://www.youtube.com/embed/${reachingOut.youTubeId}`}
              title="Behind The Door by FURBABY"
            />
          </div>

          <div className="pb-6">
            <SinglesReachingOut />
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(HeroReachingOut)`
  &:before {
    opacity: 0.7 !important;
  }
`

export default StyledBackgroundSection
