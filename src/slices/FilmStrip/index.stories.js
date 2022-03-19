import React from "react"
import FilmStrip from "."
import mock from "./mock.json"

export default {
  title: "Slices/FilmStrip",
  component: FilmStrip
}

export const Default = () => {
  return <FilmStrip slice={mock} />
}
