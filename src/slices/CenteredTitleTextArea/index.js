import React from "react"
import Container from "../../components/common/Container"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
const Override = styled.div`
  h2,
  h3,
  h4,
  h5 {
    text-align: center;
    position: relative;
  }

  h2 {
    margin-top: 7rem;
  }

  h2:before {
    content: " ";
    position: absolute;
    height: 4px;
    width: 14rem;
    background: rgb(37, 193, 169);
    top: -2.7rem;
    left: 50%;
    margin-left: -7rem;
  }

  img {
    margin: 2rem 0;
  }
`
const Slice = ({ slice }) => {
  return (
    <Override>
      <Container readable>
        <RichText render={slice.primary.text_content.richText} />
      </Container>
    </Override>
  )
}

export default Slice
