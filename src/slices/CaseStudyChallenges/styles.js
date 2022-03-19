import React from "react"
import styled from "styled-components"
import { md } from "../../utils/breakpoints"

export const Challenges = styled.div`
  margin: 7rem 0rem 0 0rem;
  > div {
    padding: 0 3rem;
  }
  &:after {
    position: relative;
    display: block;
    content: " ";
    height: 60px;
    width: 100%;
    background: linear-gradient(
      to bottom,
      white,
      ${props => props.theme.colors.grayBackground}
    );
  }

  h2 {
    position: relative;
    &:before {
      content: " ";
      position: absolute;
      height: 4px;
      width: 14rem;
      background: ${props => props.theme.colors.primary};
      top: -2.7rem;
      left: 0;
    }
  }

  @media ${md} {
    margin: 8rem 0;
    > div {
      max-width: 85rem;
    }
    h2 {
      text-align: center;

      &:before {
        left: 50%;
        margin-left: -7rem;
      }
    }
  }
`
