import styled from "styled-components"
import { colors } from "@yarno/thread"
import { sm, lg, md } from "../../utils/breakpoints"

export const InlineSubscribe = styled.form`
  margin-top: -3rem;
  margin-bottom: 3rem;
  max-width: 40rem;
  margin: -3rem auto 3rem auto;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  input {
    text-align: center;
    height: 4rem;
    width: 100%;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 0.7rem;
    opacity: 0.57;
    font-size: 1.6rem;
    color: #595959;
    line-height: 2.3rem;

    &:focus {
      outline-color: ${colors.greenLightSea};
    }
  }

  button {
    border-radius: 0.7rem;
    margin-top: 1rem;
    min-width: 13rem;
  }

  @media ${md} {
    div {
      flex-direction: row;
      max-width: 100%;
    }

    input {
      border-radius: 0;
      border-top-left-radius: 0.7rem;
      border-bottom-left-radius: 0.7rem;
      width: 40rem;
      padding-left: 2rem;
      text-align: left;
    }

    button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      margin: 0;
    }
  }
`
export const SubscribeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: normal;

  input {
    width: 100%;
    height: 4.8rem;
    font-size: 1.6rem;
    font-family: "Open Sans", sans-serif;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    :focus {
      outline-color: ${colors.greenLightSea};
    }
    ::placeholder {
      color: ${colors.grayAluminium};
    }
    @media ${lg} {
      width: 35rem;
    }
  }

  button {
    color: #939393;
    border-color: #939393;

    :hover {
      color: ${colors.grayDark};
      border-color: ${colors.grayDark};
    }
  }

  @media ${md} {
    align-items: flex-start;
    width: initial;
  }
`

export const Error = styled.span`
  color: ${colors.redContessa};
  font-size: 1.8rem;
  bottom: 1.55rem;
`

export const Success = styled(Error)`
  color: ${colors.greenLightSea};
`
