import React from "react";
import Container from "../common/Container";
import { Hero, Flex, Content } from "./styles"

const SqueezeHero = ({
  align,
  heading,
  subheading,
  imageURL,
  noImagePadding,
  topPadding,
  children,
  alternate
}) => {
  return (
    <Hero
      alternate={alternate}
      align={align}
      topPadding={topPadding}
      imageURL={imageURL}
    >
      <Container>
        <Flex noImagePadding={noImagePadding} imageURL={imageURL}>
          <Content align={align}>
            {heading && <h1>{heading}</h1>}
            {subheading && <h2>{subheading}</h2>}
            {children}
          </Content>
          {imageURL && (
            <div>
              <img src={imageURL} />
            </div>
          )}
        </Flex>
      </Container>
    </Hero>
  );
};

export default SqueezeHero;
