import React from "react"
import { colors } from "@yarno/thread"
import styled from "styled-components"
import { md } from "../../utils/breakpoints"

const borderWidth = "2px"
const Container = styled.div`
  text-align: center;
  position: relative;
  padding-bottom: 2rem;
  margin-bottom: 2rem;

  &:after {
    content: "";
    position: absolute;
    bottom: -2rem;
    width: 40%;
    left: 30%;
    right: 30%;
    border-bottom: 4px solid ${colors.greenLightSea};
  }

  @media ${md} {
    text-align: left;
    border-color: ${colors.greenLightSea};
    border-style: solid;
    border-width: ${borderWidth};
    border-right-width: 0;
    border-radius: 1rem 0 0 1rem;
    padding: 5rem 0 5rem 4rem;

    &:before {
      content: "";
      position: absolute;
      top: -${borderWidth};
      right: 0;
      width: 25%;
      border-top: ${borderWidth} solid white;
    }

    &:after {
      content: "";
      position: absolute;
      right: 0;
      bottom: -${borderWidth};
      width: 5%;
      left: 95%;
      border-top: ${borderWidth} solid white;
      border-bottom: 0;
    }
  }

  h1 {
    line-height: 1;
    margin: 0;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
  }
`

const OutlinedHeader = ({ title, subtitle, description }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {description}
    </Container>
  )
}
export default OutlinedHeader