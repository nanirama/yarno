import styled from "styled-components"
import { md } from "../../utils/breakpoints"

export const Background = styled.div`
  margin: 3rem 0;
  padding: 3rem 0;
  background: rgb(248, 248, 248);
  text-align: center;

  @media ${md} {
    text-align: left;
    margin: 5rem 0;
    padding: 5rem 0;
  }
`

export const Split = styled.div`
  @media ${md} {
    display: flex;
    align-items: center;

    > div {
      flex: 1;
    }

    > div:last-of-type {
      padding-left: 5rem;
    }
  }
`
