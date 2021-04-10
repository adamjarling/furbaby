import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroAbout from "../components/heros/About"
import Img from "gatsby-image"
import styled from "styled-components"
import ExternalLink from "../components/ExternalLink"
import { graphql } from 'gatsby'

const Furbaby = styled.span`
  font-family: "Faster One", cursive;
`

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <HeroAbout />
    <section className="section">
      <div className="container content">
        <div className="columns is-desktop">
          <div className="column is-10 is-offset-1-desktop has-text-justified">
            <p>
              <Furbaby>FURBABY</Furbaby> is a garage rock experiment for the
              2020s, born in the midst of uncertain times. Perhaps a by-product
              of acknowledging we need to think a little differently nowadays,
              ahem outside{" "}
              <ExternalLink url="https://www.youtube.com/channel/UCSoulFKYB6zGzHhbV-rkPzg/">
                the box
              </ExternalLink>
              , try something new, re-frame what we thought we knew, and open up
              our minds to shape the world our way, not their way.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column content">
            <h3 className="title">Fur Your Eyes</h3>
            <Img fluid={data.silkscreen.childImageSharp.fluid} />
            <p className="has-text-justified pt-4">
              Custom <Furbaby>FURBABY</Furbaby> screen print experiments coming
              soon...
            </p>
          </div>
          <div className="column content">
            <h3 className="title">Fur Real?</h3>
            <figure>
              <Img fluid={data.boxPic.childImageSharp.fluid} />
              <figcaption>Photo by Casey Murtaugh</figcaption>
            </figure>
            <p className="has-text-justified pt-4">
              Yea for better or worse, figured why not create a soundtrack for
              Chicago's northside beach-front community?
            </p>
            <p className="has-text-justified">
              Every day <Furbaby>FURBABY</Furbaby> takes long walks on the beach
              and sees people from all places, edges and insides of the world;
              families, hippies, kids, skaters, reggae-dudes, all just chillin'.
              What would they be listening to?
            </p>
          </div>
          <div className="column content">
            <h3 className="title">Who?</h3>
            <figure>
              <Img fluid={data.onStage.childImageSharp.fluid} />
              <figcaption>Newcastle, England - Renegade Photography</figcaption>
            </figure>
            <p>
              In past and current lives{" "}
              <span className="fur-font">FURBABY</span> has toured and/or
              recorded with{" "}
              <ExternalLink url="https://thelastvegas.com">
                The Last Vegas
              </ExternalLink>
              ,{" "}
              <ExternalLink url="https://urgeoverkill.com/">
                Urge Overkill
              </ExternalLink>
              ,{" "}
              <ExternalLink url="https://www.gethip.com/site/artists/cynics/">
                The Cynics
              </ExternalLink>
              ,{" "}
              <ExternalLink url="https://www.warriorsoulofficial.com/">
                Warrior Soul
              </ExternalLink>
              ,{" "}
              <ExternalLink url="https://www.abbarama.com/">
                ABBARAMA
              </ExternalLink>
              ,{" "}
              <ExternalLink url="https://en.wikipedia.org/wiki/The_Dogs_D%27Amour">
                Tyla and Dogs 'D Amour
              </ExternalLink>
              ,{" "}
              <ExternalLink url="https://www.blackangusrock.com/">
                Black Angus
              </ExternalLink>
              ,{" "}
              <ExternalLink url="https://www.facebook.com/EarlySound">
                Early Sound
              </ExternalLink>
              ,{" "}
              <ExternalLink url="https://www.keithscottblues.com/">
                Keith Scott Blues Band
              </ExternalLink>
              , <ExternalLink url="#">The Electric Blues Junkies</ExternalLink>,{" "}
              and lots of other jammin with friends. <Furbaby>FURBABY</Furbaby>{" "}
              plays anywhere for wine &amp; cheese, especially Spain.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage

export const AboutPageQuery = graphql`
  query AboutPageTemplate {
    boxPic: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "IMG_2203.jpeg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    silkscreen: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "IMG_2420.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    onStage: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "adam-newcastle-england.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
