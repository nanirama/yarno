import React from "react"
import BackgroundImage from "../../components/BackgroundImage"

const Slice = ({ slice }) => {
  return (
    <BackgroundImage
      backgroundColor={slice.primary.background_primary_colour}
      imageURL={slice.primary.background_primary_image.url}
      height={slice.primary.background_primary_image_height}
      width={slice.primary.background_primary_image_width}
    />
  )
}

export default Slice
