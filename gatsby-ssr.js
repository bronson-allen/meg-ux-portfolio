/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
import React from "react"

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })

  // Add security headers
  setHeadComponents([
    <meta
      key="http-equiv-csp"
      httpEquiv="Content-Security-Policy"
      content="upgrade-insecure-requests"
    />,
  ])
}
