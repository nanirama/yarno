import React from "react"
import styled from "styled-components"
import { sm, md } from "../../utils/breakpoints"

export const VideoContainer = styled.div`
  text-align: center;
  margin: 5rem 0;

  h2 {
    color: ${props => props.theme.colors.primary};
    padding: 0 2rem;
  }

  @media ${md} {
    h2 {
      margin-top: 6rem;
      margin-bottom: 4rem;
    }
  }
`

export const VideoStripes = styled.div`
  position: relative;
  margin: 3rem 0;

  > svg {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 0;
    right: 0;
    margin-top: -30px;
  }

  > div {
    position: relative;
    z-index: 2;
    margin: 0 3rem;

    @media ${sm} {
      margin: 0 auto;
      max-width: 70rem;
    }
  }
`
