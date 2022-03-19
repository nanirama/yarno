import React from "react"
import CaseStudyExplorer from "."
import mock from "./mock.json"

export default {
  title: "Slices/CaseStudyExplorer",
  component: CaseStudyExplorer
}

export const Default = () => {
  return <CaseStudyExplorer slice={mock} />
}
