import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import { md } from "../../utils/breakpoints"
import Container from "../../components/common/Container"

export const Addressed = styled.div`
  margin: 3rem 0rem;

  h2 {
    margin-top: 5rem;
    position: relative;
    display: inline-block;
    &:before {
      content: " ";
      position: absolute;
      height: 4px;
      width: 14rem;
      background: ${props => props.theme.colors.primary};
      top: -2.7rem;
    }
  }

  @media ${md} {
    margin: 6rem 3rem;

    h2 {
      margin-top: 2rem;
    }
    display: flex;
    div:first-of-type {
      padding-right: 6rem;
    }
    div {
      flex: 1;
    }
  }
`

const Slice = ({ slice }) => {
  return (
    <Container>
      <Addressed>
        <div>
          <img
            src={slice.primary.addressed_image.url}
            alt={slice.primary.addressed_image.alt}
          />
        </div>
        <div>
          <RichText render={slice.primary.addressed_content.richText} />
        </div>
      </Addressed>
    </Container>
  )
}

export default Slice
