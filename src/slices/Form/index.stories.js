import React from "react"
import Form from "."
import mock from "./mock.json"

export default {
  title: "Slices/Form",
  component: Form
}

export const Default = () => {
  return <Form slice={mock} />
}
