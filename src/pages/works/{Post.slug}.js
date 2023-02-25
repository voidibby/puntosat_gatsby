import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../../templates/layout"
import Image from "../../components/image"
import ImageSlider from "../../components/imageslider"
import * as css from "../../styles/work.module.scss"

const WorkPage = (props) => {
  const localWorks = props.data.allPost.nodes[0]

  console.log(props)

  return (
    <Layout pageTitle="works">
      <div className={css.workWrapper}>
        <Image
          src={localWorks.images[0]}
          className={css.workHeroImageContainer}
          imgClassName={css.workHeroImageImg}
        ></Image>

        <ImageSlider>
          {localWorks.images.map((image, index) => (
            <div className={css.sliderImageWrapper}>
              <Image key={index} src={`${image}`} className={css.sliderImageContainer}></Image>
            </div>
          ))}
        </ImageSlider>

        <div className={css.workContent}>
          <div className={css.workDetails}>
            <h1>{localWorks.title}</h1>
          </div>
          <div className={css.workDescription}>
            <div className={css.workLanguages}>
              <h5>ES</h5>
              <h5>EN</h5>
              <h5>DE</h5>
            </div>
            <p>{localWorks.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String) {
    allPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        slug
        id
        images
        description
      }
    }
  }
`
export default WorkPage
