import React from "react"
import CaseStudyOverview from "."
import mock from "./mock.json"

export default {
  title: "Slices/CaseStudyOverview",
  component: CaseStudyOverview
}

export const Default = () => {
  return <CaseStudyOverview slice={mock} />
}
