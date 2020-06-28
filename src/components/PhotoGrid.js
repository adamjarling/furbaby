import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const PhotoGrid = () => {
  var data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { name: { in: ["IMG_2203", "fur-bg", "IMG_2205"] } }
      ) {
        totalCount
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  var gridPhotos = data.images.edges.map(edge => edge.node)

  console.log("gridPhotos", gridPhotos)

  return (
    <div>
      <div>
        <Img fluid={gridPhotos[0].childImageSharp.fluid} />
        <Img fluid={gridPhotos[1].childImageSharp.fluid} />
        <Img fluid={gridPhotos[2].childImageSharp.fluid} />
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-12 is-vertical">
          <div className="tile">
            <Img fluid={gridPhotos[0].childImageSharp.fluid} />
          </div>

          <div className="tile is-parent">
            <div className="tile is-child">
              <Img fluid={gridPhotos[1].childImageSharp.fluid} />
            </div>
            <div className="tile is-parent">
              <Img fluid={gridPhotos[2].childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoGrid
