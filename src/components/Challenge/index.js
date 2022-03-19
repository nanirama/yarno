import React from "react";
import styled from "styled-components";
import { sm, md } from "../../utils/breakpoints";

const Container = styled.div`
  span {
    color: ${props => props.theme.colors.secondary};
    font-weight: bold;
    font-size: 5rem;
    margin-bottom: 1rem;
  }

  h3 {
    margin-top: 0;
  }

  @media ${md} {
    span {
      position: absolute;
      left: 0;
      top: -1rem;
      line-height: 1em;
    }
    div {
      margin-top: 5rem;
      position: relative;
      padding-left: 7rem;
    }
  }
`;

const Challenge = ({ number, title, children }) => {
  return (
    <Container>
      <div>
        <span>{number}</span>
        <h3>{title}</h3>
        {children}
      </div>
    </Container>
  );
};

export default Challenge;
