import styled from "styled-components"
import React from "react"
import { sm, md, xlPixels } from "../../utils/breakpoints"

export const LearnMoreBox = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 1rem 2rem;
  padding: 2rem;
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.05);
  transition: 0.2s box-shadow ease-out;
  height: 100%;
  width: 100%;
  flex: 1;

  a,
  a:visited {
    display: block;
    text-decoration: none;
    color: #333;

    span {
      font-family: "Raleway", sans-serif;
      color: #b44cc8;
      text-decoration: none;
      font-weight: 800;
    }
  }

  :hover {
    cursor: pointer;
    box-shadow: 7px 4px 12px 0 rgba(0, 0, 0, 0.2);
    transition: 0.2s box-shadow ease-in;
  }
`

export const LearnMoreText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40%;

  h5 {
    margin-top: 1rem;
  }
  a,
  a:visited,
  span {
    font-family: "Raleway", sans-serif;
    color: #b44cc8;
    text-decoration: none;
    font-weight: 800;

    i {
      margin-left: 2rem;
    }
  }

  span:hover {
    cursor: pointer;
  }
`
export const Row = styled.div`
  display: ${props => (props.desktopOnly ? "none" : "flex")};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: ${props => (props.wrapping ? "wrap" : "nowrap")};

  @media ${md} {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`

export const Spacer = styled.div`
  height: ${props => (props.size ? `${props.size * 1}rem` : "1rem")};
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
  margin-bottom: 4rem;

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
