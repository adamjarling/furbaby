import React from "react"
import BoxedIn from "../BoxedIn"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"
import BoxedInVideo from "../videos/BoxedInVideo"
import ExternalLink from "../ExternalLink"

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
          {/* <h2 className="title">
            <Title>Boxed In</Title>
          </h2>
          <Subtitle className="subtitle is-size-6-mobile">
            New single out June 30th
          </Subtitle> */}
          <h2 className="title">Boxed In</h2>
          <div className="pb-6">
            <BoxedIn />
          </div>
          <div className="mt-6">
            <h2 className="title">Official Video</h2>
            <BoxedInVideo />
            <div className="content mt-4 has-text-left-mobile is-size-7-mobile">
              <p>
                Featuring Denmark's{" "}
                <ExternalLink url="https://www.facebook.com/ratshredder">
                  Dennis "El Guapo" Post
                </ExternalLink>{" "}
                from Warrior Soul/City Kids ripping a proper solo.
              </p>
              <p>Thanks dude!</p>
            </div>
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
