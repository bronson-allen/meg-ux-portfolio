import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import resumeImg from '../images/resume.png'
import resumePDF from '../images/MeganAllen_Resume2021.pdf'
import "../components/layout.css"

const ResumePage = () => {
  
  return (
    <Layout>
      <div style={styles.mainContainer}>
        <div style={styles.titleContainer}>
          <div style={styles.holder}></div>
          <h2 style={styles.title}>Resume</h2>
          <a style={styles.downloadButton} href={resumePDF} download="MeganAllen_Resume">Download PDF</a>
        </div>
        <img style={styles.image} src={resumeImg}/>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

const styles = {
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: '70%',
    margin: `0 auto`,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `0 28px`,
  },
  title: {
    alignSelf: 'center',
    justifySelf: 'center',
    color: `var(--color-primary-dark)`,
  },
  downloadButton: {
    width: '150px',
    height: '44px',
    borderRadius: '10px',
    background: `var(--color-secondary)`,
    color: 'white',
    textAlign: 'center',
    lineHeight: '44px',
    fontWeight: 600,
  },  
  image: {
    alignSelf: 'center',
  },
  holder: {
    width: '150px',
  }
}

export const Head = () => <Seo title="Resume" />

export default ResumePage
