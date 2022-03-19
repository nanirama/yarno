import React from "react"
import { Section, Stat, Quote, Container } from "./styles"

const StatisticCallout = ({
  quote,
  quotee,
  quoteeRole,
  stat,
  statSymbol,
  statText
}) => {
  return (
    <Section columns rowsOnMobile>
      <Container>
        <Quote secondary>
          <blockquote>{quote}</blockquote>
          <hr />
          <cite>{quotee}</cite>
          <br />
          <sub>{quoteeRole}</sub>
        </Quote>
      </Container>
      <Container>
        <Stat secondary>
          <div>
            <h1>{stat}</h1>
            {statSymbol && <span>{statSymbol}</span>}
          </div>

          <div>{statText}</div>
        </Stat>
      </Container>
    </Section>
  )
}

export default StatisticCallout
