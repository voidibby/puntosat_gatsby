import * as React from "react"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../templates/layout"
import * as css from "../styles/header.module.scss"

const HomePage = () => {
  return (
    <Layout>
      <div className={css.test}></div>
      <div className={css.test}></div>
      <div className={css.test}></div>
      <div className={css.test}></div>
      <div className={css.test}></div>
    </Layout>
  )
}

export default HomePage

export const Head = () => <title>Adriana Torres Topaga</title>

// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/tutorials/querying-data.md
