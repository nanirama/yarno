import React from "react";
import { Background, CardsContainer } from "./styles"

const Component = ({ children }) => {
  return (
    <Background>
      <CardsContainer>
        {children}
      </CardsContainer>
    </Background>
  );
};

export default Component;
