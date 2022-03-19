import styled from "styled-components"
import { colors } from "@yarno/thread"
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
  background-image: url("https://images.prismic.io/yarno/882d5b09-2ee6-4baf-8b7c-24a809f39079_teeth.png?auto=compress,format");
  background-color: ${props => props.theme.colors.secondary};
  background-position: top right;
  background-size: 100px 80px;
  background-repeat: no-repeat;
  border-radius: 6px;
  padding: 2rem 2rem 4rem 2rem;
  overflow: hidden;
  margin-top: -9rem;
  max-width: 95%;

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

  @media ${sm} {
    max-width: 75%;
  }

  @media ${md} {
    max-width: 45rem;
    margin-top: -10rem;
    padding: 2rem 3rem;
  }

  @media ${lg} {
    height: 19rem;
  }
`
