import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background-color: ${props => props.backgroundColor || "transparent"};
  ${props =>
    props.imageURL &&
    `
    background-image: url('${props.imageURL}');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;
    &:before {
      display: block;
      content: "";
      width: 100%;
      padding-top: ${(props.height / props.width) * 100}%;
    }
  `}
`;

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
