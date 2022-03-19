import React from "react"
import styled from "styled-components"
import Container from "../common/Container"
import { sm } from "../../utils/breakpoints"

const Header = styled.header`
  background-color: ${props =>
    props.alternate ? "white" : props.theme.colors.primary};
  height: 6rem;
  line-height: 6rem;

  ${props =>
    props.withBorder &&
    `border-bottom: 2px solid ${props.theme.colors.secondary}`}

  h1 {
    margin: 0;
    padding: 0;
    height: 6rem;
    position: relative;
    top: -2px;

    a {
      display: block;
      line-height: 6rem;
    }
  }
  img {
    height: 2.9rem;
  }
`

const Tel = styled.a`
  font-weight: bold;
  letter-spacing: 1px;
  text-decoration: none;
  color: ${props => (props.alternate ? props.theme.colors.primary : "white")};
`

const Button = styled.a`
  display: none;
  background-color: ${props => props.theme.colors.secondary};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  border-radius: 6px;
  margin-left: 2rem;
  padding: 0.6rem 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.05s ease-in all;
  font-size: 0.8em;

  &:hover {
    background-color: ${props => props.theme.colors.secondaryHover};
    transition: 0.05s ease-out all;
    cursor: pointer;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  }
  @media ${sm} {
    display: inline;
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`

const SqueezeHeader = props => {
  const logoBase = "https://yarno.imgix.net/static/logos/yarno_green.png?h=58"
  const logoURL = props.alternate ? logoBase : `${logoBase}&exp=100`

  return (
    <Header alternate={props.alternate} withBorder={props.withBorder}>
      <Container>
        <Flex>
          <h1>
            <a href={"https://www.yarno.com.au"} title="Yarno">
              <img src={logoURL} alt="Yarno" />
            </a>
          </h1>
          <div>
            <Tel alternate={props.alternate} href="tel:1300797546">
              1300 79 75 46
            </Tel>
            <Button href="mailto:mark@yarno.com.au">Email us</Button>
          </div>
        </Flex>
      </Container>
    </Header>
  )
}

export default SqueezeHeader