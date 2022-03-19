import React from "react"
import styled from "styled-components"
import Container from "../common/Container"
import { sm, md } from "../../utils/breakpoints"

const Statistic = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.secondary};
  max-width: 250px;
  padding: 0 2rem 0 2rem;
  min-width: 45%;
  margin: 0 auto;

  @media (min-width: 840px) {
    min-width: 150px;
  }

  h4 {
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 1.5rem 0 3rem 0;
    @media ${sm} {
      font-size: 1.7rem;
    }
  }
`

const Value = styled.div`
  font-weight: bold;
  border: 4px solid ${props => props.theme.colors.secondary};
  border-radius: 100rem;
  position: relative;
  font-size: 3rem;
  max-width: 200px;
  margin: 0 auto;

  @media ${sm} {
    margin: 3rem auto 1rem auto;
    font-size: 5rem;
  }

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Component = ({ label, value }) => {
  return (
    <Statistic>
      <Value>
        <div>{value}</div>
      </Value>
      <h4>{label}</h4>
    </Statistic>
  )
}

export default Component
