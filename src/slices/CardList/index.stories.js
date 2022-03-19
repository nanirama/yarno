import React from "react"
import CardList from "."
import mock from "./mock.json"

export default {
  title: "Slices/CardList",
  component: CardList
}

export const Default = () => {
  return <CardList slice={mock} />
}
