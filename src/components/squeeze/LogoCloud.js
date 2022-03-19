import React from "react";
import styled from "styled-components";
import { sm } from "../../utils/breakpoints";
import Container from "../common/Container";

const LogoCloud = styled.section`
  background: ${props => props.theme.colors.grayBackground};
  padding: 8rem 2rem 6rem 2rem;
  text-align: center;
  display: flex;

  h2 {
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 2px;
    color: #8E9091;
    margin: 0 0 4rem 0;
  }

  img {
    max-width: 13rem;
    max-height: 7rem;
    margin: 0 2rem 3rem 2rem;
    @media ${sm} {
      margin: 0 4rem 3rem 4rem;
    }
  }
`;

const Component = ({ heading, grayscale, children }) => {
  return (
    <LogoCloud grayscale={grayscale}>
      <Container>
        {heading && <h2>{heading}</h2>}
        {children}
      </Container>
    </LogoCloud>
  );
};

export default Component;
