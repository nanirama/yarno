import React from "react"
import Features from "."
import mock from "./mock.json"

export default {
  title: "Slices/Features",
  component: Features
}

export const Default = () => {
  return <Features slice={mock} />
}
