import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { css } from "styled-components"

const background = css`
  background: rgba(0, 0, 0, 0.6);
  padding: 0.5rem 1rem;
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

const HeroSplash1 = () => {
  var data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "photo-triangle-wall.jpg" }) {
        childImageSharp {
          fluid(quality: 60, maxWidth: 1920, grayscale: true) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      className={`hero is-fullheight faded`}
      fluid={data.bgImage.childImageSharp.fluid}
      backgroundColor={`#040e18`}
      style={{ backgroundPosition: "center bottom" }}
    ></BackgroundImage>
  )
}

// TODO: Why doesn't this work?
const StyledSplash1 = styled(HeroSplash1)``

export default StyledSplash1
