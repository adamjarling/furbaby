import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import styled from "styled-components"
import Card from "../../components/Card"
import imgGravel from "../../images/news/gravelroad.jpg"
import imgNwi from "../../images/news/nwi-newspaper.jpg"

const Title = styled.span`
  font-size: 7rem;

  @media only screen and (max-width: 600px) {
    font-size: 3rem;
  }
`

const NewsPage = ({ data }) => (
  <Layout>
    <SEO title="News" />
    <div className="hero-body">
      <div className="container">
        <h2 className="title">
          <Title>News</Title>
        </h2>
      </div>
    </div>

    <section className="section">
      <div className="container">
        <h1 className="title is-sr-only">News</h1>

        <div className="columns">
          <div className="column">
            <div className="card has-text-black">
              <div className="card-image is-4x3">
                <figure className="image">
                  <img src={imgGravel} />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">asdfasd</div>
              </div>
              <footer className="card-footer is-family-secondary fur-card-footer">
                <a href={`#`} target="_blank" className="card-footer-item">
                  Check it out
                </a>
              </footer>
            </div>
          </div>
          <div className="column">
            <div className="card has-text-black">
              <div className="card-image is-4x3">
                <figure className="image">
                  <img src={imgNwi} />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">asdfasd</div>
              </div>
              <footer className="card-footer is-family-secondary fur-card-footer">
                <a href={`#`} target="_blank" className="card-footer-item">
                  Check it out
                </a>
              </footer>
            </div>
          </div>
          <div className="column">
            <div className="card has-text-black">
              <div className="card-image is-4x3">
                <figure className="image">
                  <img src={imgGravel} />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">asdfasd</div>
              </div>
              <footer className="card-footer is-family-secondary fur-card-footer">
                <a href={`#`} target="_blank" className="card-footer-item">
                  Check it out
                </a>
              </footer>
            </div>
          </div>
          {/* <div className="column">
            <Card
              image={raceTech}
              name="Ruha Benjamin's book Race After Technology"
              url="https://www.ruhabenjamin.com/"
            />
          </div>
          <div className="column">
            <Card
              image={nebula}
              name="Nebula - Get out of your mind!"
              url="https://www.heavypsychsounds.com/bands/nebula.htm"
            />
          </div> */}
        </div>
      </div>
    </section>
  </Layout>
)

export default NewsPage

export const newsPageQuery = graphql`
  query NewsPageTemplate {
    boxedIn: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "FURBABY-boxed-in-cover-art-no-outline.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    promoPhoto: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "promo-photo-bw.PNG" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100, grayscale: false) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
