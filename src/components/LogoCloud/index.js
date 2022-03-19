import React from "react";
import { LogoCloud } from "./styles";
import Container from "../common/Container";

const Component = ({ children }) => {
  return (
    <LogoCloud>
      <Container>
        {children}
      </Container>
    </LogoCloud>
  );
};

export default Component;
