import React from "react"
import styled from "styled-components"
import Container from "../common/Container"
import { sm, md, lg } from "../../utils/breakpoints"

const Header = styled.header`
  text-align: center;
  margin: 6rem auto;
  max-width: 96rem;

  h1 {
    margin: 0 0 2rem 0;
  }

  p {
    max-width: 60rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  figure > img {
    height: 6rem;
    width: 6rem;
  }

  @media ${md} {
    figure > img {
      height: 8rem;
      width: 8rem;
    }
  }

  @media ${lg} {
    figure > img {
      height: 10rem;
      width: 10rem;
    }
  }
`

const PageHeader = ({ headerText, subHeader, children }) => {
  return (
    <Container>
      <Header>
        {headerText}
        {subHeader}
        {children}
      </Header>
    </Container>
  )
}

export default PageHeader
