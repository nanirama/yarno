import React from "react"
import Container from "../../components/common/Container"

const IFrame = ({ slice }) => {
  return (
    <Container readable>
      <div
        dangerouslySetInnerHTML={{ __html: slice.primary.iframe.richText[0].text }}
      />
    </Container>
  )
}

export default IFrame
