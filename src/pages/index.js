import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/home/Landing";
import AboutUs from '../components/home/AboutUs';
import Instagram from '../components/home/Instagram';
import Review from '../components/home/Reviews';
import ContactUs from '../components/home/ContactUs';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <Landing />
    </div>
    <AboutUs />
    <div className="images">
      <Instagram />
      <Review />
    </div>
    <div className="container">
      <ContactUs />
    </div>
  </Layout>
)

export default IndexPage
