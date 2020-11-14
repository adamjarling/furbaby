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

const HeroYouTube = () => {
  var data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "topanga.jpg" }) {
        childImageSharp {
          fluid(quality: 50, maxWidth: 1920, grayscale: true) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      className={`hero is-large faded`}
      fluid={data.bgImage.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <div className="hero-body">
        <div className="container">
          <h2 className="title">
            <Title>YouTube</Title>
          </h2>
          <div className="subtitle">
            <Subtitle>Stay hip &amp; follow Furbaby's channel </Subtitle>
          </div>
          <div className="buttons">
            <a
              href="https://www.youtube.com/channel/UCSoulFKYB6zGzHhbV-rkPzg"
              target="_blank"
              className="button is-outlined is-black is-inverted"
            >
              Go to channel
            </a>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

// TODO: Make background darker on mobile below
const StyledCocoa = styled(HeroYouTube)`
  &:before {
    opacity: 0.7 !important;
  }
`

export default StyledCocoa
