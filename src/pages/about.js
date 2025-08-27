import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import meganPotrait from "../images/meganPortrait.png"
import uxWritingCert from "../images/uxWritingCert.png"
import a11yCert from "../images/a11yCert.png"
import articulatingBookCover from "../images/articulatingBookCover.jpg"
import creativeBookCover from "../images/creativeBookCover.jpg"
import oneHundredThingsBookCover from "../images/oneHundredThingsBookCover.jpg"
import solvingBookCover from "../images/solvingBookCover.jpg"
import "../components/layout.css"

const AboutPage = () => (
  <Layout>
    <div className="row-cs">
      <div className="column-cs">
        <img style={styles.portrait} src={meganPotrait} />
      </div>
      <div className="column-cs">
        <h1 className="color-primary-dark">Hello, I&apos;m Megan</h1>
        <p>I am a Senior Product Designer based in Chicago, IL.</p>
        <p>
          I am passionate about creating user-centered solutions in digital
          spaces. With a background in both graphic design and psychology, I aim
          to produce products with seamless experiences without sacrificing the
          look and feel of the design. My process combines design thinking,
          research and user interfaces, while always focusing on the user.
        </p>
        <p>In my free time you can find me:</p>
        <ul>
          <li>riding my bike along Lake Michigan</li>
          <li>kickboxing</li>
          <li>traveling to new places with my camera</li>
          <li>at a concert</li>
          <li>exploring Chicago&apos;s food scene </li>
        </ul>
        <p>Let’s get in touch!</p>
      </div>
    </div>
    <div className="row-cs">
      <h2 className="color-primary-dark" style={styles.cert}>
        Certificates
      </h2>
    </div>
    <div className="row-cs">
      <div className="column-cs">
        <h3>The Fundamentals of UX Writing</h3>
        <p className="italic">UX Content Collective</p>
        <img style={styles.certificate} src={uxWritingCert} />
      </div>
      <div className="column-cs">
        <h3>How to Design for Accessability: WCAG 2.2</h3>
        <p className="italic">Liz Brown on Udemy</p>
        <img style={styles.certificate} src={a11yCert} />
      </div>
    </div>
    {/* add My Favorite Product Design Books */}
    <div className="row-cs">
      <h2 className="color-primary-dark" style={styles.cert}>
        My Favorite Product Design Books
      </h2>
    </div>
    <div className="row-cs">
      <div className="column-cs" style={styles.bookColumn}>
        <h3>Articulating Design Decisions</h3>
        <p className="italic">Tom Greever</p>
        <img style={styles.bookCover} src={articulatingBookCover} />
      </div>
      <div className="column-cs" style={styles.bookColumn}>
        <h3>Creative Confidence</h3>
        <p className="italic">Tom Kelley & David Kelley</p>
        <img style={styles.bookCover} src={creativeBookCover} />
      </div>
      <div className="column-cs" style={styles.bookColumn}>
        <h3>100 Things Every Designer Needs to Know About People</h3>
        <p className="italic">Susan M. Weinschenk</p>
        <img style={styles.bookCover} src={oneHundredThingsBookCover} />  
      </div>
      <div className="column-cs" style={styles.bookColumn} >
        <h3>Solving Product Design Exercises</h3>
        <p className="italic">Artiom Dashinsky</p>
        <img style={styles.bookCover} src={solvingBookCover} />
      </div>
    </div>
  </Layout>
)

const styles = {
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  column: {
    padding: ` 0 var(--space-5)`,
    display: "flex",
    flexDirection: "column",
    flexBasis: "100%",
    flex: 1,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
  },
  portrait: {
    maxWidth: "100%",
  },
  //standardized size for book covers so they all render the same size and fit nicely in the 4 column layout
  bookCover: {
    maxWidth: "200px",
    height: "auto",
  },
  bookColumn: {
    justifyContent: "flex-start",
  },
  cert: {
    padding: ` 0 var(--space-5)`,
  },
  certificate: {
    maxWidth: "400px",
    height: "auto",
  },
}

export const Head = () => <Seo title="About" />

export default AboutPage
