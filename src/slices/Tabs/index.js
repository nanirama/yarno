import React, { Fragment } from "react"
import { RichText } from "prismic-reactjs"
import { Section } from "../../components/common/styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Tabs from "../../components/Tabs"

const Component = ({ slice }) => {
  const tabs = slice.items.map(t => {
    return {
      tab: t.tab_label,
      tabImage: (
        <GatsbyImage image={getImage(t.tab_image)} alt={t.tab_image.alt} />
      ),
      content: <RichText render={t.tab_content.richText} />,
      contentImage: (
        <GatsbyImage
          image={getImage(t.tab_content_image)}
          alt={t.tab_content_image.alt}
        />
      )
    }
  })

  return (
    <Section bgImage="linear-gradient(180deg, #FFFFFF 3%, #F7F7F7 98%)">
      <RichText render={slice.primary.tab_heading.richText} />
      <RichText render={slice.primary.tab_subheading.richText} />
      <Tabs tabs={tabs} />
    </Section>
  )
}

export default Component