import React from "react"
import { RichText } from "prismic-reactjs"
import SqueezeHero from "../../components/SqueezeHero"
import FormMachine from "../FormMachine"

const Slice = ({ slice }) => {
  const hasForm = !!slice.primary.hero_form_reference.document

  return (
    <SqueezeHero
      align={slice.primary.align_text}
      imageURL={slice.primary.squeeze_hero_image.url}
      noImagePadding={!slice.primary.squeeze_hero_image_padding}>
      <RichText render={slice.primary.squeeze_hero_content.richText} />
      {hasForm && (
        <FormMachine formReference={slice.primary.hero_form_reference} />
      )}
    </SqueezeHero>
  )
}

export default Slice
