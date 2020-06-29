import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroAbout from "../components/heros/About"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <HeroAbout />
    <section className="section">
      <div className="container content">
        <div className="column is-10 is-offset-1">
          <p>
            <span className="fur-font">FURBABY</span> is a garage rock
            experiment for the 2020s, born in the midst of uncertain times.
            Perhaps a by-product of acknowledging we need to think a little
            differently nowadays, ahem outside THE BOX, try something new,
            re-frame what we thought we knew, and open up our minds to shape the
            world our way, not their way.
          </p>
          <p>
            In past and current lives <span className="fur-font">FURBABY</span>{" "}
            played with <a href="https://urgeoverkill.com/">Urge Overkill</a>,{" "}
            <a href="https://thelastvegas.com">The Last Vegas</a>,{" "}
            <a href="https://www.gethip.com/site/artists/cynics/">The Cynics</a>
            , <a href="https://www.warriorsoulofficial.com/">Warrior Soul</a>,{" "}
            <a href="https://en.wikipedia.org/wiki/The_Dogs_D%27Amour">
              Tyla and Dogs 'D Amour
            </a>
            , <a href="https://www.blackangusrock.com/">Black Angus</a>,{" "}
            <a href="https://www.facebook.com/EarlySound">Early Sound</a>,{" "}
            <a href="https://www.keithscottblues.com/">
              Keith Scott Blues Band
            </a>
            , <a href="">The Electric Blues Junkies</a>, <a href="">ABBARAMA</a>
            , and maybe more?
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
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
  }
`
