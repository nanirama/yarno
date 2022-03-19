import React from "react"
import { RichText } from "prismic-reactjs"
import Quote from "../../components/Quote"

const Component = ({ slice }) => {
  return (
    <Quote
      quote={<RichText render={slice.primary.quote_text.richText} />}
      author={slice.primary.quote_author}
      authorTitle={slice.primary.quote_title}
    />
  )
}

export default Component
