import React from "react"
import Component from "."

export default {
  title: "Components/IndustryLinks",
  component: Component
}

const exampleProps = {
  heading: "Learn more about Yarno",
  content: [
    {
      image: "",
      alt: "Soft skills training",
      text: "How to improve soft skills training",
      action: "Read",
      to: "/blog/customer-service-soft-skills/"
    },
    {
      image: "",
      alt: "Why Yarno isn't an LMS",
      text: "Why Yarno isn't an LMS",
      action: "Read",
      to: "/blog/why-yarno-isnt-a-lms/"
    },
    {
      image: "",
      alt: "How Yarno helps managers become leaders",
      text: "How Yarno helps managers become leaders",
      action: "Read",
      to: "/blog/how-yarno-can-help-managers-become-leaders/"
    }
  ]
}

export const Default = () => {
  return <Component {...exampleProps} />
}
