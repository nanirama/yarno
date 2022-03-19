import React from "react";
import styled from "styled-components";
import { sm, md, lg, xl } from "../../utils/breakpoints"

const WaveContainer = styled.div`
  height: ${props => props.height}rem;
  width: 100%;
  margin: -1rem auto 0 auto;
  background: url(${props => props.image});
  background-position: bottom center;
  background-size: cover;
  background-repeat: no-repeat;

  @media ${sm} {
    height: ${props => (props.height + 1)}rem;
  }

  @media ${md} {
    height: ${props => (props.height + 2)}rem;
  }

  @media ${lg} {
    height: ${props => (props.height + 3)}rem;
  }

  @media ${xl} {
    height: ${props => (props.height + 5)}rem;
  }
`;

const Wave = ({ height, image, ...props }) => {
  return <WaveContainer height={height || 12} image={image} {...props} />;
};

export default Wave;
