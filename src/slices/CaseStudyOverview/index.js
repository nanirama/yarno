import React from "react"
import { RichText } from "prismic-reactjs"
import Container from "../../components/common/Container"
import { WhoTheyAre, FeaturesUsed } from "./styles"
const Slice = ({ slice }) => {
  return (
    <WhoTheyAre>
      <Container>
        <FeaturesUsed>
          <h4>Features used</h4>
          {slice.items.map((item, index) => {
            return (
              <li key={`feature-${index}`}>
                <img
                  src={item.feature_image.url}
                  alt={item.feature_image.alt}
                />
                <RichText render={item.feature_text.richText} />
              </li>
            )
          })}
        </FeaturesUsed>

        <div>
          <RichText render={slice.primary.who_are_they.richText} />
        </div>
      </Container>
    </WhoTheyAre>
  )
}
export default Slice
