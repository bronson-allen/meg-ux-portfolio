import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./layout.css"

const Header = ({ siteTitle }) => (
  <header style={styles.headerStyle}>
    {/* <img
      alt="Megan Allen Logo"
      height={20}
      style={{ margin: 0 }}
      src="../images/iPhone1.png"
    /> */}
    
    <Link
        to="/"
        style={styles.linkStyle}
      >
        <StaticImage alt="Megan Allen Logo" width={250} src="../images/MeganAllen.png"/>
      </Link>
    <div style={styles.link}>
      <Link
      activeClassName="secondary-link"
        to="../work"
        style={styles.linkStyle}
      >
        Work
      </Link>
      <Link
      activeClassName="secondary-link"
        to="../resume"
        style={styles.linkStyle}
      >
        Resume
      </Link>
      <Link
      activeClassName="secondary-link"
        to="../testimonials"
        style={styles.linkStyle}
      >
        Testimonials
      </Link>
      <Link
        activeClassName="secondary-link"
        to="../about"
        style={styles.linkStyle}
      >
        About
      </Link>
    </div>
  </header>
)

const styles = {
  headerStyle: {
    margin: `0 auto`,
    padding: `var(--space-4) var(--size-gutter)`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-between`,
  },
  link: {
    display: 'flex',
    justifyContent: `flex-end`,
  },
  linkStyle: {
    fontSize: `var(--font-sm)`,
    // textDecoration: `none`,
    margin: '10px',
    
  } 
}

export default Header
