import React from "react";
import styled from "styled-components";
import { sm } from "../../utils/breakpoints";

const SplitFormContainer = styled.div`
  ${props => !props.noPadding && `padding: 1rem 2rem;`}
  text-align: center;
  max-width: 700px;
  margin: ${props => (props.noMargin ? "0" : "0 auto")};

  form {
    margin-top: 2rem;
  }

  input {
    margin: 1rem 0;
    ${props =>
      props.noBorder ? "border: none;" : "border: 1px solid #cccccc;"}
    background: white;
    height: 5rem;
    padding: 0 2rem;
    line-height: 5rem;
    font-size: 1.7rem;
    border-radius: 3px;
    width: 100%;
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

  @media ${sm} {
    form div {
      display: flex;
      justify-content: space-between;
      input {
        flex: 1;
        margin: 0;
        max-width: 49%;
        margin-bottom: 1rem;
      }
    }
    button {
      margin: 0;
      margin-bottom: 0;
    }
  }
`;

export default SplitFormContainer;
