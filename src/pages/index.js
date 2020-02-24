import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/home/Landing";
import AboutUs from '../components/home/AboutUs';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <Landing />
    </div>
    <AboutUs />
  </Layout >
)

export default IndexPage
