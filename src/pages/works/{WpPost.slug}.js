import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../../templates/layout"

const WorkPage = (props, _data) => {
  const data = props.data.allWpPost.nodes[0]
  return (
    <Layout pageTitle="works">
      <h1>{data.title}</h1>
      <Link to={`./`}>{data.title}</Link>
      <Link to={`../${data.translations[0].slug}`}>{data.translations[0].title}</Link>
      <Link to={`../${data.translations[1].slug}`}>{data.translations[1].title}</Link>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String) {
    allWpPost(filter: { slug: { eq: $slug } }) {
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
export default WorkPage
