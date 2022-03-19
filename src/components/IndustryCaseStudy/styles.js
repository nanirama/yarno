import React from "react"
import styled from "styled-components"
import { Column } from "../common/styles"

import { sm, md } from "../../utils/breakpoints"

export const CaseStudyColumn = styled(Column)`
  justify-content: center;
  align-items: flex-end;
  position: relative;
  height: 100%;
  width: 80%;
  display: contents;

  @media ${md} {
    padding-left: 3rem;
    margin: 0;
    width: 100%;
    display: inherit;
  }
`

export const CaseStudyMain = styled.div`
  text-align: left;
  align-items: center;
  margin-top: 1rem;

  img {
    max-width: 20rem;
  }

  cite {
    display: block;
    font-weight: 600;
    color: #595959;
    font-style: normal;
    margin-top: 2.5rem;
  }

  p {
    margin-bottom: 2rem;
  }

  @media ${sm} {
    margin-top: 0;
    padding-right: 2rem;
  }

  button {
    color: #b44cc8;
    border-color: #b44cc8;
  }
`

export const CaseStudyImage = styled.img`
  min-width: 90%;
  margin-top: 2rem;

  @media ${md} {
    position: absolute;
    top: 5rem;
    margin-left: 1.5rem;
    min-width: 100%;
    right: 0rem;
    bottom: 0rem;
    top: inherit;
  }
`
