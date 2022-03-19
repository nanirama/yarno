import styled from "styled-components"
import { md } from "../../utils/breakpoints"

export const TextBlock = styled.section`
  text-align: center;
  padding: 2rem 0;
  background-color: ${props => props.backgroundColour || "white"};
  @media ${md} {
    text-align: ${props => (props.align != "center" ? "left" : "center")};
    padding: 4rem 0;
  }

  ul {
    display: inline-block;
    text-align: left;
  }
`

export const Inner = styled.div`
  padding: 0 2rem;
  figure,
  img {
    max-height: 30rem;
  }

  figure {
    margin: 0;
    iframe {
      width: 100%;
      height: 230px;
    }
  }

  @media ${md} {
    display: flex;
    ${props =>
      props.align == "left" &&
      `
      flex-direction: row-reverse;
      figure, image {
        margin-left: 1rem;
      }
    `}
    ${props =>
      props.align == "right" &&
      `
      flex-direction: row;
      figure, image {
        margin-right: 1rem;
      }
    `}
    figure {
      text-align: center;
      flex: 1;
      display: flex;
      justify-content: ${props =>
        props.align == "left"
          ? "flex-end"
          : props.align == "right"
          ? "flex-start"
          : "center"};
      align-items: center;
    }
    figure,
    img {
      max-height: inherit;
    }
    > div {
      flex: 2;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContentInner = styled.div`
  max-width: 70rem;
`
