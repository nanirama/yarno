import React from "react"
import Theme from "../common/Theme"
import NavBar from "../NavBar"
import Footer from "../Footer"
import AlertBanner from "../common/AlertBanner"

import styled from "styled-components"

const Sticky = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
`

const Component = ({
  location,
  children,
  hideSalesCTA,
  prismicLayout,
  prismicSiteBanner
}) => {
  const data = prismicLayout.data
  const isHome = location && location.pathname == "/"
  const primaryNav = data.primary_nav.document.data
  const primaryFooter = data.primary_footer.document.data

  return (
    <Theme>
      <Sticky>
        {prismicSiteBanner && (
          <AlertBanner isHome={isHome} alertBanner={prismicSiteBanner} />
        )}
        <NavBar
          isHome={isHome}
          companyName={primaryNav.display_name.text}
          logo={primaryNav.logo.url}
          links={primaryNav.body}
        />
      </Sticky>

      <main>{children}</main>

      <Footer
        hideSalesCTA={hideSalesCTA}
        acknowledgement={data.acknowledgement.richText}
        tinyLinks={data.tiny_links}
        copyright={data.copyright.richText}
        primaryFooter={data.primary_footer.document.data}
      />
    </Theme>
  )
}

export default Component
