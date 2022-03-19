import React, { Fragment } from "react"
import Advisor from "../../components/Advisor"
import { Container, Background } from "./styles"

import Waves from "../../components/Waves"

const Slice = ({ slice }) => {
  return (
    <Fragment>
      <Background>
        <h2>Our advisors</h2>
        <Container>
          {slice.items.map(member => {
            return (
              <Advisor
                key={member.advisor.id}
                member={member.advisor.document.data}
              />
            )
          })}
        </Container>
        <Waves />
      </Background>
    </Fragment>
  )
}

export default Slice
