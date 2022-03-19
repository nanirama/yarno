import React from "react"
import PartnerImages from "./PartnerImages"
import styled from "styled-components"
import Waves from "../Waves"
import { md, lgPixels } from "../../utils/breakpoints"

const Container = styled.div`
  padding: 2rem 2rem 4rem 2rem;
  text-align: center;
  width: 100%;

  > div {
    margin: 0 auto;
    max-width: ${lgPixels}px;
  }

  h2,
  p {
    color: white;
  }
  p {
    margin-bottom: 0;
    max-width: 70rem;
    margin: 0 auto;
  }

  @media ${md} {
    padding-top: 6rem;
    padding-bottom: 8rem;
  }
`

const Background = styled.div`
  background-color: #f9a21a;
  width: 100%;
`

const Component = ({ title, description, partners }) => {
  return (
    <Background>
      <Container>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <PartnerImages partners={partners} />
        </div>
      </Container>
      <Waves />
    </Background>
  )
}

export default Component
