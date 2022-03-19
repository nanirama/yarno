import React from "react"
import TextBlock from "."
import mock from "./mock.json"

export default {
  title: "Slices/TextBlock",
  component: TextBlock
}

export const Default = () => {
  return <TextBlock slice={mock} />
}
