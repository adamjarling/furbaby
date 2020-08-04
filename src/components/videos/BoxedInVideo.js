import React from "react"

export default function BoxedInVideo() {
  return (
    <div>
      <figure className="image is-16by9">
        <iframe
          className="has-ratio"
          width="1600"
          height="900"
          src="https://www.youtube.com/embed/piCdPUIlJlw"
          frameBorder="0"
          allowFullScreen
          title="Boxed In by FURBABY"
        ></iframe>
      </figure>
    </div>
  )
}
