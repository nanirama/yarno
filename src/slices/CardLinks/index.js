import React, { Fragment } from "react"
import { RichText } from "prismic-reactjs"
import CardLink from "../../components/CardLink"
import linkResolver from "../../utils/linkResolver"
import { Container } from "./styles"

const Component = ({ slice }) => {
  return (
    <Container>
      {slice.items.map((item, index) => {
        return (
          <CardLink
            key={`cardlink-${index}`}
            title={<RichText render={item.card_link_category.richText} />}
            image={item.card_link_image}
            content={<RichText render={item.card_link_content.richText} />}
            link={linkResolver(item.card_link_link)}
            linkLabel={item.link_label}
          />
        )
      })}
    </Container>
  )
}

export default Component
