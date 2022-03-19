import React from "react";
import Container from "../common/Container";
import { Legal } from "./styles"

const Component = ({ privacyURL, disclaimerURL }) => {
  return (
    <Legal>
      <Container>
        <a
          href={privacyURL}
          target="_blank"
        >
          Privacy
        </a>
        {disclaimerURL && (
          <React.Fragment>
            &nbsp;&nbsp;
            <a
              href={disclaimerURL}
              target="_blank"
            >
              Disclaimer
            </a>
          </React.Fragment>
        )}
      </Container>
    </Legal>
  );
};

export default Component;
