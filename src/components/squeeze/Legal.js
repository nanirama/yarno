import React from "react";
import styled from "styled-components";
import Container from "../common/Container";

const Legal = styled.div`
  text-align: center;
  background-color: #707070;
  padding: 0 0 2rem 0;

  a {
    color: white;
    font-size: 0.8em;
    text-decoration: none;
    letter-spacing: 1px;
  }
`;

const Component = ({ showDisclaimer }) => {
  return (
    <Legal>
      <Container>
        <a
          href={"https://yarno.box.com/v/platform-privacy-policy"}
          target="_blank"
        >
          Privacy
        </a>
        {showDisclaimer && (
          <a
            href={"https://yarno.box.com/v/platform-disclaimer"}
            target="_blank"
          >
            Disclaimer
          </a>
        )}
      </Container>
    </Legal>
  );
};

export default Component;
