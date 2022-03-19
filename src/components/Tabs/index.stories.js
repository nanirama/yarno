import React from "react"
import Tabs from "."

export default {
  title: "Components/Tabs",
  component: Tabs
}

export const Default = () => {
  return (
    <Tabs
      tabs={[
        {
          tab: "Questions",
          tabImage: "Test",
          content: "test",
          contentImage: "Testt"
        },
        {
          tab: "Explanations",
          tabImage: "Test",
          content: "test",
          contentImage: "Testt"
        },
        {
          tab: "Video & illustrations",
          tabImage: "Test",
          content: "test",
          contentImage: "Testt"
        }
      ]}
    />
  )
}
