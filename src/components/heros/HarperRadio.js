import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { css } from "styled-components"
import { FaSpotify } from "react-icons/fa"

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

const HeroHarperRadio = () => {
  var data = useStaticQuery(graphql`
    query {
      bgImage: file(
        relativePath: { eq: "boxed-in-harper-college-radio-youtube-thumb.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1920) {
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
            <Title>College Radio</Title>
          </h2>
          <div className="subtitle">
            <Subtitle>
              "Boxed In" gets its first spin on 88.3FM - Harper College Radio
              Chicago
            </Subtitle>
          </div>
          <div className="buttons">
            <a
              href="https://youtu.be/FoAahoFIfeg"
              target="_blank"
              className="button is-black"
            >
              <span className="icon">
                <FaSpotify />
              </span>
              <span>Watch video</span>
            </a>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

// TODO: Make background darker on mobile below
const StyledHarperRadio = styled(HeroHarperRadio)`
  &:before {
    opacity: 0.7 !important;
  }
`

export default StyledHarperRadio
