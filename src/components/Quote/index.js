import React from "react"
import { Container } from "./styles"

const Quote = ({ quote, author, authorTitle }) => {
  return (
    <Container>
      <blockquote>
        {quote}
        <footer>
          <p>{author}</p>
          <em>{authorTitle}</em>
        </footer>
      </blockquote>
    </Container>
  )
}

export default Quote
