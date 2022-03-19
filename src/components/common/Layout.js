import React from "react"
import Helmet from "react-helmet"
import Theme from "../common/Theme"
import AlertBanner from "../common/AlertBanner"
import Navigation from "../common/Navigation"
import Footer from "./Footer"

// Styles
import "sanitize.css"
import "../../styles/app.css"
import "../../styles/typography.css"
import "../../styles/embedded-woff.css"
import "@reach/dialog/styles.css"

/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, bodyClass, location, simple }) => {
  const isHome = location && location.pathname == "/"

  return (
    <>
      <Helmet>
        <html />
        <body className={bodyClass} />
      </Helmet>
      <div>
        <Theme>
          <React.Fragment>
            <div>
              {/* The main header section on top of the screen */}
              {!simple && (
                <React.Fragment>
                  <AlertBanner isHome={isHome} />
                  <header>
                    <Navigation isHome={isHome} location={location} />
                  </header>
                </React.Fragment>
              )}

              <main>
                {/* All the main content gets inserted here, index.js, post.js */}
                {children}
              </main>
            </div>
            {!simple && <Footer location={location} />}
          </React.Fragment>
        </Theme>
      </div>
    </>
  )
}

export default DefaultLayout
