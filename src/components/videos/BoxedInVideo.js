import React from "react"
import ExternalLink from "../ExternalLink"

export default function BoxedInVideo() {
  return (
    <div>
      <figure className="image is-16by9">
        <iframe
          className="has-ratio"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/piCdPUIlJlw"
          frameBorder="0"
          allowFullScreen
          title="Boxed In by FURBABY"
        ></iframe>
      </figure>
      <div className="content mt-4 has-text-left-mobile is-size-7-mobile">
        <p>
          Featuring Denmark's{" "}
          <ExternalLink url="https://www.facebook.com/ratshredder">
            Dennis "El Guapo" Post
          </ExternalLink>{" "}
          from Warrior Soul/City Kids ripping a proper solo.
        </p>
        <p>Thanks dude!</p>
      </div>
    </div>
    //    https://www.youtube.com/embed/JfPbeTd2PW0
  )
}
