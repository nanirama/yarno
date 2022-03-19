import React from "react"
import Columns from "."
import Column from "../Column"

export default {
  title: "Components/Columns",
  component: Columns
}

export const Default = () => {
  return (
    <Columns count={3}>
      <Column
        imageURL={"https://yarno-marketing.imgix.net/icon-certificate.png?w=260&h=140&fit=fillmax&fill=transparent"}
        imageAlt={"Mental health fundamentals"}>
        <h4>Mental health fundamentals</h4>
      </Column>
      <Column
        imageURL={"https://yarno-marketing.imgix.net/icon-handsin.png?w=260&h=140&fit=fillmax&fill=transparent"}
        imageAlt={"Working with a mental illness"}>
        <h4>Working with a mental illness</h4>
      </Column>
      <Column
        imageURL={"https://yarno-marketing.imgix.net/icon-maproute.png?w=260&h=140&fit=fillmax&fill=transparent"}
        imageAlt={"Helpful frameworks"}>
        <h4>Helpful frameworks</h4>
      </Column>
    </Columns>
  )
}
