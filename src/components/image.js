import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as css from "../styles/works.module.scss"

const Image = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
        nodes {
          id
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  return (
    <>
      {data.allFile.nodes.map((node) => {
        if (node.relativePath == props.src) {
          // return <p>{node.relativePath}</p>
          return (
            <>
              <GatsbyImage
                key={node.id}
                image={node.childImageSharp.gatsbyImageData}
                alt="someImage"
                layout="fullWidth"
                placeholder="dominantColor"
                as="div"
                className={props.className}
                imgClassName={props.imgClassName}
                objectFit="cover"
                object-position="50% 50%"
                vertical={
                  node.childImageSharp.gatsbyImageData.width >
                  node.childImageSharp.gatsbyImageData.height
                    ? "true"
                    : "false"
                }
              />
            </>
          )
        }
      })}
    </>
  )
}

export default Image

// Carrousels!
// https://react-slick.neostack.com/
// https://owlcarousel2.github.io/OwlCarousel2/docs/api-classes.html
