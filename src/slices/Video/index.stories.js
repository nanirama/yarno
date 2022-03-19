import React from "react"
import Video from "."
import mock from "./mock.json"

export default {
  title: "Slices/Video",
  component: Video
}

export const Default = () => {
  return <Video slice={mock} />
}
