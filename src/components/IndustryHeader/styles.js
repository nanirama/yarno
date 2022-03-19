import React from "react"
import styled from "styled-components"
import { sm, md } from "../../utils/breakpoints"
import { colors } from "@yarno/thread"

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

export const Column = styled.div`
  display: ${props => (props.hideMobile || props.hideMd ? "none" : "flex")};
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex-wrap: ${props => (props.wrap ? "wrap" : "nowrap")};
  flex: ${props => props.flex || 1};
  @media ${sm} {
    display: ${props => (props.hideMd || props.mobileOnly ? "none" : "flex")};
  }

  @media ${md} {
    display: ${props => (props.mobileOnly ? "none" : "flex")};
  }
`

export const Spacer = styled.div`
  height: ${props => (props.size ? `${props.size * 1}rem` : "1rem")};
`

export const HeaderImage = styled.img`
  overflow: hidden;
  min-width: 130%;
  display: none;

  @media ${md} {
    display: block;
  }
`

export const Checklist = styled.div`
  display: flex;
  flex-direction: column;
  @media ${sm} {
    flex-direction: row;
  }
`

export const Container = styled.div`
  p {
    font-weight: 700;
    color: black;
    font-size: 2.4rem;
  }

  ul {
    font-family: "Raleway", sans-serif;
    font-size: 1.9rem;
    color: #7f7f7f;
    flex-basis: 45%;

    i {
      color: ${colors.greenLightSea};
      margin-right: 1rem;
    }

    list-style: none;
    margin: 0;
    padding: 0;

    li {
      position: relative;
      padding-left: 3rem;
      &:before {
        position: absolute;
        top: 0.3rem;
        left: 0;
        display: inline-block;
        font: normal normal normal 14px/1 Jupiter;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        content: "\\F061";
        color: ${colors.greenLightSea};
      }
    }
  }
`

export const MobileOnly = styled.div`
  @media ${props => props.size} {
    display: none;
  }
`
