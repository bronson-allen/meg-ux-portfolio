import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectCard from "../components/ProjectCard"

import iphoneImage from "../images/iPhone1.png"
import macbookImage1 from "../images/macBookPro1.png"
import macImage from "../images/mac.png"
import macbookImage2 from "../images/macBookPro2.png"
import cs5Image from "../images/cs5Image.png"



const projects = [
  {
    title: "Keys to Success",
    name: "Admin App Dashboard",
    url: "case-study-1",
    imgSrc: macbookImage1,
    text: "Created an experience with quick access to the most used features throughout the already existing application. Using the design system, built unique experiences for each feature that automatically updates upon login.",
  },
  {
    title: "Keys to Success",
    name: "College Application Checklist",
    url: "case-study-2",
    imgSrc: iphoneImage,
    text: "Created a detailed checklist that helps and encourages high school students apply for colleges in their state. This checklist provides links to resources within the app itself and gives access to other state wide resources. ",
    size: "resize-xsm",
  },
  {
    title: "Kornerstone Administrative Services",
    name: "Dealership Product Creation",
    url: "case-study-3",
    imgSrc: macImage,
    text: "Provided a process for car dealership owners to sell various maintenance services at their dealerships. These services are available for use at multiple dealerships in the system.",
  },
  {
    title: "Success in Education",
    name: "Digital Coupon Book",
    url: "case-study-4",
    imgSrc: macbookImage2,
    text: "Turned a paper/in-person process of delivering coupons to participants involved in Success in Education programs into a streamlined digital experience in which users can browse and redeem coupons for local businesses.",
  },
  {
    title: "Lessen, Turns & Renovations",
    name: "Home Inspection Tool",
    url: "case-study-5",
    imgSrc: cs5Image,
    text: "Turned a paper/in-person process of delivering coupons to participants involved in Success in Education programs into a streamlined digital experience in which users can browse and redeem coupons for local businesses.",
  },
  {
    title: "Lessen, Turns & Renovations",
    name: "Home Inspection Tool",
    url: "case-study-5",
    imgSrc: cs5Image,
    text: "Turned a paper/in-person process of delivering coupons to participants involved in Success in Education programs into a streamlined digital experience in which users can browse and redeem coupons for local businesses.",
  },
]

const IndexPage = () => {
  return (
    <Layout>
      <div style={styles.row}>
        <div style={styles.column}>
          <div style={styles.titleContainer}>
            <h3 style={{ color: `var(--color-primary)` }}>
              Hello, I&apos;m Megan!
            </h3>
            <p>
              I am a User Experience Designer, based in Chicago, currently
              creating digital experiences at Hoverstate.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div style={styles.row}>
          {projects.slice(0, 2).map((project, i) => (
            <div key={i} style={styles.column}>
              <ProjectCard
                title={project.title}
                name={project.name}
                imgSrc={project.imgSrc}
                url={project.url}
                text={project.text}
                size={project.size}
              />
            </div>
          ))}
        </div>
        <div style={styles.row}>
          {projects.slice(2, 4).map((project, i) => (
            <div key={i} style={styles.column}>
              <ProjectCard
                title={project.title}
                name={project.name}
                imgSrc={project.imgSrc}
                url={project.url}
                text={project.text}
              />
            </div>
          ))}
        </div>
        <div style={styles.row}>
          {projects.slice(4, 6).map((project, i) => (
            <div key={i} style={styles.column}>
              <ProjectCard
                title={project.title}
                name={project.name}
                imgSrc={project.imgSrc}
                url={project.url}
                text={project.text}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

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

  titleContainer: {
    alignSelf: "flex-start",
    width: "100%",
  },
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 
{moreLinks.map((link, i) => (
   <React.Fragment key={link.url}>
     <a href={`${link.url}${utmParameters}`}>{link.text}</a>
     {i !== moreLinks.length - 1 && <> · </>}
   </React.Fragment>
 ))}
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
