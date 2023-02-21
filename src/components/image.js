import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Image = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {data.allFile.edges.map((edge) => {
        if (edge.node.relativePath == props.src) {
          // return <p>{edge.node.relativePath}</p>
          return <GatsbyImage image={edge.node.childImageSharp.gatsbyImageData} />
        }
      })}
    </>
  )
}

export default Image
