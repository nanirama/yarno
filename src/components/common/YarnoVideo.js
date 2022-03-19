import React from "react"
import styled from "styled-components"
import { sm, md } from "../../utils/breakpoints"

export const VideoContainer = styled.div`
  width: 100%;
  box-shadow: 3px 3px 13px rgba(0, 0, 0, 0.4);

  @media ${sm} {
    width: 60%;
  }

  @media ${md} {
    width: 80%;
  }
`

export default function YarnoVideo({ title, videoId, style }) {
  return (
    <VideoContainer style={{ width: "100%", ...style }}>
      <div
        style={{
          padding: "56.25% 0 0 0",
          position: "relative",
          height: "100%"
        }}>
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?color=25c1a9&title=0&byline=0`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title={title}
        />
      </div>
      <script src="https://player.vimeo.com/api/player.js" />
    </VideoContainer>
  )
}
