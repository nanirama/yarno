import styled from "styled-components"
import { sm } from "../../utils/breakpoints"

export const GetStarted = styled.div`
  width: fit-content;
  margin: -2rem auto 1rem auto;

  @media ${sm} {
    margin: 0;
  }
`

export const Header = styled.header`
  width: 100%;
  margin-top: 8rem;
`
