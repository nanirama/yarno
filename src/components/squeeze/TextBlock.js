import React from "react";
import styled from "styled-components";
import Container from "../common/Container";
import { sm, md } from "../../utils/breakpoints";

const TextBlock = styled.section`
  text-align: center;
  padding: 2rem 0;
  @media ${md} {
    text-align: ${props => (props.align ? "left" : "center")};
    padding: 4rem 0;
  }

  ul {
    display: inline-block;
    text-align:left;
  }
`;

const Inner = styled.div`
  padding: 0 2rem;
  figure,
  img {
    max-height: 30rem;
  }

  figure {
    margin: 0;
    iframe {
      width: 100%;
      height: 230px;
    }
  }

  @media ${md} {
    display: flex;
    ${props => props.align == "left" && `
      flex-direction: row-reverse;
      figure, image {
        margin-left: 1rem;
      }
    `}
    ${props => props.align == "right" && `
      flex-direction: row;
      figure, image {
        margin-right: 1rem;
      }
    `}
    figure {
      text-align: center;
      flex: 1;
      display: flex;
      justify-content: ${props =>
        props.align == "left"
          ? "flex-end"
          : props.align == "right"
          ? "flex-start"
          : "center"};
      align-items: center;
    }
    figure,
    img {
      max-height: inherit;
    }
    > div {
      flex: 2;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentInner = styled.div`
  max-width: 66rem;
`;

const Component = ({ align, imageURL, children, videoID }) => {
  return (
    <TextBlock align={align}>
      <Container>
        <Inner align={align}>
          {videoID && (
            <figure>
              <iframe
                src={`https://player.vimeo.com/video/${videoID}?color=25c1a9&title=0&byline=0`}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
              <script src="https://player.vimeo.com/api/player.js" />
            </figure>
          )}
          {imageURL && (
            <figure>
              <img src={imageURL} />
            </figure>
          )}
          <Content align={align}>
            <ContentInner>{children}</ContentInner>
          </Content>
        </Inner>
      </Container>
    </TextBlock>
  );
};

export default Component;
