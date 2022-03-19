import React from "react"
import Features from "../../components/home/HowYarnoCanWork"

const Component = ({ slice }) => {
  return (
    <Features
      title={slice.primary.featurestitle.text}
      description={slice.primary.description.text}
      features={slice.items}
    />
  )
}

export default Component
