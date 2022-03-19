import React from "react";
import styled from "styled-components";
import Container from "../common/Container";
import { sm, md } from "../../utils/breakpoints";

const Header = styled.h2`
  text-align: ${props => props.align || "center"};
  margin-top: 3rem;
  padding: 0 3rem;
  @media ${md} {
    margin-top: 6rem;
  }
`;

const Component = ({ title, align }) => {
  return (
    <Container>
      <Header align={align}>{title}</Header>
    </Container>
  );
};

export default Component;
