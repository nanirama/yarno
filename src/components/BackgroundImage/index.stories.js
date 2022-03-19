import React from "react"
import BackgroundImage from "."

export default {
  title: "Components/BackgroundImage",
  component: BackgroundImage
}

export const Default = () => {
  return (
    <BackgroundImage
      backgroundColor="#25c1a9"
      imageURL="https://yarno-marketing.imgix.net/landscape.png"
      height="253"
      width="1304"
    />
  )
}
