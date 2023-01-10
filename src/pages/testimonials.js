import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "../components/layout.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const TestimonialsPage = () => {
  const testimonials = [
    {
      title: "Passionate Designer",
      text: `I’m so lucky I had the chance to work with Megan for nearly 2 years at Hoverstate. Having Megan as a peer was priceless and she quickly stood out to me as someone who I knew I would learn a lot from. Her strong self-motivation drives an inspiring appetite to learn, and she is always taking up opportunities to grow in a multi-faceted way. Her thoughtful, open, and curious mindset is such a pleasant constant, and it is impossible to miss when working with her. Even in the most challenging scenarios, Megan is committed to delivering thoughtful experiences that keep in mind all the stakeholders (often no trivial feat). She is not only a passionate designer, but also an enthusiastic teammate and leader. Success as a team is a priority for her, and she steps up and finds creative opportunities to lead and grow. I have no doubt she will fill her future with many proud accomplishments.`,
      reference: "Anna Kawaski",
      position: "Senior User Experience Designer",
      company: "R.E.I (Formerly Hoverstate)",
    },
    {
      title: "Kind and Generous",
      text: `I love working with Megan! She is eager and up for any task, never misses a deadline, and produces quality work every time. I appreciate the time Megan takes to acquaint herself with each individual client's project specifications to make sure she creates a beautiful and unique design. I'm constantly impressed with how she handles herself in difficult situations, especially when a supervisor or client critiques her work and requests adjustments. Above all, Megan is kind and generous in all that she does!`,
      reference: "Jennifer Nelson",
      position: "Product Manager",
      company: "Hoverstate",
    },
    {
      title: "Organized and Hard-working",
      text: `Megan was a summer intern working for me in our marketing and e-commerce department. We needed to update a lot of images and content and after doing a trial week of focusing on this project my existing staff told me it would talk 3-4 months to complete. I decided to hire Megan for the summer and tasked her with doing much of the research and image updates to help our B2B e-commerce site. She finished this project in 6 weeks, while learning how to use and implement the changes in Websphere Commerce. She was organized and hard-working and made me realize that my existing full-time graphic designer was not going to be a long-term solution for the company. She fit in well with our marketing team and made a difference with her hard work and attention to detail. I would recommend her without any reservations.`,
      reference: "Wes Clayton",
      position: "Business Development Manager",
      company: "Lindenmeyr Monroe",
    },
  ]

  return (
    <Layout>
      <div style={styles.mainContainer}>
        <h1 style={styles.title}>Testimonials</h1>
        <div style={styles.row}>
          {testimonials.map((testimonial, i) => (
            <div className="column-3" key={i}>
              <div style={styles.card}>
                <div>
                  <h2 style={{ color: "#1B7F9D" }}>{testimonial.title}</h2>
                  <p>{testimonial.text}</p>
                </div>
                <div>
                  <h3 style={{ color: "#C6664E" }}>{testimonial.reference}</h3>
                  <p style={{ marginBottom: "2px" }}>{testimonial.position}</p>
                  <p>
                    <i>{testimonial.company}</i>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    alignSelf: "center",
    color: `var(--color-primary-dark)`,
    margin: `1em`,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    margin: "2em 0",
  },
  // column: {
  //   flex: 1,
  // },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "90%",
    margin: `0 auto`,
    minHeight: "878px",
    boxShadow: `0px 8px 20px 10px rgba(143, 143, 143, 0.25)`,
    padding: `var(--space-5)`,
  },
  "@media (max-width: 900px)": {
    column: {
      width: "10%",
    },
  },
}
export const Head = () => <Seo title="Testimonials" />

export default TestimonialsPage
