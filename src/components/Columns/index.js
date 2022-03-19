import React from "react";
import { Container } from "./styles"

const Component = ({ count, children, maxWidth }) => {
  return (
    <Container maxWidth={maxWidth} count={count}>
      {children}
    </Container>
  );
};

export default Component;
