import React from "react"
import styled from "styled-components"
import { sm, md, lg } from "../../utils/breakpoints"

export const ContentImageContainer = styled.div`
  text-align: right;
  max-height: 40rem;
  margin-right: 2rem;

  @media ${sm} {
    text-align: center !important;
  }

  @media ${md} {
    max-height: 45rem;
    margin-right: 4rem;

    img {
      height: 45rem;
    }
  }
`
