import React from "react"
import HerosExplodingFur from "./heros/ExplodingFur"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export default function HomeSlider() {
  var data = useStaticQuery(graphql`
    query {
      bgImage: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "IMG_2204.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 70) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Swiper autoPlay={true} slidesPerView={1} centeredSlides={true} navigation>
      {/* <SwiperSlide>
        <HerosExplodingFur />
      </SwiperSlide> */}
      <SwiperSlide>
        <figure className="image is-16by9">
          <iframe
            className="has-ratio"
            width="1024"
            height="576"
            src="https://www.youtube.com/embed/4XSiZITTc7o"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure className="image is-16by9">
          <iframe
            className="has-ratio"
            width="1024"
            height="576"
            src="https://www.youtube.com/embed/piCdPUIlJlw"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <BackgroundImage
          Tag="section"
          className={`hero is-large`}
          fluid={data.bgImage.childImageSharp.fluid}
        >
          <div className="hero-body">
            <div className="container"></div>
          </div>
        </BackgroundImage>
      </SwiperSlide>
    </Swiper>
  )
}
