import React from 'react';
import Product from './Product';
import { StaticQuery, graphql } from 'gatsby'

const getProducts = graphql`
{
  products: allContentfulHandiProduct {
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

function Products() {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <h2 className="text-center">Featured Products</h2>
              <div className='row'>
                {data.products.edges.map(({ node: product }) => {
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
}

export default Products;
