import * as React from "react"
import Header from "../components/header"
import Main from "../components/main"
import * as css from "../styles/layout.module.scss"

const Layout = (props) => {
  return (
    <>
      <Header pageTitle={props.pageTitle}></Header>
      <Main>{props.children}</Main>
    </>
  )
}

export default Layout
