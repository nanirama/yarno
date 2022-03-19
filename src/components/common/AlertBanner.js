import React from "react"
import { RichText } from "prismic-reactjs"
import { colors } from "@yarno/thread"
import styled from "styled-components"
import { sm } from "../../utils/breakpoints"

const Background = styled.div`
  height: 6rem;
  background: ${props => (props.isHome ? "white" : colors.greenLightSea)};
  color: ${props => (props.isHome ? colors.greenLightSea : "white")};
  display: flex;
  padding: 0 2rem;

  span {
    display: none;
  }

  @media ${sm} {
    height: 4rem;
    line-height: 1.1em;

    span {
      display: inline;
    }
  }

  p {
    color: ${props => (props.isHome ? colors.greenLightSea : "white")};
  }
`

const Linked = styled.a`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  p {
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
    text-align: center;
    @media ${sm} {
      font-size: 1.5rem;
    }
  }
`

const AlertBanner = ({ isHome, alertBanner }) => {
  if (!alertBanner) {
    return null
  }

  const {
    data: {
      text: { richText },
      url: { url }
    }
  } = alertBanner

  return (
    <Background isHome={isHome}>
      <Linked href={url}>
        <RichText render={richText} />
      </Linked>
    </Background>
  )
}

export default AlertBanner
