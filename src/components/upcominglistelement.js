import * as React from "react"
import { useState, useEffect, useRef } from "react"
import * as css from "../styles/index.module.scss"

const UpcomingEventsListElement = (props) => {
  const expandButton = useRef(null)
  const [expanded, setExpanded] = useState(false)

  const handleExpand = () => {
    setExpanded(!expanded)
  }

  useEffect(() => {
    const handleClickOut = (event) => {
      if (expanded && expandButton.current && !expandButton.current.contains(event.target)) {
        setExpanded(false)
      }
    }

    document.addEventListener("click", handleClickOut)
    document.addEventListener("scroll", handleClickOut)

    return () => {
      document.removeEventListener("click", handleClickOut)
      document.removeEventListener("scroll", handleClickOut)
    }
  }, [expanded])

  return (
    <li className={css.upcomingEventsListElement}>
      <div className={css.upcomingEventsListElementImg}>{/* Here goes and image */}</div>
      <div className={css.upcomingEventsListElementDetails} data-expanded={expanded}>
        <h3 className={css.eventDates}>{props.eventDates}</h3>
        <h2 className={css.eventTitle}>{props.eventTitle}</h2>
        <p className={css.eventDescription}>{props.children}</p>
        <div className={css.eventDescriptionExtentButton} ref={expandButton} onClick={handleExpand}>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 13L20 27.4828L5 13" />
          </svg>
        </div>
      </div>
    </li>
  )
}

export default UpcomingEventsListElement
