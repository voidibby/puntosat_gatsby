import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import * as css from "../styles/header.module.scss"

const Header = (props) => {
  const [scrolled, setScrolled] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [menuVisibility, setMenuVisibility] = useState(false)
  const [scrolledHeight, setScrolledHeight] = useState(false)

  if (menuVisibility) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "scroll"
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth >= 768) {
        setMenuVisibility(false)
      }
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }

      const isScrolledHeight = window.scrollY > window.innerHeight / 3
      if (props.onMain == "true" && isScrolledHeight !== scrolledHeight) {
        setScrolledHeight(!scrolledHeight)
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)

    return () => {
      document.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [scrolled, scrolledHeight, props.onMain])

  return (
    <header
      className={css.headerWrapper}
      data-active={scrolled}
      data-menu={menuVisibility}
      {...(props.onMain ? { "data-mainmenuactive": scrolledHeight } : {})}
    >
      <nav className={css.headerContainer} data-menu={menuVisibility}>
        <Link className={css.headerTitle} data-menu={menuVisibility} to="/">
          <svg data-menu={menuVisibility} viewBox="0 0 92 46" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.7865 22.7738C44.5831 10.3321 34.6452 0.308419 22.4085 0.308419C10.0355 0.308419 0 10.5316 0 23.1542C0 35.7769 10.0355 46 22.4024 46H44.7967V22.7656L44.7865 22.7738ZM22.4634 34.8639C20.2014 34.8639 17.9901 34.186 16.1093 32.9158C14.2284 31.6456 12.7625 29.8402 11.8969 27.728C11.0312 25.6157 10.8047 23.2915 11.246 21.0491C11.6873 18.8068 12.7766 16.7471 14.3761 15.1304C15.9756 13.5138 18.0136 12.4128 20.2322 11.9668C22.4508 11.5208 24.7504 11.7497 26.8403 12.6246C28.9301 13.4995 30.7164 14.9812 31.9731 16.8821C33.2298 18.7831 33.9006 21.018 33.9006 23.3043C33.9001 26.3699 32.6949 29.3099 30.5502 31.4776C28.4054 33.6453 25.4966 34.8634 22.4634 34.8639Z" />
            <path d="M92 17.1379H75.0436V0H63.7386V17.1379H46.7822V28.5639H63.7386V45.7019H75.0436V28.5639H92V17.1379Z" />
          </svg>
          <h3 className={css.headerPageTitle} data-menu={menuVisibility}>
            {props.pageTitle}
          </h3>
          <h5 className={css.headerPageArtistName}>Adriana Torres Topaga</h5>
        </Link>
        <ul className={css.navLinks} data-menu={menuVisibility}>
          <li className={css.navLinkItem}>
            <Link to="/about">about</Link>
          </li>
          <li className={css.navLinkItem}>
            <Link to="/works">works</Link>
          </li>
          <li className={css.navLinkItem}>
            <Link to="/press">press</Link>
          </li>
          <li className={css.navLinkItem}>
            <Link to="/calendar">calendar</Link>
          </li>
          <li className={css.navLinkItem}>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        <ul className={css.navLinks} data-menu={menuVisibility}>
          <li className={css.navLinkItem}>
            <Link to="about">es</Link>
          </li>
          <li className={css.navLinkItem}>
            <Link to="about">en</Link>
          </li>
          <li className={css.navLinkItem}>
            <Link to="about">de</Link>
          </li>
        </ul>
      </nav>
      <div className={css.screenWidth}>
        <div className={css.blah}></div>
        <p>{windowWidth}</p>
      </div>
      <div
        className={css.menuButton}
        onClick={() => {
          setMenuVisibility(!menuVisibility)
        }}
      >
        <svg
          className={css.openMenuButton}
          data-menu={menuVisibility}
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 20C10 22.2091 8.20914 24 6 24C3.79086 24 2 22.2091 2 20C2 17.7909 3.79086 16 6 16C8.20914 16 10 17.7909 10 20Z" />
          <path d="M24 20C24 22.2091 22.2091 24 20 24C17.7909 24 16 22.2091 16 20C16 17.7909 17.7909 16 20 16C22.2091 16 24 17.7909 24 20Z" />
          <path d="M38 20C38 22.2091 36.2091 24 34 24C31.7909 24 30 22.2091 30 20C30 17.7909 31.7909 16 34 16C36.2091 16 38 17.7909 38 20Z" />
        </svg>
        <svg
          className={css.closeMenuButton}
          data-menu={menuVisibility}
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 5L20 20M20 20L35 35M20 20L35 5M20 20L5 35" />
        </svg>
      </div>
    </header>
  )
}

export default Header
