import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import meganPotrait from '../images/meganPortrait.png'
import uxWritingCert from '../images/uxWritingCert.png'
import a11yCert from '../images/a11yCert.png'
import "../components/layout.css"

const AboutPage = () => (
  <Layout>
    <div  style={styles.row}>
      <div style={styles.column}>
        <img style={styles.portrait} src={meganPotrait} />
      </div>
      <div style={styles.column}>
        <h1 className="color-primary-dark">Hello, I&apos;m Megan</h1>
        <p>I am a user experience designer based in Chicago, IL.</p>
        <p>I am passionate about creating user-centered solutions in digital spaces. With a background in both graphic design and psychology, I aim to produce products with seamless experiences without sacrificing the look and feel of the design. My process combines design thinking, research and user interfaces, while always focusing on the user.</p>
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
    <div style={styles.row}>
      <h2 className="color-primary-dark" style={styles.cert}>Certificates</h2>
    </div>
    <div style={styles.row}>
      <div style={styles.column}>
        <h3>The Fundamentals of UX Writing</h3>
        <p className="italic">UX Content Collective</p>
        <img style={styles.portrait} src={uxWritingCert} />
      </div>
      <div style={styles.column}>
        <h3>How to Design for Accessability: WCAG 2.2</h3>
        <p className="italic">Liz Brown on Udemy</p>
        <img style={styles.portrait} src={a11yCert} />
      </div>
    </div>
  </Layout>
)

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  column: {
    padding: ` 0 var(--space-5)`,
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',
    flex: 1
  },
 textContainer: {
  display: 'flex',
  flexDirection: 'column',
 },
 portrait: {
  maxWidth: '100%',
 },
 cert: {
  padding: ` 0 var(--space-5)`,
 }
 
}

export const Head = () => <Seo title="About" />

export default AboutPage
