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

const HeroCocoa = () => {
  var data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "photo-triangle-wall.jpg" }) {
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
            <Title>Cocoa</Title>
          </h2>
          <h3 className="subtitle">
            <Subtitle>New single out August 4th, 2020</Subtitle>
          </h3>
          <div className="buttons">
            <a
              href="https://youtu.be/ZDVW2WS5nUc"
              target="_blank"
              className="button is-outlined is-black is-inverted"
            >
              Watch Video
            </a>
            <Link className="button" to="/music">
              More Info
            </Link>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

// TODO: Make background darker on mobile below
const StyledCocoa = styled(HeroCocoa)`
  &:before {
    opacity: 0.7 !important;
  }
`

export default StyledCocoa
