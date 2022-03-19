import React from "react"
import SqueezeHero from "."
import mock from "./mock.json"

export default {
  title: "Slices/SqueezeHero",
  component: SqueezeHero
}

export const Default = () => {
  return <SqueezeHero slice={mock} />
}
