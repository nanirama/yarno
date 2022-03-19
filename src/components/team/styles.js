import styled from "styled-components"
import { colors } from "@yarno/thread"
import { sm, md, lg } from "../../utils/breakpoints"

const primaryColor = colors.greenLightSea
const secondaryColour = colors.orangeBrightSun

// Common

export const GreenUnderline = styled.div`
  height: 0.3rem;
  width: 100%;
  margin: 0 auto;
  background-color: ${primaryColor};

  ${props =>
    props.heading &&
    `
    width: 15rem;
    height: 0.5rem;
    margin: 0rem auto 5rem auto;
    
    @media ${sm} {
      margin-top: -2rem;
    }
  
    @media ${md} {
      margin-top: -4rem;
    }`}
`

// Team Cards

export const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 120rem;
  margin: 0 auto;
  justify-content: center;
  padding-bottom: 3rem;
`

export const TeamCard = styled.div`
  max-width: 22rem;
  flex: 0 0 75%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 3rem 2% 3rem 2%;
  color: #595959;

  h4 {
    text-transform: uppercase;
    margin-bottom: 0.6rem;
  }

  h4,
  p {
    text-align: center;
    font-size: 1.6rem;
  }

  p {
    font-style: italic;
    margin: 0 auto 0.6rem auto;
    white-space: nowrap;
  }

  @media ${md} {
    flex: 0 0 46%;
    margin: 3rem 2% 4rem 2%;
    max-width: 21rem;

    h4,
    p {
      font-size: 1.8rem;
    }
  }

  @media ${lg} {
    flex: 0 0 18%;
    margin: 3rem 1% 4rem 1%;
  }
`

export const OuterImage = styled.div`
  background-color: white;
  margin: 0 auto;
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  border: 0.5px solid #f4f4f4;
  box-shadow: 1px 1px 3px #f4f4f4;
`

export const TeamImage = styled.div`
  border-radius: 50%;
  border: 5px solid white;
  overflow: hidden;
  height: 14rem;
  width: 14rem;
  margin: 0.5rem auto;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`

// Join us CTA

export const JoinYarno = styled.div`
  background-color: ${secondaryColour};
  text-align: center;
  padding: 5rem 2rem;

  button {
    margin-top: 2rem;
  }

  h2 {
    color: white;
    margin-top: 0;
  }

  @media ${sm} {
    padding: 5rem;
  }
`

// Advisors

export const Advisors = styled.div`
  background-color: #efefef;
  text-align: center;

  h2 {
    color: #595959;
    text-align: center;
    margin: 0 auto;
    padding: 4rem 0 2rem 0;
  }

  @media ${md} {
    flex-direction: row;

    h2 {
      padding: 4rem 0;
    }
  }
`

export const AdvisorCardsContainer = styled.div`
  display: flex;
  color: #595959;
  max-width: 120rem;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;

  @media ${md} {
    flex: 0 0 30%;
  }
`
