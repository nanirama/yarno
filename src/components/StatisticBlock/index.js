import React from "react"
import styled from "styled-components"
import Container from "../common/Container"
import { sm } from "../../utils/breakpoints"

const StatisticBlock = styled.section`
  background-color: ${props => props.backgroundColour || "#fff"};
  @media ${sm} {
    > div {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      > div {
        flex: 1;
      }
    }
  }
`

const Component = ({ backgroundColour, children }) => {
  return (
    <StatisticBlock backgroundColour={backgroundColour}>
      <Container>{children}</Container>
    </StatisticBlock>
  )
}

export default Component