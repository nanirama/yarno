import styled from "styled-components"
import { md } from "../../utils/breakpoints"

export const Container = styled.div`
  background: ${props => props.theme.colors.grayBackground};
  overflow: hidden;
  padding: 3rem 0;

  blockquote {
    margin: 0 3rem;
    padding-left: 2rem;
    font-style: italic;
    border-left: 5px solid ${props => props.theme.colors.primary};

    footer {
      font-style: normal;
      color: #9f9f9f;
      p {
        font-weight: bold;
        margin-bottom: 0.3rem;
      }
    }
  }

  @media ${md} {
    padding: 8rem 0;
    background: ${props => props.theme.colors.grayBackground};

    blockquote {
      max-width: 77rem;
      margin: 0 auto;
      padding-left: 3rem;
    }
  }
`
