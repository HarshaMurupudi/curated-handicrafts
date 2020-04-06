import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CollectionPreview from "../components/collection-preview/collection-preview.component";


const StorePage = () => (
  <Layout>
    <SEO title="Curatedhandicrafts Store" />
    <CollectionPreview />
  </Layout>
)

export default StorePage 
