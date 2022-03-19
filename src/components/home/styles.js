import React, { Component } from "react"
import styled from "styled-components"
import { colors } from "@yarno/thread"
import { sm, md, lg, lgPixels } from "../../utils/breakpoints"
import { Avatar, Row } from "../common/styles"

const primaryColour = colors.greenLightSea // yarno green
const secondaryColour = colors.orangeBrightSun // yarno orange

export const Subtitle = styled.span`
  color: ${colors.grayMatterhorn} !important;
  display: block;
  font-style: italic;
  margin-top: 0;
  padding: 0 1rem;
`

// HEADER ------------------

export const Header = styled.header`
  background-color: ${primaryColour};
  overflow: hidden;
  position: relative;

  @media ${sm} {
    padding-top: 11rem;
  }

  @media ${md} {
    padding-top: 15rem;
  }

  @media ${lg} {
    padding-top: 0rem;
  }

  h1,
  h2,
  h3,
  p {
    color: white;
  }

  p {
    margin-bottom: 0;
  }

  svg {
    position: relative;
    z-index: 1;
    margin-top: -2rem;

    @media ${sm} {
      margin-top: 0;
    }
  }
`

export const HeaderContainer = styled.div`
  width: 70rem;
  max-width: 32rem;
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 2rem 2rem 7rem 2rem;
  margin: 0 auto;

  @media ${sm} {
    max-width: 100%;
    padding: 2rem 2rem 5rem 2rem;
  }
`

export const HeaderLeft = styled.div`
  position: relative;

  @media ${md} {
    border: 2px solid rgba(216, 216, 216, 0.3);
    border-bottom-left-radius: 10px;
    margin: 4rem 0 6rem -10rem;
    padding: 3rem;

    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 22rem;
      height: 102%;
      top: -0.2rem;
      right: -0.2rem;
      border: 2px solid ${primaryColour};
      border-bottom: 0;
      border-left: 0;
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 14rem;
      height: 0.2rem;
      right: 0px;
      bottom: -0.2rem;
      border: none;
      border-bottom: 2px solid ${primaryColour};
    }
  }
  @media ${lg} {
    padding: 5rem;
    margin: 6rem 0 8rem -10rem;
  }
`

export const HeaderLeftInner = styled.div`
  padding-right: 0;

  @media ${sm} {
    padding-right: 13rem;
    max-width: 53rem;
  }
  @media ${lg} {
    padding-right: 0rem;
    max-width: 53rem;
  }
`

export const HeaderImage = styled.div`
  height: 20rem;
  width: 12.2rem;
  position: absolute;
  -webkit-transform: rotate(-15deg);
  -ms-transform: rotate(-15deg);
  transform: rotate(-15deg);
  z-index: 1;
  bottom: -2rem;
  right: 0;

  @media ${sm} {
    height: 30rem;
    width: 20rem;
    right: -1rem;
    bottom: 0rem;
  }

  @media screen and (min-width: 41.25em) {
    height: 30rem;
    width: 28rem;
    right: 3rem;
    bottom: 10rem;
  }

  @media ${md} {
    top: -3rem;
    width: 50rem;
    height: 55rem;
    right: -21rem;
  }
`

export const HeaderTitle = styled.h1`
  font-size: 3.2rem;
  margin: 0;
  color: white;

  @media ${md} {
    font-size: 4.6rem;
  }
`

export const HeaderSubtitle = styled.h2`
  font-size: 2rem;
  line-height: 2.4rem;
  margin-top: 4rem;
  margin-bottom: 0;
  position: relative;
  display: inline-block;
  padding-left: 5rem;
  padding-right: 9rem;

  :hover {
    color: ${secondaryColour};
    cursor: pointer;
  }

  i {
    position: absolute;
    font-size: 3.5rem;
    left: 0rem;
    top: 0.7rem;
    z-index: 2;
  }

  @media ${sm} {
    line-height: 4.8rem;
    margin-top: 2rem;
    br {
      display: none;
    }
  }
`

export const ImageBlock = styled.div`
  margin: 4rem 0;

  h4 {
    margin-top: 1rem;
  }

  > div {
    display: block;
  }

  button {
    margin-top: 3rem;
  }
`

// HOW YARNO CAN WORK FOR YOUR BUSINESS -------------

export const HowYarnoWorks = styled.h2`
  margin-top: 0;

  @media ${md} {
    margin-top 3rem;
  }
`

// CUSTOMER STORIES ------------------

export const CustomerWrapper = styled.div`
  text-align: center;
  padding: 2rem 0;
  max-width: 35rem;
  margin: 0 auto;
`

export const Username = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
`

export const Excerpt = styled.div`
  font-style: italic;
  padding-bottom: 2rem;
  border-bottom: 3px solid #aaaaaa;
`

export const Company = styled.p`
  font-weight: 700;
  text-align: center;
`

export const CustomerCard = ({
  avatar,
  placeholder,
  username,
  excerpt,
  company
}) => {
  return (
    <CustomerWrapper>
      {avatar && <Avatar src={avatar} alt={placeholder} />}
      <Excerpt>{excerpt}</Excerpt>
      <Username>{username}</Username>
      <Company>{company}</Company>
    </CustomerWrapper>
  )
}

export const YarnoCards = styled.div`
  @media ${sm} {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -1rem;
  }

  @media ${md} {
    display: flex;
    margin-left: 1rem;
  }
`

export const YarnoCard = styled.div`
  text-align: left;

  @media ${sm} {
    flex: 1;
    min-width: 50%;
    padding: 0 2rem;
  }

  h5 {
    color: ${primaryColour};
    font-weight: 700;
  }
  @media ${md} {
    margin-bottom: 3rem;
    padding: 0 2rem;
    h5 {
      margin-top: 0;
    }
  }
`

const GradientOuter = styled.div`
  height: 100px;
  background: linear-gradient(180deg, ${colors.greenLightSea} 2rem, white 110%);
  padding: 0 2rem;
`

const GradientInner = styled.div`
  height: 100px;
  background: white;
  max-width: ${lgPixels}px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin: 0 auto;
`

export const TopGradientBox = () => {
  return (
    <GradientOuter>
      <Waves />
    </GradientOuter>
  )
}

// LEARNING SCIENCE BEHIND YARNO

export const LearningRow = styled.div`
  max-width: ${lgPixels}px;
  @media ${md} {
    display: flex;
  }
`

export const LearningCard = styled.div`
  background-color: white;
  border-radius: 1rem;
  margin-bottom: 2rem;
  h4 {
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0 2rem 2rem 2rem;
    font-size: 1.6rem;
  }

  img {
    max-width: 30rem;
    max-height: 20rem;
  }

  > div > div {
    > h4,
    span {
      display: none;
    }
  }

  > div > div:first-of-type {
    min-width: 20rem;
    max-width: 20rem;
    margin: 0 auto;
  }

  @media screen and (min-width: 45em) {
    padding: 2rem 3rem;

    > div > div:first-of-type {
      flex: 1;
    }

    > div > div:last-of-type {
      flex: 2;
    }

    h4,
    p,
    span {
      text-align: left;
      margin-left: 3rem;
      margin-right: 0;
    }

    span {
      margin-bottom: 1.5rem;
    }

    > h4,
    > span {
      display: none;
    }

    > div > div {
      > h4,
      span {
        display: block;
      }
    }
  }

  @media ${md} {
    flex: 1;
    margin: 0 1rem 2rem 1rem;
    padding: 2rem 2rem 2rem 2rem;

    > div > div:first-of-type {
      flex: 1;
      height: 15rem;
    }

    h4,
    p,
    span {
      margin-left: 0;
      text-align: center;
    }

    p {
      font-size: 1.8rem;
    }

    > h4,
    > span {
      display: block;
    }

    > div > div {
      > h4,
      span {
        display: none;
      }
    }
  }
`
