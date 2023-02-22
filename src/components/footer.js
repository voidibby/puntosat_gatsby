import * as React from "react"
import * as css from "../styles/footer.module.scss"

const Footer = () => {
  return (
    <footer>
      <div className={css.footer}>
        <div className={css.footerWrapper}>
          <div className={css.footerContent}>
            <h1>Adriana Torres Topaga</h1>
            <h1>2023</h1>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
