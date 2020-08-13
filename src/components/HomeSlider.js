import React from "react"
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { useStaticQuery, graphql } from "gatsby"
import HeroInstagram from "./heros/Instagram"
import HeroSpotify from "./heros/Spotify"
import HeroHarperRadio from "./heros/HarperRadio"

// install Swiper components
SwiperCore.use([A11y, Autoplay, Navigation, Pagination, Scrollbar])

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
    <Swiper autoplay slidesPerView={1} centeredSlides={true} navigation>
      <SwiperSlide>
        <HeroSpotify />
      </SwiperSlide>
      <SwiperSlide>
        <HeroHarperRadio />
      </SwiperSlide>
      <SwiperSlide>
        <HeroInstagram />
      </SwiperSlide>
    </Swiper>
  )
}