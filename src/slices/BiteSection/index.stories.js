import React from "react"
import Slice from "."

const mock = {}

export default {
  title: "Slices/BiteSection",
  component: Slice
}

export const Default = () => {
  return <Slice slice={mock} />
}
