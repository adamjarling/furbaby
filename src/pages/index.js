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
    <Image />
    <section className="section">
      <div className="container has-text-centered">
        <h2
          className="subtitle has-text-white is-uppercase"
          style={{ letterSpacing: "1rem" }}
        >
          Coming soon...
        </h2>
        <figure>
          <audio controls src={mp3}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
      </div>
    </section>
  </Layout>
)

export default IndexPage
