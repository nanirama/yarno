import React from "react"
import Slice from "."
import mock from "./mock.json"

export default {
  title: "Slices/Advisors",
  component: Slice
}

export const Default = () => {
  return <Slice slice={mock} />
}
