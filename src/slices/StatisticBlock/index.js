import React from "react"
import StatisticBlock from "../../components/StatisticBlock"
import Statistic from "../../components/Statistic"

const Slice = ({ slice }) => {
  return (
    <StatisticBlock backgroundColour={slice.primary.statistic_block_background_colour}>
      {slice.items.map((item, index) => (
        <Statistic
          key={index}
          label={item.statistic_label}
          value={item.statistic_value}
        />
      ))}
    </StatisticBlock>
  )
}

export default Slice
