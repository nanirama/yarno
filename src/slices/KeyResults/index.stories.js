import React from "react"
import KeyResults from "."
import mock from "./mock.json"

export default {
  title: "Slices/KeyResults",
  component: KeyResults
}

export const Default = () => {
  return <KeyResults slice={mock} />
}
