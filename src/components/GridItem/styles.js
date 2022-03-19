import styled from "styled-components"
import { colors } from "@yarno/thread"
import { md } from "../../utils/breakpoints"

export const Item = styled.div`
  flex: 1 0 40%;
  max-width: 40rem;
  margin: 0 auto 6rem auto;
  
  h3 {
    font-weight: 400;
    color: ${colors.greenLightSea};
    margin-top: 1.5rem;
  }

  img {
    max-width: 10rem;
  }

  @media ${md} {
    min-width: 45rem;   
    margin: 0 1rem 6rem 1rem; 
  }
`