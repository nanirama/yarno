import React from "react"
import Statistic from "."

export default {
  title: "Components/Statistic",
  component: Statistic
}

export const Default = () => {
  return <Statistic label="Performance improvement" value="16%" />
}
