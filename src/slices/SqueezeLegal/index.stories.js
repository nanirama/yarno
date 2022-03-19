import React from "react"
import SqueezeLegal from "."
import mock from "./mock.json"

export default {
  title: "Slices/SqueezeLegal",
  component: SqueezeLegal
}

export const Default = () => {
  return <SqueezeLegal slice={mock} />
}
