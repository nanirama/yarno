import React from "react"
import Quote from "."

export default {
  title: "Components/Quote",
  component: Quote
}

export const Default = () => {
  return (
    <Quote
      quote={"Testing"}
      author="Steve Anderson"
      authorTitle="Group Learning Manager at Grant Broadcasters"
    />
  )
}
