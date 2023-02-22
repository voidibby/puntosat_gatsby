import * as React from "react"
import Header from "../components/header"
import Main from "../components/main"
import Footer from "../components/footer"
import * as css from "../styles/layout.module.scss"

const Layout = (props) => {
  return (
    <>
      <Header pageTitle={props.pageTitle} onMain={props.onMain ? "true" : null}></Header>
      <Main>{props.children}</Main>
      <Footer></Footer>
    </>
  )
}

export default Layout
