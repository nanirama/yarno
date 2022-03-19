import styled from "styled-components"
import { sm, md } from "../../utils/breakpoints"

export const Background = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    #f9f8f8 20%,
    #efefef 40%
  );
  padding: 1rem 0;

  @media ${sm} {
    padding-bottom: 4rem 0;
  }

  @media ${md} {
    padding-bottom: 6rem;
  }
`
