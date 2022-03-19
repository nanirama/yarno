import React from "react"
import TestimonialHero from "."
import mock from "./mock.json"

export default {
  title: "Slices/TestimonialHero",
  component: TestimonialHero
}

export const Default = () => {
  return <TestimonialHero slice={mock} />
}
