import styled from "styled-components"
import { md } from "../../utils/breakpoints"

export const Outer = styled.div`
  padding-top: 3rem;
  background: ${props => props.theme.colors.grayBackground};
  text-align: center;
  > div > div {
    padding: 3rem 3rem 0 3rem;
  }
  @media ${md} {
    margin-top: 7rem;
    > div > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 3rem;
    }
  }
`
