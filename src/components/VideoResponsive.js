import React from "react"

export default function VideoResponsive({ url, title }) {
  return (
    <div>
      <figure className="image is-16by9">
        <iframe
          className="has-ratio"
          width="1600"
          height="900"
          src={url}
          frameBorder="0"
          allowFullScreen
          title={title}
        ></iframe>
      </figure>
    </div>
  )
}
