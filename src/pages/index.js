import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/home/Landing";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <Landing />
    </div>
  </Layout>
)

export default IndexPage
