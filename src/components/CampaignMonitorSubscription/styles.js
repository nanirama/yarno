import styled from "styled-components";
import { sm } from "../../utils/breakpoints";

export const Form = styled.form`
  margin-top: 2rem;
  text-align: left;

  input[type="text"],
  input[type="email"],
  p,
  button {
    width: 100%;
  }

  label {
    text-align: left;
    font-size: 1.7rem;
    color: inherit;
  }

  input {
    margin: 0 0 1rem 0;
    background: white;
    font-size: 1.7rem;
  }

  input[type="text"],
  input[type="email"] {
    line-height: 5rem;
    height: 5rem;
    border: 1px solid #cccccc;
    padding: 0 2rem;
    border-radius: 3px;
  }

  input[type="radio"] {
    margin-right: 1rem;
  }

  button {
    margin: 1rem auto 2rem auto;
    border: none;
    border-radius: 3px;
    background: ${props => props.theme.colors.secondary};
    color: white;
    height: 5rem;
    padding: 0 2rem;
    font-size: 1.7rem;
    display: block;
    width: 100%;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
  }

  small {
    text-align: center;
    display: block;
    line-height: 1.8em;
  }
`;

export const RadioButtons = styled.div`
  text-align: left;
  margin-bottom: 0.7rem;

  div label {
    font-size: 1.5rem;
  }
`

export const Container = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  padding: 0rem 1rem 1rem 1rem;

  @media ${sm} {
    padding: 0rem 3rem 1rem 3rem;
  }
`;

export const YarnSubscribe = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  margin: 1rem auto 2rem;
  max-width: calc(100% - 2rem);

  input {
    &[type="checkbox"] {
      width: auto;
      max-width: 100%;
      height: auto;
      line-height: 2.4rem;
      margin-top: 0.5rem;
    }
  }
  label {
    line-height: 1.25;
    color: inherit;
    margin-left: 1rem;
  }

  @media ${sm} {
    max-width: 100%;
  }
`;
