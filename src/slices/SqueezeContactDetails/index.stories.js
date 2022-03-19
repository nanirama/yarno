import React from "react"
import SqueezeContactDetails from "."
import mock from "./mock.json"

export default {
  title: "Slices/SqueezeContactDetails",
  component: SqueezeContactDetails
}

export const Default = () => {
  return <SqueezeContactDetails slice={mock} />
}
