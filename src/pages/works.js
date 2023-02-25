import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import Layout from "../templates/layout"
import Image from "../components/image"
import "../styles/global.scss"
import * as css from "../styles/works.module.scss"

const WorksPage = (props) => {
  const pageTitle = "works"
  const wpWorks = props.data.allWpPost.nodes
  const localWorks = props.data.allPost.nodes

  return (
    <Layout pageTitle={pageTitle}>
      {/* snnipet to fill the page from WP
      {data.map((node) => (
        <Link to={`./${node.slug}`}>{node.title}</Link>
      ))}
      */}

      <ul className={css.workListWrapper}>
        {localWorks.map((work) => (
          <li key={work.id} className={css.workListElement}>
            <Link to={work.slug}>
              <div className={css.workListElementThumbnailWrapper}>
                <Image
                  src={work.thumbnailPath}
                  className={css.workListElementThumbnailContent}
                  imgClassName={css.workListElementThumbnailImg}
                ></Image>
              </div>
              <h5>{work.title}</h5>
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
    allPost {
      nodes {
        id
        title
        slug
        thumbnailPath
        images
      }
    }
  }
`

export default WorksPage

export const Head = () => <title>Adriana Torres Topaga | </title>
