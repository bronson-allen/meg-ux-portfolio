import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WorkPage = () => (
  <Layout>
    <h1>Hi from the work page</h1>
    <p>Welcome to the work page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Work" />

export default WorkPage
