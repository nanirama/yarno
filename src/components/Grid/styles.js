import styled from "styled-components"
import { md, lg } from "../../utils/breakpoints"

export const Background = styled.div`
  padding: 2rem;
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.02) 1%,
    rgba(0, 0, 0, 0) 100%
  );
`

export const CardsContainer = styled.div`
  @media ${md} {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2rem 5rem;
    max-width: 120rem;
    margin: 0 auto;
  }
`
