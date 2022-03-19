import React from "react"
import { RichText } from "prismic-reactjs"
import TextBlock from "../../components/TextBlock"
import FormMachine from "../FormMachine"

const Slice = ({ slice }) => {
  const hasForm = !!slice.primary.text_block_form_reference.document

  return (
    <TextBlock
      align={slice.primary.text_block_align}
      imageURL={slice.primary.text_block_image.url}
      imageAlt={slice.primary.text_block_image.alt}
      videoID={slice.primary.vimeo_video_id}
      backgroundColour={slice.primary.text_block_background_colour}>
      <RichText render={slice.primary.text_block_content.richText} />
      {hasForm && (
        <FormMachine formReference={slice.primary.text_block_form_reference} />
      )}
    </TextBlock>
  )
}

export default Slice
