import React from "react"
import SinglesReachingOut from "../singles/ReachingOut"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"
import ExternalLink from "../ExternalLink"
import VideoResponsive from "../VideoResponsive"
import { reachingOut } from "../../music-release-manifest"
import PrBox from "../PrBox"

const background = css`
  background: black;
  padding: 0.75rem 1.25rem;
  color: white;
  display: inline-block;
`

const HeroReachingOut = ({ className }) => {
  var data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "lake.jpg" }) {
        childImageSharp {
          fluid(quality: 65, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      className={`hero is-medium faded mb-6 ${className}`}
      fluid={data.desktop.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="mb-6">
            <VideoResponsive
              url={`https://www.youtube.com/embed/${reachingOut.youTubeId}`}
              title="Behind The Door by FURBABY"
            />
          </div>

          <h2 className="title">Reaching Out (for Higher Ground)</h2>
          <div className="pb-6">
            <SinglesReachingOut />
          </div>
          <PrBox>
            <h4>For Immediate Release - October 20, 2020</h4>
            <p>
              Official FURBABY video for the new single "Reaching Out (for
              Higher Ground)" out now.
            </p>

            <p>
              This tune asks, what is it about higher places? Why do living
              things climb mountains, build houses on hills, go to the top of
              the Sears tower in Chicago, or climb a tree? What do we get out of
              that vantage point, and why go there?"
            </p>

            <p>
              Armed with a cheap green screen getup, a wicked thrift-store
              fringe and some space videos from NASA's digital archives, Furbaby
              uses these rudimentary tools to see what's up. Outer space seems
              an increasingly decent alternative these days as well.
            </p>

            <p>
              Special thanks to the mad man from Spain,{" "}
              <ExternalLink url="https://www.facebook.com/ivan.t.bachiller">
                Iván Tambac
              </ExternalLink>{" "}
              for laying some awesome drums down on Reaching Out (for Higher
              Ground).
            </p>
          </PrBox>
        </div>
      </div>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(HeroReachingOut)`
  &:before {
    opacity: 0.7 !important;
  }
`

export default StyledBackgroundSection
