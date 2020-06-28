import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const HeroVisuals = ({ className }) => {
  var data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "studio.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920, grayscale: false) {
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
          <h2 className="title">Fur Art</h2>
          <h3 className="subtitle">On the visual side of things</h3>
        </div>
      </div>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(HeroVisuals)`
  &:before {
    opacity: 0.7 !important;
  }
`

export default StyledBackgroundSection
