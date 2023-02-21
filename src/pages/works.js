import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import Layout from "../templates/layout"
import Image from "../components/image"
import "../styles/global.scss"
import * as css from "../styles/works.module.scss"

const WorksPage = (props, _data, _pageTitle) => {
  const pageTitle = "works"
  const data = props.data.allWpPost.nodes

  const worksPlaceholder = [
    {
      id: "00",
      title: `CACHARREO Foto-utopische SERIE`,
      year: `2022`,
      thumbnailPath: `thumbnail00.jpg`,
      images: {
        path: `image00.png`,
        path: `image01.png`,
        path: `image02.png`,
      },
      description: `Entwickelt im Otelo / Vorchdorf (Österreich) bei dem Projekt Cacharreo "Die Zukunft ist passé". In dieser Fotoserie experimentierten Adriana Torres und LAB ON STAGE analog die Dimensionen zwischen dem Körper und den Objekten zu verändern, indem sie Bilder erzeugten, die Wege vorschlagen ein Objekt zu bewohnen oder die Wirkung eines Objekts auf den Körper aufzeigen. Sie erkundeten Formen der Beziehung und der Darstellung. Die Bilder stellen politische und diskursive Praktiken dar, in Bezug auf Geschlecht, Sexualität, Patriarchat, heterosexuelles Regime und Konsumgewohnheiten und werfen die Frage auf, inwieweit wir zu deren Veränderung beitragen.
      Die Fotoserie zielt darauf ab, ausgehend vom Alltag, Veränderungen und Gedanken hervorzubringen, die das eigene Bewusstsein spielerisch dekonstruieren. Es geht darum, den Blick in ein Fragment einer ganzheitlichen, ästhetischen Erfahrung zu verwandeln und auf die Interaktion zwischen Alltagsgegenstand und menschlichem Körper zu lenken.
      Gibt es einen Zusammenhang zwischen unseren Konsumgewohnheiten, Feminismus und seiner Darstellung? Wie verhalten wir uns zur nicht-menschlichen Welt (Tiere, Pflanzen, Gegenstände, usw.)`,

      eventTitle: `WHAT THE FEM`,
      description: `10.11.2022 Ausstellungseröffnung
      Feministische Perspektiven 1950 bis heute
      Teilnahme
      Nordico Museum`,
    },
  ]

  return (
    <Layout pageTitle={pageTitle}>
      {/* snnipet to fill the page from WP
      {data.map((node) => (
        <Link to={`./${node.slug}`}>{node.title}</Link>
      ))}
      */}

      <ul className={css.workListWrapper}>
        <li className={css.workListElement}>
          <div className={css.workListElementImg}>
            <img src={`../images/${worksPlaceholder[0].thumbnailPath}`} alt="" />
          </div>
          <Image src={worksPlaceholder[0].thumbnailPath}></Image>
          <h2 className={css.workTitle}>{worksPlaceholder[0].title}</h2>
        </li>
      </ul>

      <div className={css.test}></div>
      <div className={css.test}></div>
      <div className={css.test}></div>
      <div className={css.test}></div>
      <div className={css.test}></div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpPost(filter: { language: { code: { eq: EN } } }) {
      nodes {
        title
        slug
        id
        translations {
          id
          slug
          title
        }
      }
    }
  }
`

export default WorksPage

export const Head = () => <title>Adriana Torres Topaga | </title>
