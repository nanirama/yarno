import React, { useState } from "react"
import styled from "styled-components"
import { Lightbox, YarnoVideo } from "../common"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Waves from "../Waves"
import {
  Header,
  HeaderContainer,
  HeaderLeft,
  HeaderLeftInner,
  HeaderTitle,
  HeaderSubtitle,
  HeaderImage
} from "./styles"

const Component = props => {
  const [showLightbox, setShowLightbox] = useState(false)
  const toggleLightbox = () => setShowLightbox(!showLightbox)

  return (
    <Header>
      <HeaderContainer>
        <HeaderLeft>
          <HeaderLeftInner>
            <HeaderTitle>{props.video_hero_title.text}</HeaderTitle>
            <p className="larger">{props.description.text}</p>
            <HeaderSubtitle onClick={toggleLightbox} role="button">
              {props.call_to_action_text} <i className="fa fa-play-circle" />
            </HeaderSubtitle>
            <Lightbox open={showLightbox} toggleLightbox={toggleLightbox}>
              <YarnoVideo
                videoId={props.vimeo_id}
                title={props.video_hero_title.text}
              />
            </Lightbox>
          </HeaderLeftInner>
        </HeaderLeft>
        <HeaderImage>
          <GatsbyImage
            image={getImage(props.video_hero_image)}
            alt={props.video_hero_image.alt}
          />
        </HeaderImage>
      </HeaderContainer>
      <Waves />
    </Header>
  )
}

export default Component
