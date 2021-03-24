import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: {eq: "landing-women.jpg"}){
        childImageSharp{
          fluid{
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <Img className="img-fluid order-0 order-md-1 col-12 col-md-7" fluid={data.img.childImageSharp.fluid} />
}

export default Image
