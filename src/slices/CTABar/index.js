import React from "react"
import { RichText } from "prismic-reactjs"
import Link from "../../components/Link"
import Container from "../../components/common/Container"
import linkResolver from "../../utils/linkResolver"
import { Background } from "./styles"

const Slice = ({ slice }) => {
  return (
    <Background
      bgColor={slice.primary.cta_background}
      fontColor={slice.primary.cta_font}>
      <Container>
        <RichText render={slice.primary.cta_content.richText} />
        <Link {...slice.primary.cta_link}>{slice.primary.cta_button_text}</Link>
      </Container>
    </Background>
  )
}

export default Slice
