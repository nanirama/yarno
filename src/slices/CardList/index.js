import React from "react"
import { RichText } from "prismic-reactjs"
import ValueCard from "../../components/ValueCard"
import { Background } from "./styles"

const Slice = ({ slice }) => {
  return (
    <Background>
      {slice.items.map((item, index) => {
        return (
          <ValueCard
            key={index}
            image={item.card_image}
            content={<RichText render={item.card_content.richText} />}
          />
        )
      })}
    </Background>
  )
}

export default Slice
