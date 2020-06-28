import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const HeroAbout = ({ className }) => {
  var data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "IMG_2204.jpeg" }) {
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
      className={`hero is-medium faded ${className}`}
      fluid={data.desktop.childImageSharp.fluid}
    >
      <div className="hero-body">
        <div className="container">
          <h2 className="title">About</h2>
          <h3 className="subtitle">asdfas asdfasdf asdfasdf</h3>
        </div>
      </div>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(HeroAbout)`
  &:before {
    opacity: 0.4 !important;
  }
`

export default StyledBackgroundSection
