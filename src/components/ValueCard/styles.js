import styled from "styled-components"
import { sm, md, lg } from "../../utils/breakpoints"
import { colors } from "@yarno/thread"
const primaryColour = colors.greenLightSea

const secondaryColour = colors.orangeBrightSun

export const Card = styled.div`
  background-color: white;
  margin: 0 2rem 2rem 2rem;
  padding: 2rem 2rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.8rem;
  letter-spacing: -0.5px;

  @media ${sm} {
    margin: 0 5rem 2rem 5rem;
    padding: 2rem 5rem 4rem 5rem;
  }

  @media ${md} {
    flex-direction: row;
    height: 30rem;
    padding: 2rem 5rem;
  }

  @media ${lg} {
    max-width: 116rem;
    margin: 0 auto 2rem auto;
  }
`

export const CardContent = styled.div`
  text-align: center;

  h2 {
    color: ${primaryColour};
    line-height: 4.2rem;
    margin-top: 0;

    &:after {
      content: "";
      display: block;
      position: absolute;
      margin: 2rem 0;
      width: 12rem;
      height: 4px;
      background: ${props => props.theme.colors.secondary};
    }
  }

  strong {
    color: black;
  }

  p:first-of-type {
    margin-top: 4rem;
    color: #595959;
  }

  @media ${md} {
    text-align: left;
    width: 75%;
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  img {
    max-width: 35rem;
    max-height: 15rem;
    margin: 0 auto;
  }

  @media ${md} {
    height: 30rem;
    width: 25%;
    margin: 0;

    img {
      max-width: 26rem;
      max-height: 20rem;
    }
  }
`

export const Underline = styled.div`
  margin: 2rem auto;
  width: 12rem;
  height: 0.4rem;
  background-color: ${secondaryColour};

  @media ${md} {
    margin: 2rem 0;
  }
`

export const CardSubtitle = styled.p`
  font-weight: 600;
  color: #595959;
  line-height: 2.3rem;
`

export const CardBody = styled.p`
  font-weight: 300;
  margin-bottom: 0;
`
