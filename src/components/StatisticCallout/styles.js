import React from "react"
import { colors } from "@yarno/thread"
import styled from "styled-components"
import { sm, md } from "../../utils/breakpoints"

export const Container = styled.div`
  width: 100%;

  @media ${sm} {
    display: flex;
    flex-direction: row;
  }
`
export const Section = props => {
  const backgroundColor = props.bgColor ? props.bgColor : "none"
  const backgroundImage = props.bgImage ? props.bgImage : "none"

  const style = {
    display: "flex",
    justifyContent: "center",
    backgroundColor,
    backgroundImage,
    width: "100%"
  }

  return (
    <div style={style}>
      <SectionDiv {...props}>{props.children}</SectionDiv>
    </div>
  )
}

const SectionDiv = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.rowsOnMobile || props.rowsOnTablet
      ? "column"
      : props.columns
      ? "row"
      : "column"};
  ${props =>
    props.reverseOnMobile ||
    (props.reverseOnTablet && "flex-direction: column-reverse;")};
  width: 100%;
  text-align: center;
  align-items: center;
  padding: 0 2rem;
  max-width: 120rem;

  @media ${sm} {
    flex-direction: ${props => (props.columns ? "row" : "column")};
    ${props => props.columns && props.rowsOnTablet && "flex-direction: column"};
    ${props =>
      props.reverseOnTablet && "flex-direction: column-reverse;"} margin: 5rem;
  }

  @media ${md} {
    ${props => props.columns && props.rowsOnTablet && "flex-direction: row"};
  }

  h1,
  h2,
  h3,
  p {
    max-width: 75rem;
  }
`

export const Stat = styled.div`
  border-top: 18px solid #f4f4f4;
  border-bottom: 18px solid #f4f4f4;
  color: ${props =>
    props.secondary ? colors.orangeBrightSun : colors.greenLightSea};
  font-family: "Open Sans Semibold", sans-serif;
  padding: 4.5rem 0;
  margin: 3rem 0;
  display: block;

  h1 {
    font-family: "Open Sans Semibold", sans-serif;
    font-weight: "700";
    font-size: 8.5rem;
    display: inline-block;
  }

  span {
    font-size: 3rem;
    padding-top: 1.5rem;
  }

  div {
    display: flex;
    justify-content: center;
    font-size: 2.8rem;
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    max-width: 90%;
    margin: 0 auto;
  }

  @media ${md} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 5rem 0;

    div {
      font-size: 3.3rem;
      max-width: 60%;
      text-align: left;
    }

    h1 {
      margin-bottom: 0;
    }
  }
`

export const Quote = styled.div`
  text-align: center;
  // margin-left: 0;
  margin-bottom: 2rem;

  cite {
    font-family: "Open Sans Bold", sans-serif;
    font-weight: 600;
    color: ${props =>
      props.secondary ? colors.orangeBrightSun : colors.greenLightSea};
    text-transform: uppercase;
    font-style: normal;
  }

  blockquote {
    font-style: italic;
    font-family: "Open Sans", sans-serif;
    font-size: 1.9rem;
    margin-left: 0;
    margin-right: 0;
  }

  hr {
    height: 3px;
    border: none;
    margin-top: 2rem;
    margin-bottom: 2rem;
    background-color: #f4f4f4;
    width: 60%;
    margin-left: auto;
  }

  sub {
    font-family: "Open Sans Bold", sans-serif;
    font-weight: 600;
  }

  @media ${sm} {
    text-align: left;
    margin-left: ${props => (props.secondary ? 0 : "10%")};
    margin-right: ${props => (props.secondary ? "10%" : 0)};
    margin-bottom: 0;

    hr {
      margin-left: 0;
    }
  }
`
