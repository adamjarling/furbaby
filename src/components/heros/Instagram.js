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

const HeroInstagram = () => {
  var data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "IMG_2669.jpg" }) {
        childImageSharp {
          fluid(quality: 60, maxWidth: 1920) {
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
            <Title>Instagram</Title>
          </h2>
          <div className="subtitle">
            <Subtitle>Follow the Fur @furbaby_rocks</Subtitle>
          </div>
          <div className="buttons">
            <a
              href="https://www.instagram.com/furbaby_rocks/"
              target="_blank"
              className="button is-black"
            >
              Go to Instagram
            </a>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

// TODO: Make background darker on mobile below
const StyledCocoa = styled(HeroInstagram)`
  &:before {
    opacity: 0.7 !important;
  }
`

export default StyledCocoa
