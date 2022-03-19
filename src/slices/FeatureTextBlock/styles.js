import React from "react"
import styled from "styled-components"
import { colors } from "@yarno/thread"
import { sm, md } from "../../utils/breakpoints"

export const TrainingImageContainer = styled.div`
  width: 100%;
  box-shadow: 3px 3px 13px rgba(0, 0, 0, 0.4);
  margin-bottom: 3rem;
`

export const TrainingTitle = styled.p`
  color: ${colors.greenLightSea};
  font-size: 1.8rem;
  font-family: "Raleway", sans-serif;
  position: relative;
  margin: 0;

  @media ${sm} {
    font-size: 2rem;
  }

  @media ${md} {
    font-size: 2.4rem;
  }
`

export const TrainingSubtitle = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1.25em;
  font-size: 1.6rem;
  font-family: "Raleway", sans-serif;
  position: relative;
  font-weight: 500;
  color: #333;

  @media ${sm} {
    font-size: 1.9rem;
  }

  @media ${md} {
    font-size: 2.2rem;
  }
`

export const TrainingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  align-items: center;
  max-width: 120rem;
  ${props => props.reverseOnTablet && "flex-direction: column-reverse;"}

  @media ${md} {
    flex-direction: row;
  }
`

export const TrainingInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;

  @media ${md} {
    width: 75%;
    margin-left: 0;
    margin-bottom: 0;
    ${props => props.rightSide && `margin-left: 5rem;`};
  }
`
