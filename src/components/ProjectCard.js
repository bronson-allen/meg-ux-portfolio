import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./layout.css"
import arrowIcon from "../images/arrowIcon.png"

const ProjectCard = ({ title, name, imgSrc, url, text, size }) => {
  console.log(size)
  // const imageSize = size ? size : "70%"

  return (
    <div style={styles.mainContainer}>
      <Link to={url}>
        <div style={styles.imageBox}>
          <img
            className={size}
            style={{ maxWidth: size ? size : "70%" }}
            src={imgSrc}
          />
        </div>
      </Link>
      <h3>{title}</h3>
      <h2 style={styles.name}>{name}</h2>
      <p>{text}</p>
      <Link to={url} className={"secondary-color bolded"} style={styles.link}>
        <p>Full Case Study</p>
        <img width={20} src={arrowIcon} style={styles.icon} />
      </Link>
    </div>
  )
}

const styles = {
  mainContainer: {
    marginBottom: `var(--space-6)`,
  },
  imageBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "300px",
    minHeight: "450px",
    background: "#FFFFFF",
    boxShadow: "2px 6px 20px 12px rgba(160, 160, 160, 0.25)",
    borderRadius: "12px",
    marginBottom: `var(--space-5)`,
    padding: "16px",
  },
  link: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginLeft: "9px",
  },
  name: {
    color: `var(--color-primary-dark)`,
  },
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
}

export default ProjectCard
