import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Theme from "../common/Theme"
import SqueezeHeader from "../SqueezeHeader"
import SqueezeContactDetails from "../SqueezeContactDetails"

// Styles
import "sanitize.css"
import "../../styles/app.css"
import "../../styles/typography.css"
import "../../styles/embedded-woff.css"
import "@reach/dialog/styles.css"

/**
 * Squeeze layout component
 *
 * The Layout component wraps around each landing page.
 *
 */
const DefaultLayout = ({ layout, children, bodyClass }) => {
  const {
    squeeze_header_logo,
    squeeze_header_logo_link,
    squeeze_header_phone_label,
    squeeze_header_phone_link,
    squeeze_header_email_label,
    squeeze_header_email_link
  } = layout

  return (
    <>
      <Helmet>
        <html />
        <body className={bodyClass} />
      </Helmet>
      <div>
        <Theme>
          <div>
            <SqueezeHeader
              logoImageURL={squeeze_header_logo.url}
              logoLinkUrl={squeeze_header_logo_link.url}
              phoneLink={squeeze_header_phone_link.url}
              phoneLabel={squeeze_header_phone_label}
              emailLink={squeeze_header_email_link.url}
              emailLabel={squeeze_header_email_label}
            />
            <main>
              {/* All the main content gets inserted here */}
              {children}
            </main>
          </div>
        </Theme>
      </div>
    </>
  )
}

export default DefaultLayout
