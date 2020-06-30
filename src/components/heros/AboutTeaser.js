import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const HeroAboutTeaser = ({ className }) => {
  var data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "fur-bg-dark.jpg" }) {
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
      className={`hero ${className}`}
      fluid={data.desktop.childImageSharp.fluid}
    >
      <div className="hero-body">
        <div className="container">
          <h2 className="title">About the Fur</h2>
          <h3 className="subtitle">What gives?</h3>
          <Link to="/about" className="button">
            Read More
          </Link>
        </div>
      </div>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(HeroAboutTeaser)`
  &:before {
    opacity: 0.8 !important;
  }
`

export default StyledBackgroundSection
