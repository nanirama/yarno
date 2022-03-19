import React from "react"
import Component from "."

export default {
  title: "Components/SqueezeLegal",
  component: Component
}

export const Default = () => {
  return (
    <Component
      privacyURL="https://yarno.box.com/v/platform-privacy-policy"
      disclaimerURL="https://yarno.box.com/v/platform-disclaimer"
    />
  ) 
}
