import React from "react";
import styled from "styled-components";
import Container from "../common/Container";

const CTAForm = styled.section`
  background-color: ${props => props.theme.colors.primary};
  padding: 1rem 3rem 1rem 3rem;
  color: white;
  text-align: ${props => props.align || "center"};

  h2,
  h3 {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  h3 {
    font-weight: 300;
    margin-bottom: 2rem;
  }

  p {
    color: white;
  }

  input {
    margin: 1rem;
    border: white;
    background: white;
    height: 5rem;
    padding: 0 2rem;
    line-height: 5rem;
    font-size: 1.7rem;
    border-radius: 3px;
    width: 100%;
  }

  button {
    margin: 1rem;
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
`;

const Component = ({ title, subtitle, align, children }) => {
  return (
    <CTAForm>
      <Container>
        {title && <h2>{title}</h2>}
        {subtitle && <h3>{subtitle}</h3>}
        {children}
      </Container>
    </CTAForm>
  );
};

export default Component;
