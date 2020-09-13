import React from "react"
import BoxedIn from "../BoxedIn"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"
import BoxedInVideo from "../videos/BoxedInVideo"
import ExternalLink from "../ExternalLink"
import VideoResponsive from "../VideoResponsive"
import PrBox from "../PrBox"

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
      desktop: file(relativePath: { eq: "IMG_2205.jpeg" }) {
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
          <PrBox>
            <h4>For Immediate Release - June 30, 2020</h4>
            <p>
              Chicago's FURBABY releases it's debut single, "Boxed In" on June
              30, 2020.
            </p>
            <p>
              Featuring Denmark's{" "}
              <ExternalLink url="https://www.facebook.com/ratshredder">
                Dennis "El Guapo" Post
              </ExternalLink>{" "}
              from Warrior Soul/City Kids ripping a proper solo. Thanks dude!
            </p>
            <p>
              Furbaby quotes, "I can't really sing, but I gotta a lotta riffs, a
              lotta time on my hands, and this really cool box. The
              possibilities are endless."
            </p>
            <p>
              Check back in to catch a new single &amp; video every month from
              here til the well runs dry.
            </p>
          </PrBox>
          <div className="mt-6">
            <VideoResponsive
              url="https://www.youtube.com/embed/piCdPUIlJlw"
              title="Boxed In by FURBABY"
            />

            <div className="content mt-4 has-text-left-mobile is-size-7-mobile"></div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

// TODO: Make background darker on mobile below
const StyledBackgroundSection = styled(HeroBoxedIn)`
  &:before {
    opacity: 0.5 !important;
  }
`

export default StyledBackgroundSection
