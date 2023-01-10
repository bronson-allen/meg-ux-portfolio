import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./layout.css"
import hamburgerMenu from "../images/hamburgerMenu.png"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
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
        <Link activeClassName="secondary-link" to="/" className="header-link">
          Work
        </Link>
        <Link
          activeClassName="secondary-link"
          to="../resume"
          className="header-link"
        >
          Resume
        </Link>
        <Link
          activeClassName="secondary-link"
          to="../testimonials"
          className="header-link"
        >
          Testimonials
        </Link>
        <Link
          activeClassName="secondary-link"
          to="../about"
          className="header-link"
        >
          About
        </Link>
      </div>
      <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <StaticImage
          alt="Megan Allen Logo"
          width={25}
          src="../images/hamburgerMenu.png"
        />
      </button>

      <div className={`header-links-mobile ${isMenuOpen ? "open" : ""}`}>
        <button
          className="header-links-close"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          X
        </button>
        <div className="header-links-container-mobile">
          <Link
            activeClassName="secondary-link"
            to="/"
            className="header-link-mobile"
          >
            Work
          </Link>
          <Link
            activeClassName="secondary-link"
            to="../resume"
            className="header-link-mobile"
          >
            Resume
          </Link>
          <Link
            activeClassName="secondary-link"
            to="../testimonials"
            className="header-link-mobile"
          >
            Testimonials
          </Link>
          <Link
            activeClassName="secondary-link"
            to="../about"
            className="header-link-mobile"
          >
            About
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
