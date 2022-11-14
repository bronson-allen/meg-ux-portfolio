import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const TestimonialsPage = () => (
  <Layout>
    <h1>Hi from the testimonials page</h1>
    <p>Welcome to the testimonials page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Testimonials" />

export default TestimonialsPage
