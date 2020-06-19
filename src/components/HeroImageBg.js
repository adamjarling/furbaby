import React from "react"
import Img from "gatsby-image"

const HeroImageBg = ({
  title = "",
  subtitle = "",
  bgImage,
  size = "is-fullheight",
}) => (
  <section className={`hero has-background is-dark ${size}`}>
    <Img fluid={bgImage} className="hero-background" />
    <div className="hero-body">
      <div className="container">
        <h1>
          <span className="title hero-image-bg-title has-background-primary is-inline-block">
            {title}
          </span>
        </h1>
        <h2>
          <span className="subtitle is-size-3 is-size-5-mobile hero-image-bg-subtitle is-inline-block has-background-primary">
            {subtitle}
          </span>
        </h2>
      </div>
    </div>
  </section>
)

export default HeroImageBg
