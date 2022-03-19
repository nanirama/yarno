import React from "react"
import { RichText } from "prismic-reactjs"
import StatisticCallout from "../../components/StatisticCallout"

const Slice = ({ slice: { primary } }) => {
  return (
    <StatisticCallout
      quote={<RichText render={primary.statistic_quote.richText} />}
      quotee={primary.statistic_quotee}
      quoteeRole={primary.statistic_quotee_role}
      stat={primary.statistic_stat}
      statSymbol={primary.statistic_symbol}
      statText={<RichText render={primary.statistic_text.richText} />}
    />
  )
}

export default Slice
