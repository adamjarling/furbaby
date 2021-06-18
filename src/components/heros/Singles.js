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
    padding: 0.5rem 1rem;
  }
`
const Subtitle = styled.span`
  ${background}
  line-height: 1;
  padding: 0.25rem 0.5rem;
`

const HeroSingles = () => {
  var data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "post-pandemic-legs.png" }) {
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
            <Title>Singles</Title>
          </h2>
          <p className="subtitle">
            <Subtitle>A new single every month...fur u</Subtitle>
          </p>
        </div>
      </div>
    </BackgroundImage>
  )
}

// TODO: Make background darker on mobile below
const StyledSingles = styled(HeroSingles)`
  &:before {
    opacity: 0.7 !important;
  }
`

export default StyledSingles
