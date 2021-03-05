import React from "react"
import ExternalLink from "../ExternalLink"
import nwiPhoto from "../../images/news/nwi-newspaper.jpg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const NewsImage = styled.div`
  height: 256px;
  width: 256px;
`

export default function Press2021NwiTimes() {
  var data = useStaticQuery(graphql`
    query {
      nwiPhoto: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "news/nwi-newspaper.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log("data", data)
  return (
    <article className="media">
      <figure className="media-left">
        {/* <NewsImage src={nwiPhoto} /> */}
        <BackgroundImage
          fluid={data.nwiPhoto.childImageSharp.fluid}
          Tag={NewsImage}
        />
      </figure>

      <div className="media-content">
        <div className="content">
          <h2 className="title is-size-3">Next Year - Out Now!</h2>
          <p>
            <strong>Northwest Indiana Times</strong>{" "}
            <small>
              <a href="http://www.nwitimes.com">www.nwitimes.com</a>
            </small>{" "}
            <small>31m</small>
            <br />
          </p>
          <p>
            "Northwest Indiana native Joe Winters, drummer and co-founder of The
            Steepwater Band, contacted me to share the news about a cool new
            side project he has been recording in recent weeks during
            Steepwater's downtime. The project is called Furbaby & The Tight
            Spaces and the latest single, "Waiting," was released this week..."
          </p>

          <p>
            <ExternalLink url="https://www.nwitimes.com/entertainment/music/covid-inspires-new-music-video-furbaby-project/article_be181210-863b-5625-a234-f25aff463847.html">
              Read full article
            </ExternalLink>
          </p>
        </div>
      </div>
    </article>
  )
}
