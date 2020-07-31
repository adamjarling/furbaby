import React from "react"
import HerosExplodingFur from "./heros/ExplodingFur"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import HeroCocoa from "./heros/Cocoa"
import HeroInstagram from "./heros/Instagram"

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
      <SwiperSlide>
        <HeroCocoa />
      </SwiperSlide>
      <SwiperSlide>
        <HeroInstagram />
      </SwiperSlide>
    </Swiper>
  )
}
