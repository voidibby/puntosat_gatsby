import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import Layout from "../templates/layout"
import Image from "../components/image"
import worksPlaceholder from "../components/worksplaceholder"
import "../styles/global.scss"
import * as css from "../styles/works.module.scss"

const WorksPage = (props, _data, _pageTitle) => {
  const pageTitle = "works"
  const data = props.data.allWpPost.nodes

  return (
    <Layout pageTitle={pageTitle}>
      {/* snnipet to fill the page from WP
      {data.map((node) => (
        <Link to={`./${node.slug}`}>{node.title}</Link>
      ))}
      */}

      <ul className={css.workListWrapper}>
        {worksPlaceholder.map((item) => (
          <li className={css.workListElement} key={item.id}>
            <Link to="/about">
              <div className={css.workListElementThumbnailWrapper}>
                <Image src={item.thumbnailPath}></Image>
              </div>
              <h5>{item.title}</h5>
            </Link>
          </li>
        ))}
      </ul>
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
