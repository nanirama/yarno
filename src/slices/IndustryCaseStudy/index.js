import React from "react"
import { RichText } from "prismic-reactjs"
import IndustryCaseStudy from "../../components/IndustryCaseStudy"

const Slice = ({ slice }) => {
  return (
    <IndustryCaseStudy
      logo={slice.primary.case_study_logo}
      image={slice.primary.case_study_image}
      videoId={slice.primary.case_study_vimeo_id}
      content={<RichText render={slice.primary.case_study_content.richText} />}
    />
  )
}

export default Slice
