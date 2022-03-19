import React from "react"
import Column from "."

export default {
  title: "Components/Column",
  component: Column
}

export const Default = () => {
  return (
    <Column
      imageURL={"https://yarno-marketing.imgix.net/icon-certificate.png?w=260&h=140&fit=fillmax&fill=transparent"}
      imageAlt={"Mental health fundamentals"}>
      <h4>Heading</h4>
      <p>Paragraph copy</p>
    </Column>
  )
}
