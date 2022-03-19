import React from "react";
import { ContactDetails, Container, Avatar, Details } from "./styles"

const Component = ({ imageURL, imageAlt, children }) => {
  return (
    <ContactDetails>
      <Container>
        <Avatar>
          <img src={imageURL} alt={imageAlt} />
        </Avatar>
        <Details>
          {children}
        </Details>
      </Container>
    </ContactDetails>
  );
};

export default Component;
