import React from "react"
import Component from "."

export default {
  title: "Components/IndustryHeader",
  component: Component
}

const exampleProps = {
  checklistLeft: ["Compliance", "Leadership"],
  checklistRight: ["Soft skills", "Appropriate workplace behaviour"],
  image: "",
  imageAlt: "Professional services"
}

export const Default = () => {
  return <Component {...exampleProps} />
}
