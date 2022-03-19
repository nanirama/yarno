import React from "react";
import styled from "styled-components";
import { sm } from "../../utils/breakpoints";

const ColoredBackground = styled.div`
  background: ${props => props.background};
  overflow: hidden;
  @media ${sm} {
    padding: 2rem 0 3rem 0;
  }
`;

const Component = ({ background, children }) => {
  return (
    <ColoredBackground background={background}>{children}</ColoredBackground>
  );
};

export default Component;