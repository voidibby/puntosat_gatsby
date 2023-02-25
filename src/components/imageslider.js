import * as React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import * as css from "../styles/work.module.scss"

const LeftArrow = (props) => {
  const { className, onClick } = props
  return (
    <div className={`${css.arrowContainer} ${css.leftArrow}`} onClick={onClick}>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M27 35L12.5172 20L27 5" />
      </svg>
    </div>
  )
}

const RightArrow = (props) => {
  const { className, onClick } = props
  return (
    <div className={`${css.arrowContainer} ${css.rightArrow}`} onClick={onClick}>
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 5L27.4828 20L13 35" />
      </svg>
    </div>
  )
}

const ImageSlider = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    /*customPaging: (i) => <div className={css.sliderDots}></div>,*/
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <div className={css.sliderWrapper}>
      <div className={css.sliderContainer}>
        <Slider {...settings}>{props.children}</Slider>
      </div>
    </div>
  )
}

export default ImageSlider

// Custom dots
// https://codesandbox.io/s/1z2lnox5rq?fontsize=14&file=/src/index.js
// https://stackoverflow.com/questions/54985215/how-to-add-slick-active-class-in-slider-dots-in-react-slick
