import React from "react"
import styled from "styled-components"
import CustomerCard from "./CustomerCard"
import { md, lgPixels } from "../../utils/breakpoints"

const Container = styled.div`
  background: #efefef;
  padding: 3rem 2rem 1rem 2rem;
  min-width: 100%;

  > div {
    max-width: ${lgPixels}px;
    margin: 0 auto;
    @media ${md} {
      display: flex;
      padding: 8rem 2rem 7rem 2rem;
    }
  }
`

const Component = ({ testimonials }) => {
  return (
    <Container>
      <div>
        {testimonials.map((testimonial, index) => (
          <CustomerCard
            key={`customer-${index}`}
            name={testimonial.authorname.text}
            excerpt={testimonial.testimonial.text}
            company={testimonial.company.text}
          />
        ))}
      </div>
    </Container>
  )
}

export default Component
