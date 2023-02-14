import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../templates/layout"
import "../styles/global.scss"

const WorksPage = (props, _data, _pageTitle) => {
  const pageTitle = "works"
  const data = props.data.allWpPost.nodes

  return (
    <Layout pageTitle={pageTitle}>
      {data.map((node) => (
        <Link to={`./${node.slug}`}>{node.title}</Link>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpPost(filter: { language: { code: { eq: EN } } }) {
      nodes {
        title
        slug
        id
        translations {
          id
          slug
          title
        }
      }
    }
  }
`

export default WorksPage

export const Head = () => <title>Adriana Torres Topaga | </title>
