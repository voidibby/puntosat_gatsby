import * as React from "react"
import { Link } from "gatsby"
import { Parallax } from "react-parallax"
import Layout from "../templates/layout"
import heroImage from "../images/img.png"
import * as css from "../styles/index.module.scss"

const HomePage = () => {
  const mapRange = (value, newMin, newMax) => {
    return value * (newMax - newMin) + newMin
  }

  return (
    <Layout onMain={true}>
      <div className={css.heroImageContainer}>
        <Parallax
          bgImage={heroImage}
          blur={{ min: -8, max: 8 }}
          renderLayer={(percentage) => (
            <div
              style={{
                position: "absolute",
                background: `rgb(255, 255, 255, ${mapRange(percentage - 1, 0, 1.4, 0, 1)})`,
                left: "0",
                top: `0`,
                width: "100%",
                height: "100%",
              }}
            ></div>
          )}
        >
          <div className={css.heroImageContent}>
            <svg viewBox="0 0 92 46" xmlns="http://www.w3.org/2000/svg">
              <path d="M44.7865 22.7738C44.5831 10.3321 34.6452 0.308419 22.4085 0.308419C10.0355 0.308419 0 10.5316 0 23.1542C0 35.7769 10.0355 46 22.4024 46H44.7967V22.7656L44.7865 22.7738ZM22.4634 34.8639C20.2014 34.8639 17.9901 34.186 16.1093 32.9158C14.2284 31.6456 12.7625 29.8402 11.8969 27.728C11.0312 25.6157 10.8047 23.2915 11.246 21.0491C11.6873 18.8068 12.7766 16.7471 14.3761 15.1304C15.9756 13.5138 18.0136 12.4128 20.2322 11.9668C22.4508 11.5208 24.7504 11.7497 26.8403 12.6246C28.9301 13.4995 30.7164 14.9812 31.9731 16.8821C33.2298 18.7831 33.9006 21.018 33.9006 23.3043C33.9001 26.3699 32.6949 29.3099 30.5502 31.4776C28.4054 33.6453 25.4966 34.8634 22.4634 34.8639Z" />
              <path d="M92 17.1379H75.0436V0H63.7386V17.1379H46.7822V28.5639H63.7386V45.7019H75.0436V28.5639H92V17.1379Z" />
            </svg>
            <h2 className={css.headerPageArtistName}>Adriana Torres Topaga</h2>
          </div>
        </Parallax>
      </div>
      <div className={css.upcomingEvents}>
        <div className={css.upcomingEventsHeading}>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5V35M20 35L35 20M20 35L5 20" />
          </svg>
          <h3>upcoming events</h3>
        </div>
        <ul className={css.upcomingEventsList}>
          <li className={css.upcomingEventsListElement}>
            <div className={css.upcomingEventsListElementImg}>{/* Here goes and image */}</div>
            <div className={css.upcomingEventsListElementDetails}>
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
