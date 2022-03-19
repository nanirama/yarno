import React from "react"
import { RichText } from "prismic-reactjs"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Column, Section, Underline } from "../../components/common/styles"
import {
  TrainingContainer,
  TrainingImageContainer,
  TrainingInfo,
  TrainingTitle,
  TrainingSubtitle
} from "./styles"

const Component = ({ slice }) => {
  const alignRight = slice.primary.feature_text_block_alignment == "Right"

  const columns = [
    <Column key={`slice-${slice.id}-img`}>
      <TrainingImageContainer rightSide={alignRight}>
        <GatsbyImage
          image={getImage(slice.primary.feature_text_block_image)}
          alt={slice.primary.feature_text_block_image.alt}
        />
      </TrainingImageContainer>
    </Column>,
    <Column style={{ textAlign: "left" }} key={`slice-${slice.id}-content`}>
      <TrainingInfo rightSide={alignRight}>
        <TrainingTitle>{slice.primary.feature_text_block_title}</TrainingTitle>
        <TrainingSubtitle>
          {slice.primary.feature_text_block_subtitle}
        </TrainingSubtitle>
        <Underline />
        <RichText render={slice.primary.feature_text_block_content.richText} />
      </TrainingInfo>
    </Column>
  ]

  return (
    <Section>
      <TrainingContainer reverseOnTablet={alignRight}>
        {alignRight ? columns : columns.reverse()}
      </TrainingContainer>
    </Section>
  )
}

export default Component