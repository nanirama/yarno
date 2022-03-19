import React from "react"
import BackgroundImage from "."
import mock from "./mock.json"

export default {
  title: "Slices/BackgroundImage",
  component: BackgroundImage
}

export const Default = () => {
  return <BackgroundImage slice={mock} />
}
