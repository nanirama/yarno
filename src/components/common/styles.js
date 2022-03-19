import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { colors } from "@yarno/thread"
import { sm, md, xlPixels } from "../../utils/breakpoints"

export const WaveContent = styled.div`
  background-image: linear-gradient(0deg, #efefef 3%, #fbfbfb 100%);
  overflow: hidden;
`

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  ${props => !props.noOverflow && "overflow: hidden"};
`

export const Container = styled.div`
  max-width: ${xlPixels}px;
  margin: 0 auto;
  padding: 0 2rem;
`

export const SiteHeader = styled.h1`
  text-align: center;
  margin: 2rem 0;
`

export const PrimaryButton = styled.div`
  text-align: center;

  a {
    background-color: #25c1a9;
    border-radius: 0.5rem;
    color: #ffffff;
    padding: 1rem;
    margin: 0 auto;
    text-align: center;
    font-weight: 800;
  }

  img {
    width: 1.4rem;
    height: 0.9rem;
  }
`

export const SecondaryButton = styled.div`
  margin: 2rem auto 5rem auto;
  width: 96rem;
  text-align: center;

  a {
    background-color: #f5f5f5;
    border: 2px solid #888888;
    border-radius: 5px;
    color: #888888;
    padding: 1rem;
    margin: 0 auto;
    text-align: center;
    font-weight: 800;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
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
      props.reverseOnTablet &&
      "flex-direction: column-reverse;"} margin-bottom: 7rem;
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

export const Avatar = styled(GatsbyImage)`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 5px solid white;
`

export const Underline = styled.div`
  width: 40%;
  height: 0.3rem;
  min-height: 0.3rem;
  background-color: ${colors.orangeBrightSun};
`

export const LearnMoreBox = styled.div`
  background-color: white;
  height: 30rem;
  width: 30rem;
  border-radius: 10px;
  margin: 1rem;
  padding: 0.5rem;
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.05);
  transition: 0.2s box-shadow ease-out;

  a,
  a:visited {
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

  img {
    height: 60%;
  }
`

export const LearnMoreText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40%;
  padding: 0 1rem 1.5rem 1rem;

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

// Social icons

export const SocialIcon = styled.a`
  background-color: white;
  height: 4rem;
  width: 4rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-right: 1.5rem;
  text-decoration: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.09);
  font-size: 2rem;

  &:hover {
    i {
      color: ${colors.orangeBrightSun};
      opacity: 1;
      transition: 0.2s all ease;
    }
  }

  i {
    color: #333;
    opacity: 0.3;
    display: flex;
    align-items: center;
  }
`

export const Error = styled.span`
  color: ${colors.redContessa};
  font-size: 1.8rem;
  bottom: 1.55rem;
`

export const Success = styled(Error)`
  color: ${colors.greenLightSea};
`
