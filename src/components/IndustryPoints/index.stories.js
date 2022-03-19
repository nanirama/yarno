import React from "react"
import Component from "."

export default {
  title: "Components/IndustryPoints",
  component: Component
}

const exampleProps = {
  heading: "Training in only 3 minutes a day",
  icons: [
    {
      image: "",
      title: "Change behaviours",
      text:
        "Help your team put training material into practice and change their approach workplace problems."
    },
    {
      image: "",
      title: "Start the conversation",
      text:
        "Increase interest in training and keep employees engaged by getting the conversation started."
    },
    {
      image: "",
      title: "Reinforce knowledge",
      text:
        "Improve and maintain performance through ongoing training and create lasting learning."
    },
    {
      image: "",
      title: "Measure return on investment",
      text:
        "Know you’re getting the most out of your training investment with Yarno, for your business and team."
    }
  ]
}

export const Default = () => {
  return <Component {...exampleProps} />
}
