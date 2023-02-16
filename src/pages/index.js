import * as React from "react"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../templates/layout"
import * as css from "../styles/index.module.scss"

const HomePage = () => {
  return (
    <Layout onMain={true}>
      <div className={css.heroImageContainer}>{/* Here goes and image */}</div>
      <div className={css.upcomingEvents}>
        <h3 className={css.upcomingEventsHeading}>upcoming events</h3>
        <ul className={css.upcomingEventsList}>
          <li className={css.upcomingEventsListElement}>
            <div className={css.upcomingEventsListElementImg}>{/* Here goes and image */}</div>
            <div className={css.details}>
              <p className={css.eventDates}>1990-1889</p>
            </div>
          </li>
        </ul>
      </div>

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
