import React from "react"
import CaseStudyChallenges from "."
import mock from "./mock.json"

export default {
  title: "Slices/CaseStudyChallenges",
  component: CaseStudyChallenges
}

export const Default = () => {
  return <CaseStudyChallenges slice={mock} />
}
