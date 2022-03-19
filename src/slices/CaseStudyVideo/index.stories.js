import React from "react"
import CaseStudyVideo from "."
import mock from "./mock.json"

export default {
  title: "Slices/CaseStudyVideo",
  component: CaseStudyVideo
}

export const Default = () => {
  return <CaseStudyVideo slice={mock} />
}
