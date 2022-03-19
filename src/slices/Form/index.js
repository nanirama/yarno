import React from "react"
import { RichText } from "prismic-reactjs"
import { Form, Container } from "./styles"
import FormMachine from "../../slices/FormMachine"

const Slice = ({ slice }) => {
  return (
    <Form
      backgroundColour={slice.primary.form_background_colour}
      fontColour={slice.primary.form_font_colour}>
      <Container>
        <RichText render={slice.primary.pre_form_content.richText} />
        <FormMachine formReference={slice.primary.form_reference} />
      </Container>
    </Form>
  )
}

export default Slice
