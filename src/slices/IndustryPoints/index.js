import React from "react"
import { RichText } from "prismic-reactjs"

import IndustryPoints from "../../components/IndustryPoints"

const Slice = ({ slice }) => {
  const icons = slice.items.map(icon => {
    return {
      title: <RichText render={icon.point_title.richText} />,
      image: icon.point_image,
      text: <RichText render={icon.point_content.richText} />
    }
  })
  return (
    <IndustryPoints
      heading={<RichText render={slice.primary.points_header.richText} />}
      icons={icons}
    />
  )
}

export default Slice
