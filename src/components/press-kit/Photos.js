import React from "react"
import Img from "gatsby-image"
import DownloadPhoto from "../../components/DownloadPhoto"
import { useStaticQuery, graphql } from "gatsby"

export default function PressKitPhotos() {
  var data = useStaticQuery(graphql`
    query {
      nextYear: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "next-year-video-cover.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 70, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      polkaDot: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "polka-dot-lava-furbaby.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 80, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      promoPhotoBox: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "photo-box-lake.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 80, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      triangleWall: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "photo-triangle-wall.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 80, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <h2 className="title">Photos</h2>
      <div className="columns">
        <div className="column is-one-quarter">
          <Img fluid={data.polkaDot.childImageSharp.fluid} />
          <DownloadPhoto fileStr={data.polkaDot.childImageSharp.fluid.src} />
        </div>

        <div className="column is-one-quarter">
          <Img fluid={data.nextYear.childImageSharp.fluid} />
          <DownloadPhoto fileStr={data.nextYear.childImageSharp.fluid.src} />
        </div>

        <div className="column is-one-quarter">
          <Img fluid={data.promoPhotoBox.childImageSharp.fluid} />
          <DownloadPhoto
            fileStr={data.promoPhotoBox.childImageSharp.fluid.src}
          />
        </div>
        <div className="column is-one-quarter">
          <Img fluid={data.triangleWall.childImageSharp.fluid} />
          <DownloadPhoto
            fileStr={data.triangleWall.childImageSharp.fluid.src}
          />
        </div>
      </div>
    </div>
  )
}
