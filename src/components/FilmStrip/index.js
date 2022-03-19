import React from "react"
import styled from "styled-components"
import { md } from "../../utils/breakpoints"

export const Container = styled.div`
  margin: 4rem 0;
  img {
    display: none;
  }
  img:first-of-type {
    display: block;
  }
  @media ${md} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
    img {
      display: block;
    }
  }
`

const FilmStrip = ({ children }) => {
  return <Container>{children}</Container>
}
export default FilmStrip
