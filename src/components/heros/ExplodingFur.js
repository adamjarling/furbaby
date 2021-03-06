import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import gif from "../../images/exploding-star.gif"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const ExplodingFur = ({ className }) => {
  var data = useStaticQuery(graphql`
    query {
      bgImage: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "IMG_2401.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      className={`hero is-medium faded`}
      fluid={data.bgImage.childImageSharp.fluid}
    >
      <div className="hero-body">
        <div className="container">
          <h1 className="is-sr-only">
            <span className="title hero-image-bg-title is-inline-block">
              Furbaby garage rock
            </span>
          </h1>

          <img
            src={gif}
            className="is-pulled-right mt-6 explosion"
            alt="Furbaby in a box"
          />
        </div>
      </div>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(ExplodingFur)`
  border-bottom: 20px solid #000;
  &:before {
    opacity: 1 !important;
  }
`

export default StyledBackgroundSection
