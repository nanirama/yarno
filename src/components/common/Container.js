import React from "react"
import styled from "styled-components"

const Container = styled.div`
  max-width: ${props => (props.readable ? "80rem" : "140rem")};
  margin: 0 auto;
  padding: 0 2rem;
`

export default Container
