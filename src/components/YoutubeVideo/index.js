import React from "react"
import { VideoContainer } from "./styles"

const YoutubeVideo = ({ title, videoId, style }) => {
  return (
    <VideoContainer style={{ width: "100%", ...style }}>
      <div
        style={{
          padding: "56.25% 0 0 0",
          position: "relative",
          height: "100%"
        }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
    </VideoContainer>
  )
}

export default YoutubeVideo
