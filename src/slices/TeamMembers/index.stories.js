import React from "react"
import TeamMembers from "."
import mock from "./mock.json"

export default {
  title: "Slices/TeamMembers",
  component: TeamMembers
}

export const Default = () => {
  return <TeamMembers slice={mock} />
}
