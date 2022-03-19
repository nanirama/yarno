import React from "react"
import YoutubeVideo from "."
import mock from "./mock.json"

export default {
  title: "Slices/YoutubeVideo",
  component: YoutubeVideo
}

export const Default = () => {
  return <YoutubeVideo slice={mock} />
}
