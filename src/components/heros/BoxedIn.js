import React from "react"
import BoxedIn from "../BoxedIn"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BoxedInVideo from "../videos/BoxedInVideo"

const HeroBoxedIn = ({ className }) => {
  console.log("className", className)
  var data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "IMG_2366.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      className={`hero is-medium faded ${className}`}
      fluid={data.desktop.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="title">Boxed In</h2>
          <h3 className="subtitle">New single out now</h3>
          <div className="pb-6">
            <BoxedIn />
          </div>
          <div className="mt-6">
            <h2 className="title">Official Video</h2>
            <BoxedInVideo />
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

// TODO: Make background darker on mobile below
const StyledBackgroundSection = styled(HeroBoxedIn)`
  &:before {
    opacity: 0.7 !important;
  }
`

export default StyledBackgroundSection
