import React from "react"
import LogoCloud from "."
import mock from "./mock.json"

export default {
  title: "Slices/LogoCloud",
  component: LogoCloud
}

export const Default = () => {
  return <LogoCloud slice={mock} />
}
