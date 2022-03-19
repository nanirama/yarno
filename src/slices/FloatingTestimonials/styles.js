import styled from "styled-components"
import { backgroundLines } from "../../images"
import { sm, md } from "../../utils/breakpoints"
import { colors } from "@yarno/thread"

export const Container = styled.div`
  background-image: url(${backgroundLines});
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  margin: 0 auto;
  padding: 5rem 2rem;
  position: relative;

  > svg {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 0;
    right: 0;
    margin-top: -30px;
  }

  h2 {
    margin-bottom: 2rem;
    margin-top: 0;
  }

  @media ${sm} {
    padding: 5rem 3rem;
  }

  @media ${md} {
    padding: 5rem;
    background-size: contain;
  }
`

export const CardsContainer = styled.div`
  height: 33rem;
  width: 30rem;
  margin: 0 auto;
  overflow: hidden;
  z-index: 2;
  position: relative;

  @media ${md} {
    margin: 3rem 0;
    width: 100%;
    height: 35rem;
  }
`

export const Carousel = styled.div`
  // overflow-x: scroll;
  display: flex;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  margin: 0;
  position: relative;
  transition: transform 0.5s;
  transform: translateX(${props => props.scrollValue}px);

  @media ${md} {
    overflow-x: auto;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    justify-content: space-around;
    max-width: 128rem;
  }
`

export const Card = styled.div`
  background: white;
  box-shadow: 0 2px 9px 1px rgba(0, 0, 0, 0.13);
  border-radius: 5px;
  color: #333333;
  font-size: 1.4rem;
  width: 28rem;
  padding: 1.5rem;
  text-align: left;
  margin: 2rem 1rem 3rem 1rem;
  scroll-snap-align: start;
  flex-shrink: 0;

  ${props =>
    props.shiftDown &&
    `
    align-self: flex-end;
  `}

  ${props =>
    props.shiftUp &&
    `
    align-self: flex-start;
  `}

  p {
    font-style: italic;
    font-weight: 500;
    color: #333333;
  }

  hr {
    height: 0.3rem;
    background-color: #f4f4f4;
    border: none;
    width: 10rem;
    margin: 0 0 1rem 0;
    align: left;
  }

  span {
    font-weight: 600;
  }
`

export const CarourselButton = styled.a`
  display: inline-flex;
  width: 1.5rem;
  height: 1.5rem;
  background: ${colors.graySilver};
  text-decoration: none;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 0.5rem;

  @media ${md} {
    display: none;
    width: 100%;
  }

  ${props =>
    props.isgreen == "true" &&
    `
    background: ${colors.greenLightSea};
  `}
`
