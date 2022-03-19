import React from "react";
import { Background } from "./styles"

const Component = ({ imageURL, height, width, backgroundColor }) => {
  return (
    <Background
      backgroundColor={backgroundColor}
      height={height}
      width={width}
      imageURL={imageURL}
    />
  );
};

export default Component;
