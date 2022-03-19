import React from "react"
import Footer from "."
import mock from "./mock.json"

export default {
  title: "Components/Footer",
  component: Footer
}
// The data for this comes from hooks/useLayout
export const Default = () => {
  return (
    <Footer
      acknowledgement={mock.acknowledgement.richText}
      copyright={mock.copyright.richText}
      tinyLinks={mock.tiny_links}
      primaryFooter={mock.primary_footer.document.data}
    />
  )
}
