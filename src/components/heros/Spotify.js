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

const HeroSpotify = () => {
  var data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "cocoa-vid-thumb3.jpg" }) {
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
            <Title>Fur U on Spotify</Title>
          </h2>
          <div className="subtitle">
            <Subtitle>New single "Cocoa" now on Spotify</Subtitle>
          </div>
          <div className="buttons">
            <a
              href="https://open.spotify.com/artist/1hpsUJGJST9u6Qf8KWn8CR?si=3Z6sOxHvTUG9P-lqLf3Gvg"
              target="_blank"
              className="button is-black"
            >
              <span className="icon">
                <FaSpotify />
              </span>
              <span>Go to Spotify</span>
            </a>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

// TODO: Make background darker on mobile below
const StyledCocoa = styled(HeroSpotify)`
  &:before {
    opacity: 0.7 !important;
  }
`

export default StyledCocoa
