import * as React from "react"
import { Link } from "gatsby"
import Layout from "../templates/layout"
import "../styles/global.scss"
import * as css from "../styles/index.module.scss"

const CalendarPage = () => {
  return (
    <Layout pageTitle="calendar">
      <div className={css.test}></div>
      <div className={css.test}></div>
      <div className={css.test}></div>
      <div className={css.test}></div>
      <div className={css.test}></div>
    </Layout>
  )
}

export default CalendarPage

export const Head = () => <title>Adriana Torres Topaga | calendar</title>
