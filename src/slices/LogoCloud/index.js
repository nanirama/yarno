import React from "react"
import { RichText } from "prismic-reactjs"
import LogoCloud from "../../components/LogoCloud"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Slice = ({ slice }) => {
  return (
    <LogoCloud
      heading={slice.primary.logo_cloud_heading.richText}
      images={slice.items}>
      <RichText render={slice.primary.logo_cloud_heading.richText} />

      <div>
        {slice.items.map((item, index) => {
          const image = item.logo_cloud_image
          return (
            <div key={`logo-${index}`}>
              <GatsbyImage image={getImage(image)} alt={image.alt} />
            </div>
          )
        })}
      </div>
    </LogoCloud>
  )
}

export default Slice
