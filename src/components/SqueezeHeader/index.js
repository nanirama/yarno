import React from "react";
import Container from "../common/Container";
import { Header, Tel, Button, Flex } from "./styles"

const SqueezeHeader = ({
  alternate,
  logoImageURL,
  logoLinkUrl,
  phoneLink,
  phoneLabel,
  emailLink,
  emailLabel,
  withBorder
}) => {
  const logoURL = alternate ? logoImageURL : `${logoImageURL}&exp=100`;

  return (
    <Header alternate={alternate} withBorder={withBorder}>
      <Container>
        <Flex>
          <h1>
            <a href={logoLinkUrl} title="Yarno">
              <img src={logoURL} alt="Yarno logo" />
            </a>
          </h1>
          <div>
            {phoneLink && phoneLabel && (
              <Tel alternate={alternate} href={phoneLink}>
                {phoneLabel}
              </Tel>
            )}
            {emailLink && emailLabel && (
              <Button href={emailLink}>{emailLabel}</Button>
            )}
          </div>
        </Flex>
      </Container>
    </Header>
  );
};

export default SqueezeHeader;