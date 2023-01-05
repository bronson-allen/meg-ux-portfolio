import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./layout.css"

function Header() {
  return (
    <header style={styles.headerStyle}>
      <div>
        <Link to="/">
          <StaticImage
            alt="Megan Allen Logo"
            width={250}
            src="../images/MeganAllen.png"
          />
        </Link>
      </div>
      <div>
        <Link activeClassName="secondary-link" to="/" style={styles.linkStyle}>
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
}

const styles = {
  headerStyle: {
    padding: "var(--space-4) var(--space-5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: `var(--size-content)`,
    margin: `var(--space-5) 0`,
  },

  linkStyle: {
    fontSize: "var(--font-lg)",
    margin: "10px",
  },
}

export default Header
