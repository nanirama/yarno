import React from "react"
import { RichText } from "prismic-reactjs"
import IndustryHeader from "../../components/IndustryHeader"
import linkResolver from "../../utils/linkResolver"

const Slice = ({ slice }) => {
  return (
    <IndustryHeader
      checklistLeft={<RichText render={slice.items[0].header_checklist.richText} />}
      checklistRight={<RichText render={slice.items[1].header_checklist.richText} />}
      image={slice.primary.header_image}
      title={<RichText render={slice.primary.header_title.richText} />}
      subtitle={<RichText render={slice.primary.header_subtitle.richText} />}
      buttonText={slice.primary.header_button_text}
      buttonLink={linkResolver(slice.primary.header_button_link)}
    />
  )
}

export default Slice
