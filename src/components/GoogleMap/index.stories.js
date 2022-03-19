import React from "react"
import GoogleMap from "."

export default {
  title: "Components/GoogleMap",
  component: GoogleMap
}

export const Default = () => {
  return (
    <GoogleMap
      query={"Level+14%2F275+Alfred+St+N,+North+Sydney+NSW+2060"}
      title={"Map of Yarno's location"}
    />
  )
}
