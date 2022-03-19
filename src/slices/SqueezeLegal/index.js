import React from "react"
import SqueezeLegal from "../../components/SqueezeLegal"

const Slice = ({ slice }) => {
  return (
    <SqueezeLegal
      privacyURL={slice.primary.squeeze_privacy_link.url}
      disclaimerURL={slice.primary.squeeze_disclaimer_link.url}
    />
  )
}

export default Slice
