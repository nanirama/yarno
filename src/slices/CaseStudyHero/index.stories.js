import React from "react"
import CaseStudyHero from "."
import mock from "./mock.json"

export default {
  title: "Slices/CaseStudyHero",
  component: CaseStudyHero
}

export const Default = () => {
  return <CaseStudyHero slice={mock} />
}
