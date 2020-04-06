import React from 'react';
import { StaticQuery, graphql } from 'gatsby'

import Product from '../home/Product';

import '../collection-preview/collection-preview.styles.scss';

const getProducts = graphql`
{
  productsList: allContentfulProductsList(sort:{fields: price, order:ASC}) {
    edges {
      node {
        id
        title
        description {
          description
        }
        price
        category
        image {
          fluid(maxHeight: 426) {
            src
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
`

const CollectionPreview = () => (
  <StaticQuery
    query={getProducts}
    render={data => {
      return (
        <section className="py-5">
          <div className="container">
            <h2 className="text-center">Welcome to our store</h2>
            <div className='row'>
              {data.productsList.edges.map(({ node: product }) => {
                return <Product key={product.id} product={product} />
              })}
            </div>
          </div>
        </section>
      )
    }
    }
  />
)

export default CollectionPreview;
