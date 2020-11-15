import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AlbumsAnimated from "../components/AlbumsAnimated"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container content has-text-centered">
      <div className="py-6">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <p className="pb-6">In the meantime, check out the singles</p>
        <AlbumsAnimated />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
