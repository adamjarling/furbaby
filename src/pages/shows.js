import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroShows from "../components/heros/Shows"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const ShowsPage = ({ data }) => (
  <Layout>
    <SEO title="Live Shows - Furbaby and the Tight Spaces" />
    <HeroShows />
    <section className="section">
      <div className="container has-text-centered">
        <article className="is-size-2 is-size-4-mobile">
          <span className="title">JULY 10, 2021</span>
          <br />
          Flatts and Sharpe Music Festival
          <br />
          Sheridan &amp; Columbia
          <br />
          Rogers Park - Chicago, IL USA
          <br />
          4pm set time
        </article>
      </div>
    </section>
  </Layout>
)

export default ShowsPage

export const showsPageQuery = graphql`
  query ShowsPageTemplate {
    nextYear: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "next-year-album-art-v2-sharp.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    socialDistance: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "social-distance-album-art-v1b.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    waiting: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "waiting-album-art.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 80, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
