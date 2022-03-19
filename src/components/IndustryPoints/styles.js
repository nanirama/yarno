import React from "react"
import styled from "styled-components"

import { sm, md } from "../../utils/breakpoints"

export const TrainingIcons = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 2rem;
  flex-direction: column;

  @media ${sm} {
    justify-content: space-between;
    flex-direction: row;
    margin-top: 3rem;
  }

  @media ${md} {
    margin-top: 5rem;
  }
`

export const TrainingIconImageWrap = styled.div`
  overflow: hidden;
  min-width: 8rem;
  text-align: center;
  margin-right: 1rem;
  @media ${sm} {
    width: 12rem;
    margin: 0 auto;
  }
`

export const TrainingIcon = styled.div`
  flex-basis: 20rem;
  display: flex;
  flex: 1;
  flex-direction: row;
  text-align: left;
  margin-bottom: 2rem;

  img {
    max-width: 12rem;
  }

  h6,
  p {
    padding-left: 1rem;
    margin: 0;
  }

  h6 {
    text-transform: uppercase;
    font-size: 1.5rem;
    margin: 0rem auto;
  }

  @media ${sm} {
    text-align: center;
    flex-direction: column;
    flex-basis: 30%;
    margin: 2rem 1.5rem 2rem 1.5rem;

    h6 {
      margin-bottom: 1rem;
    }
  }

  @media ${md} {
    flex-basis: 20%;
    p {
      padding: 0;
    }
    h6 {
      padding: 0;
      font-size: 1.9rem;
      margin-top: 2rem;
    }
  }
`
