import React from "react"
import Video from "."

export default {
  title: "Components/VimeoVideo",
  component: Video
}

export const Default = () => {
  return (
    <Video videoId="464173253" title="Grant Broadcasters case study video" />
  )
}
