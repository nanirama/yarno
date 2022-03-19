import React from "react"
import GoogleMap from "../../components/GoogleMap"

const Component = ({ slice }) => {
  return <GoogleMap query={slice.primary.query} title={slice.primary.map_title} />
}

export default Component
