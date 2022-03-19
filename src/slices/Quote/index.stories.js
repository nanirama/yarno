import React from "react"
import Quote from "."
import mock from "./mock.json"

export default {
  title: "Slices/Quote",
  component: Quote
}

export const Default = () => {
  return <Quote slice={mock} />
}
