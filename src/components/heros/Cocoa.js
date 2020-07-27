import React from "react"
import BoxedIn from "../BoxedIn"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"

const background = css`
  background: black;
  padding: 0.75rem 1.25rem;
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

const HeroCocoa = ({ className }) => {
  var data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "IMG_2664.JPG" }) {
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
          <h2 className="title">Cocoa</h2>
          <h3 className="subtitle">New single out August 3rd, 2020</h3>
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
