import styled from "styled-components"
import { colors } from "@yarno/thread"
import { biteImage } from "../../images"
import { sm, md, lg } from "../../utils/breakpoints"

export const TopSection = styled.div`
  background: ${colors.grayWhiteSmoke};
  margin-left: 2rem;
  padding: 3rem 3rem 12rem 3rem;
  letter-spacing: -0.29px;

  h2 {
    color: #333333;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  p {
    font-weight: 300;
  }

  @media ${sm} {
    margin-left: 3rem;
  }

  @media ${md} {
    padding-bottom: 8rem;
    margin-left: 5rem;
    > div {
      margin-left: 45rem;
    }
  }
`

export const FancyLineDecoration = styled.div`
  margin-bottom: 2rem;
  width: 10rem;
  height: 0.3rem;
  background-color: ${colors.greenLightSea};

  @media ${md} {
    margin-top: 3rem;
    margin-left: 0;
  }
`

export const Bite = styled.div`
  background: url(${biteImage});
  background-position: top right;
  background-size: cover;
  background-repeat: no-repeat;
  height: 17.3rem;
  width: 30.4rem;
  padding: 2rem 2rem 4rem 2rem;
  margin-top: -9rem;

  p {
    color: white;
  }

  p:first-child {
    margin-top: 0.5rem;
    font-style: italic;

    @media ${md} {
      margin-top: 0;
    }
  }

  span {
    text-transform: uppercase;
    font-weight: 600;
  }

  hr {
    color: white;
    height: 0.3rem;
    background-color: white;
    border: none;
  }

  @media ${md} {
    width: 45rem;
    margin-top: -10rem;
    padding-left: 5rem;
  }

  @media ${lg} {
    height: 19rem;
  }
`
