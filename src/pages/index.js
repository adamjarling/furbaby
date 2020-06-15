import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import mp3 from "../boxed-in-sample.mp3"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* <section className="section">
      <h1 className="title is-primary">Furbaby</h1>
    </section> */}

    <figure className="image is-16by9">
      <iframe
        className="has-ratio"
        src="https://docs.google.com/presentation/d/e/2PACX-1vQKsHuTtpD9LmeC1GgXfRLwH6gAXPN5dzu1rRmGZboEK7dIetJdYBvB8WeUITFHf2rl6ZlwqbkVrTOY/embed?start=true&loop=true&delayms=3000"
        frameBorder="0"
        width="1440"
        height="839"
        allowFullScreen={true}
      ></iframe>
    </figure>

    <section
      className="section has-text-white has-text-centered"
      style={{ fontFamily: "monospace" }}
    >
      <div>
        <figure>
          <audio controls src={mp3}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
        <p>New trashy garage single "Boxed In" coming soon...fur u.</p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
