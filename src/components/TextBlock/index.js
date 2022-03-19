import React from "react"
import Container from "../common/Container"
import { TextBlock, Inner, Content, ContentInner } from "./styles"

const Component = ({
  align,
  imageURL,
  children,
  videoID,
  backgroundColour
}) => {
  return (
    <TextBlock align={align} backgroundColour={backgroundColour}>
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
  )
}

export default Component
