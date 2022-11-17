/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types'

import Header from "./header"
import Footer from './footer'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <main style={{
          maxWidth: `var(--size-content)`,
          margin: `0 auto`,
          display: 'flex',
          flexDirection: 'column',
          padding: '0 40px',
        }}
        >
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
