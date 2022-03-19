import React from "react"
import styled from "styled-components"
import { colors } from "@yarno/thread"

export const TopicList = styled.ul`
  text-align: center;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3rem 0;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    display: inline-block;
    color: #9c9e9e;
    font-weight: 700;
    margin: 0.5rem 2rem 0.5rem 2rem;
    text-transform: uppercase;

    &[aria-current="page"] {
      color: ${colors.greenLightSea};
      border-bottom: 4px solid ${colors.greenLightSea};
    }
  }
`
