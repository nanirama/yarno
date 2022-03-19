import styled from "styled-components";
import { colors } from "@yarno/thread";
import { sm, md, lg } from "../../utils/breakpoints";
import { greenOutline } from "../../images";

const primaryColour = colors.greenLightSea;
const secondaryColour = colors.orangeBrightSun;

export const Header = styled.header`
  background-color: white;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;

  @media ${md} {
    overflow: visible;
  }
`;

export const HeaderContainer = styled.div`
  width: 60rem;
  margin: 10rem 3rem 2rem 3rem;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  text-align: center;

  @media ${sm} {
    padding: 5rem;
    background-size: 70% 100%;
    text-align: left;
    background-image: url(${greenOutline});
    background-repeat: no-repeat;
    margin: 10rem 3rem 3rem 3rem;
  }

  @media ${md} {
    margin: 12rem 3rem 5rem 3rem;
  }
`;

export const HeaderLeft = styled.div`
  padding-right: 0;
  @media ${sm} {
    padding-right: 15rem;
  }
  @media ${md} {
    padding-right: 10rem;
  }
`;

export const HeaderImage = styled.div`
  display: none;
  height: 35rem;
  width: 24.4rem;
  bottom: 0;
  left: 62%;
  position: absolute;
  z-index: 1;
  overflow: visible;
  opacity: 0.2;

  @media ${sm} {
    display: inline-block;
    opacity: 1;
    bottom: 3rem;
    left: 62%;
  }

  @media ${md} {
    height: 40rem;
    width: 27.8rem;
    bottom: 0;
  }
`;

export const HeaderTitle = styled.h1`
  color: #333333;
  margin: 0;
  padding-top: 2rem;
  line-height: 1;
`;

export const HeaderSubtitle = styled.h2`
  font-weight: 500;
  color: #595959;
  line-height: 1.9rem;
  font-size: 2rem;

  @media ${md} {
    font-size: 2.4rem;
  }
`;

export const HeaderBody = styled.p`
  @media ${md} {
    width: 34rem;
  }
`;

export const HeaderUnderline = styled.div`
  margin: 3rem auto 0 auto;
  width: 15rem;
  height: 0.5rem;
  background-color: ${primaryColour};

  @media ${sm} {
    display: none;
  }
`;

// Cards

export const CardsContainer = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    #f9f8f8 6%,
    #efefef 10%
  );
  padding-top: 1rem;

  @media ${sm} {
    padding-top: 4rem;
  }

  @media ${md} {
    padding-top: 6rem;
  }
`;

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
`;

export const CardContent = styled.div`
  text-align: center;

  h2 {
    color: ${primaryColour};
    line-height: 4.2rem;
    margin-top: 0;
  }

  @media ${md} {
    text-align: left;
    width: 75%;
  }
`;

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
`;

export const Underline = styled.div`
  margin: 2rem auto;
  width: 12rem;
  height: 0.4rem;
  background-color: ${secondaryColour};

  @media ${md} {
    margin: 2rem 0;
  }
`;

export const CardSubtitle = styled.p`
  font-weight: 600;
  color: #595959;
  line-height: 2.3rem;
`;

export const CardBody = styled.p`
  font-weight: 300;
  margin-bottom: 0;
`;

export const Quote = styled.p`
  font-style: italic;
  font-weight: 300;

  strong {
    padding-left: 0.5rem;
    font-style: normal;
  }
`;

// Button

export const ButtonContainer = styled.div`
  text-align: center;
  padding: 5rem 0 4rem 0;
`;
