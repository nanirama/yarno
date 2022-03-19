import React from "react"
import CaseStudyAddressedChallenges from "."
import mock from "./mock.json"

export default {
  title: "Slices/CaseStudyAddressedChallenges",
  component: CaseStudyAddressedChallenges
}

export const Default = () => {
  return <CaseStudyAddressedChallenges slice={mock} />
}
