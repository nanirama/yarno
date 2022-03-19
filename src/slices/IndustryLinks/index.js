import React from "react"
import { RichText } from "prismic-reactjs"
import IndustryLinks from "../../components/IndustryLinks"
import linkResolver from "../../utils/linkResolver"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Slice = ({ slice }) => {
  const content = slice.items.map((item, index) => {
    return {
      text: <RichText render={item.link_supporting_content.richText} />,
      action: item.link_text.text,
      image: (
        <GatsbyImage
          image={getImage(item.link_image)}
          alt={item.link_image.alt}
        />
      ),
      videoId: item.vimeo_id,
      to: linkResolver(item.link_link)
    }
  })

  return (
    <IndustryLinks
      key={slice.id}
      heading={<RichText render={slice.primary.links_heading.richText} />}
      content={content}
    />
  )
}

export default Slice
