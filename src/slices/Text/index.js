import React from "react"
import Container from "../../components/common/Container"
import { RichText } from "prismic-reactjs"

const Text = ({ slice }) => {
  return (
    <Container readable>
      <RichText render={slice.primary.text.richText} />
    </Container>
  )
}

export default Text
