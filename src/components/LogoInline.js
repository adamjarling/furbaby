import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function LogoInline() {
  var data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "furbaby-handwriting-logo-white.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 500, grayscale: false) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.logo.childImageSharp.fluid}
      style={{ display: "inline-block", width: "120px" }}
    />
  )
}
