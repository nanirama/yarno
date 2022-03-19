import styled from "styled-components"
import { colors } from "@yarno/thread"
import { sm, md, lg } from "../../utils/breakpoints"

const primaryColor = colors.greenLightSea
const secondaryColour = colors.orangeBrightSun
const avatarSize = "132px"

export const TeamCard = styled.div`
  max-width: 22rem;
  flex: 0 0 75%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 3rem 2% 3rem 2%;
  color: #595959;

  img[data-main-image] {
    border-radius: ${avatarSize};
    max-width: ${avatarSize};
    margin: 0 auto;
    border: 0.5px solid #f4f4f4;
    box-shadow: 1px 1px 3px #f4f4f4;
    border: 5px solid white;
  }

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
  }

  @media ${md} {
    flex: 0 0 46%;
    margin: 3rem 2% 4rem 2%;
    max-width: 21rem;

    h4 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.6rem;
    }
  }

  @media ${lg} {
    flex: 0 0 18%;
    margin: 3rem 1% 4rem 1%;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`

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
