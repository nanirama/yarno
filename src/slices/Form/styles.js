import styled from "styled-components";

export const Form = styled.div`
  ${props => props.backgroundColour && `background-color: ${props.backgroundColour};`}
  color: ${props => props.fontColour || "inherit"};
  width: 100%;
  padding: 1rem 2rem;

  h2,h3 {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  h3 {
    font-weight: 300;
    margin-bottom: 2rem;
  }

  p, ul, ol, label {
    color: "inherit";
  }
`;

export const Container = styled.div`
  text-align: center;
  max-width: 700px;
  margin: ${props => (props.noMargin ? "0" : "0 auto")};
`;
