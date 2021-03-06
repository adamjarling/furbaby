import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { css } from "styled-components"

const background = css`
  background: rgba(0, 0, 0, 0.6);
  padding: 0.5rem 2rem;
  color: white;
  display: inline-block;
`
const Title = styled.span`
  ${background}
  font-size: 7rem;

  @media only screen and (max-width: 600px) {
    font-size: 3rem;
  }
`
const Subtitle = styled.span`
  ${background}
  line-height: 1;
  padding: 0.25rem 0.5rem;
`

const HeroPressKit = () => {
  var data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "banner-lying-on-beach.jpg" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1920, grayscale: true) {
            ...GatsbyImageSharpFluid_withWebp
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
      backgroundColor={`#040e18`}
    >
      <div className="hero-body">
        <div className="container">
          <h2 className="title">
            <Title>Press Kit</Title>
          </h2>
        </div>
      </div>
    </BackgroundImage>
  )
}

// TODO: Make background darker on mobile below
const StyledCocoa = styled(HeroPressKit)`
  &:before {
    opacity: 0.7 !important;
  }
`

export default StyledCocoa
