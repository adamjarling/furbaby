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

const HeroBehindTheDoorTeaser = () => {
  var data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "behind-the-door-cover-art-v2.jpg" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 800) {
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
      style={{ backgroundPosition: "bottom", textAlign: "right" }}
    >
      <div className="hero-body">
        <div className="container">
          <h2 className="title">
            <Title>Behind The Door</Title>
          </h2>
          <div className="subtitle">
            <Subtitle>New Single September 10, 2020</Subtitle>
          </div>
          <div className="buttons is-right">
            <Link
              to="/videos"
              className="button is-outlined is-black is-inverted"
            >
              Watch Teaser Video
            </Link>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

const StyledBehindTheDoorTeaser = styled(HeroBehindTheDoorTeaser)`
  &::before {
    opacity: 0.7 !important;
  }
`

export default StyledBehindTheDoorTeaser
