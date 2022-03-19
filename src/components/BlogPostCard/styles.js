import styled from "styled-components"
import { Link } from "gatsby"
import { md, lg, xl } from "../../utils/breakpoints"

export const InnerWrapper = styled.div`
  padding: 0.8rem;
  margin-bottom: 3rem;
`

export const Card = styled(Link)`
  background: #ffffff;
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  text-decoration: none;
  max-width: 50rem;
  margin: 0 auto 2rem auto;
  position: relative;
  padding-bottom: 10rem;
  display: block;

  &:hover {
    top: 4px;
  }

  img {
    max-width: 100%;
  }

  header {
    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      aspect-ratio: 397 / 262;
      max-height: 35rem;
      margin: 0;
      background: #f2f2f2;
      border-radius: 10px 10px 0 0;
    }

    img {
    }

    h2 {
      color: #595959;
      font-size: 2.2rem;
      letter-spacing: -0.4px;
      text-align: center;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  section {
    text-align: center;
    padding-left: 2rem;
    padding-right: 2rem;

    p {
      font-size: 1.6rem;
    }

    div span {
      display: block;
      font-size: 1.3rem;
      font-weight: 300;
      text-align: center;
      font-style: italic;
      line-height: 2.1rem;
      margin-top: 1rem;
    }
  }

  footer {
    border-top: 2px solid #f3f3f3;
    padding: 0.5rem 1rem;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    img {
      display: block;
      margin: -3rem auto 1rem auto;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
    }

    div {
      display: flex;
      justify-content: space-between;
      min-height: 6.1rem;
      margin-top: -3rem;

      small {
        display: block;
        color: #25c1a9;
        line-height: 2.1rem;
        font-weight: 700;
        text-transform: uppercase;
        margin: 2rem;
      }

      img {
        width: 1.4rem;
        height: 1rem;
        margin: auto 2rem;
      }
    }
  }

  @media ${md} {
    min-width: 46%;
    max-width: 46%;

    section p {
      font-size: 1.8rem;
    }
  }

  @media ${lg} {
    min-width: 30%;
    max-width: 30%;
  }
`
