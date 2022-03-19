import React from "react"
import OutlinedHeader from "."

export default {
  title: "Components/OutlinedHeader",
  component: OutlinedHeader
}

export const Default = () => {
  return (
    <OutlinedHeader
      title="Microlearning"
      subtitle="What it is, the benefits and how it can help you."
    />
  )
}

export const Values = () => {
  return (
    <OutlinedHeader
      title="Our values"
      subtitle="They're what make Yarno, Yarno."
      description="Our values are more than just tag-lines – they're lifelines for how we approach challenges, success and failure."
    />
  )
}
