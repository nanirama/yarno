import styled from "styled-components"
import { sm } from "../../utils/breakpoints"

export const Header = styled.header`
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

export const Tel = styled.a`
  font-weight: bold;
  letter-spacing: 1px;
  text-decoration: none;
  color: ${props => (props.alternate ? props.theme.colors.primary : "white")};
`

export const Button = styled.a`
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

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`
