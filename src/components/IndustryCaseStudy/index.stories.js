import React from "react"
import Component from "."

export default {
  title: "Components/IndustryCaseStudy",
  component: Component
}

const exampleProps = {
  logo: "",
  logoAlt: "",
  content: "",
  buttonLabel: ""
}

const videoProps = {
  logo: "",
  logoAlt: "",
  content: "",
  videoId: "",
  videoTitle: ""
}

export const Default = () => {
  return <Component {...exampleProps} />
}
export const WithVideo = () => {
  return <Component {...videoProps} />
}
