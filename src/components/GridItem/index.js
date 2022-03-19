import React from "react";
import { Item } from "./styles"

const Component = ({ imageURL, imageAlt, children }) => {
  return (
    <Item>
      {imageURL && (
        <img src={imageURL} alt={imageAlt} />
      )}
      {children}
    </Item>
  );
};

export default Component;
