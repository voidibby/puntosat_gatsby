import * as React from "react"
import { graphql } from "gatsby"
import Image from "../components/image"

const Test = () => {
  const item = [
    {
      id: "00",
      path: `thumbnail00.jpg`,
    },
  ]
  // console.log(data.allFile.edges[0].node)
  // props.data.allFile.edges.map((edge) => console.log(edge.node.relativePath))
  return (
    <>
      <Image src={item[0].path}></Image>
    </>
  )
}
/*
export const query = graphql`
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
`
*/
export default Test
