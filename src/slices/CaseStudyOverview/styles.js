import { md } from "../../utils/breakpoints"
import styled from "styled-components"

export const WhoTheyAre = styled.div`
  margin: 3rem 0;

  h2 {
    position: relative;
    display: inline-block;
    &:before {
      content: " ";
      position: absolute;
      height: 4px;
      width: 14rem;
      background: ${props => props.theme.colors.primary};
      top: -2.7rem;
    }
  }

  @media ${md} {
    margin: 6rem 3rem;
    > div {
      display: flex;
    }

    > div > div:first-of-type {
      margin-right: 8rem;
    }
  }
`

export const FeaturesUsed = styled.div`
  background: #ffffff;
  padding: 2rem 3rem;
  box-shadow: 0 2px 9px 1px rgba(0, 0, 0, 0.13);
  border-radius: 5px;
  margin-bottom: 4rem;
  min-width: 100%;

  @media ${md} {
    min-width: 32rem;
  }

  h4 {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    min-height: 4rem;
    padding-left: 6.5rem;
    position: relative;
    font-size: 2rem;
  }

  li:last-of-type {
    masrgin-bottom: 0;
  }

  img {
    position: absolute;
    left: 0;
  }
`
