import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  Header,
  HeaderContainer,
  HeaderLeft,
  HeaderImage,
  HeaderTitle,
  HeaderSubtitle,
  HeaderBody
} from "./styles";

const MicrolearningHeader = props => {
  return (
    <Header>
      <HeaderContainer>
        <HeaderLeft>
          <HeaderTitle>{props.title}</HeaderTitle>
          <HeaderSubtitle>{props.subTitle}</HeaderSubtitle>
          <HeaderBody className="larger">{props.body}</HeaderBody>
        </HeaderLeft>
        <HeaderImage>
          <GatsbyImage fluid={props.image} alt={props.imageAlt} />
        </HeaderImage>
      </HeaderContainer>
    </Header>
  );
};

export default MicrolearningHeader;