import React from "react"
import StatisticBlock from "."
import Statistic from "../Statistic"

export default {
  title: "Components/StatisticBlock",
  component: StatisticBlock
}

export const Default = () => {
  return (
    <StatisticBlock>
      <Statistic label="Performance improvement" value="16%" />
      <Statistic label="Performance improvement" value="16%" />
      <Statistic label="Performance improvement" value="16%" />
      <Statistic label="Performance improvement" value="16%" />
    </StatisticBlock>
  )
}
