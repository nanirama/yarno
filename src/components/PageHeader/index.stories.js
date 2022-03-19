import React from "react"
import PageHeader from "."

export default {
  title: "Components/PageHeader",
  component: PageHeader
}

export const Default = () => {
  return (
    <PageHeader
      headerText={"Page title"}
      subHeader={"This page is great. You'll love the content inside. Probably."}
    />
  )
}
