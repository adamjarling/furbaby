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

const HeroShows = () => {
  var data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "blouse.jpg" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1920, grayscale: false) {
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
            <Title>Shows</Title>
          </h2>
        </div>
      </div>
    </BackgroundImage>
  )
}

// TODO: Make background darker on mobile below
const StyledShows = styled(HeroShows)`
  &:before {
    opacity: 0.7 !important;
  }
`

export default StyledShows
