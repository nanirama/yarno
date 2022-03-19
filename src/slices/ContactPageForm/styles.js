import styled from "styled-components"
import { colors } from "@yarno/thread"
import { sm, md, lg } from "../../utils/breakpoints"
const primaryColour = colors.greenLightSea

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 120rem;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 2rem;

  @media ${sm} {
    padding: 0 3rem 5rem 3rem;
  }

  @media screen and (min-width: 50em) {
    flex-direction: row;
  }

  @media ${md} {
    padding: 0 5rem 5rem 5rem;
  }
`

export const ContactSales = styled.div`
  width: 100%;
  border-top: 1rem solid ${primaryColour};
  border-radius: 7px;
  background: #ffffff;
  box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.13);
  padding: 2rem;

  h2 {
    color: ${primaryColour};
    text-align: center;
    font-size: 2.6rem;
  }

  @media ${sm} {
    padding: 5rem;

    h2 {
      margin-top: 1rem;
      font-size: 3rem;
    }
  }

  @media ${md} {
    width: 70%;

    h2 {
      font-size: 3.4rem;
    }
  }

  @media ${lg} {
    h2 {
      font-size: 3.906rem;
    }
  }
`

export const ContactForm = styled.form`
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: left;
  margin-top: -2rem;

  label {
    margin: 0.5rem 0;
  }

  input,
  textarea {
    background-color: #f0f5f5;
    border-radius: 1px;
    border: none;
    font-size: 1.6rem;
    padding-left: 1rem;
    margin-bottom: 1rem;
  }

  input {
    height: 5rem;
  }

  label {
    color: ${colors.grayDim};
  }

  @media ${sm} {
    margin-top: 0;

    button {
      max-width: 20rem;
      margin: 2rem auto 0 auto;
    }
  }
`

export const AdditionalContactSection = styled.div`
  color: #595959;
  width: 100%;
  margin-bottom: 2rem;
  flex-grow: 1;
  text-align: left;

  button {
    margin: 1rem 0 2rem 0;
    width: 100%;
  }

  @media ${sm} {
    margin-bottom: 3rem;

    button {
      width: auto;
    }
  }

  @media ${md} {
    margin: 2.5rem 0;
    width: 30%;
  }
`

export const SupportContactItem = styled.a`
  color: #8e9091;
  display: block;
  text-decoration: none;
  margin: 3rem 0;

  i {
    color: ${colors.orangeBrightSun};
    margin-right: 2rem;
    font-size: 2.4rem;
  }
`

export const VisitSupportLink = styled.a`
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: ${colors.orangeBrightSun};
  display: block;
  font-family: "Raleway", sans-serif;

  @media ${sm} {
    text-align: left;
  }
`

export const ContactPerson = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0;
  justify-content: center;
  color: #595959;
  text-align: center;

  h3 {
    margin: 0;
    color: #595959;
  }

  p {
    margin: 0.5rem 0 1.5rem 0;
  }

  img[data-main-image] {
    border-radius: 130px;
    max-width: 130px;
    margin: 0 auto;
    border: 0.5px solid #f4f4f4;
    box-shadow: 2px 2px 3px #f4f4f4;
    border: 5px solid white;
  }

  @media ${sm} {
    margin: 5rem 0;
    flex-direction: row;
    text-align: left;
  }
`

export const ContactPersonDetails = styled.div`
  margin-top: 1rem;
  white-space: nowrap;

  @media ${sm} {
    margin-left: 3rem;
    margin-top: 0;
  }
`

export const ContactNumber = styled.a`
  color: #595959;
  font-size: 1.7rem;
  margin: 0.5rem 0;
  text-decoration: none;
  display: block;
  text-align: center;

  strong {
    color: ${primaryColour};
  }

  @media ${sm} {
    font-size: 2rem;
    text-align: left;
  }
`

export const SuccessBox = styled.div`
  width: 100%;
  margin: 0 4%;
`

export const AdditionalContacts = styled.div`
  display: flex;
  flex-direction: column;

  @media ${sm} {
    flex-direction: row;
    justify-content: space-between;

    div {
      max-width: 48%;
    }
  }

  @media screen and (min-width: 50em) {
    flex-direction: column;
    margin-left: 5rem;

    div {
      max-width: 100%;
      width: 100%;
    }
  }

  @media ${md} {
    width: 30%;
  }
`
