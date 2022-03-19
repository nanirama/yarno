import styled from "styled-components"
import { colors } from "@yarno/thread"
import SiteContainer from "../common/Container"
import { md } from "../../utils/breakpoints"

export const Nav = styled.nav`
  ${props =>
    props.isOpen &&
    `
  height: 100vh;
  position: fixed;
  top: 0; left:0; bottom; 0; right: 0;
  `}

  background: white;
  width: 100%;
  font-family: ${props => props.theme.fonts.heading};

  ${props =>
    props.hasScrolled && `box-shadow: rgb(0 0 0 / 5%) 4px 4px 12px 0px;`}

  #logo {
    margin: 0;
    display: inline-block;
    line-height: 6rem;
    img {
      width: 9.3rem;
      height: 2.9rem;
    }
  }

  ul {
    margin: 0;

    > li {
      line-height: 3rem;
      &:last-of-type {
        padding-right: 0;
      }
    }
  }

  li {
    display: inline-block;
    position: relative;
    font-size: 1.6rem;

    border-top: 1px solid ${props => props.theme.colors.primaryHover};
  }

  a {
    text-decoration: none;
  }

  li[data-highlight] {
    padding-right: 0;
    margin-left: 1rem;
    i {
      margin-right: 0.5rem;
      font-size: 0.85em;
    }
    a {
      font-size: 0.9em;
      background: rgb(26, 163, 142);
      &:hover {
        background: rgb(21, 141, 123);
        color: white;
      }
      padding: 1rem 1.5rem;
      border-radius: 6rem;
      box-shadow: rgb(0 0 0 / 10%) 3px 3px 10px;
      margin: 0;
      color: white;
    }
  }

  ${props =>
    props.isHome &&
    `
    background: ${props.theme.colors.primary};

    a {
      color: white;
    }

  `}

  @media ${md} {
    height: 6rem;
    padding: 0 2rem;

    ul > li {
      line-height: 6rem;
      &:hover {
        ul {
          display: block;
          background: white;
          padding: 0;
          margin: 0;

          li {
            padding: 0;
            line-height: 4rem;
            display: block;
            &:before {
              content: "";
            }
          }

          a {
            display: block;
            line-height: 4rem;
            color: #8e9091;
            padding: 0 1.5rem;
            &:hover {
              color: ${props => props.theme.colors.secondary};
            }
          }
        }
      }
    }

    li {
      border-top: none;
      a {
        padding: 0 2rem;

        &:hover {
          color: ${props => props.theme.colors.primaryHover};
        }
      }
    }

    li ul {
      position: absolute;
      top: 5.5rem;
      min-width: 22rem;
      box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.05);
      display: none;
      border-radius: 4px;

      :after {
        content: "";
        position: absolute;
        top: -0.8rem;
        left: 15%;
        width: 0;
        height: 0;
        border-bottom: solid 8px white;
        border-left: solid 8px transparent;
        border-right: solid 8px transparent;
      }
    }
  }
`
export const Container = styled(SiteContainer)`
  position: relative;

  @media ${md} {
    display: flex;
    justify-content: space-between;
  }
`

export const NavLinks = styled.ul`
  display: ${props => (props.mobileNavOpen ? "block" : "none")};

  ${props =>
    props.mobileNavOpen &&
    `
    background: ${props.theme.colors.primary};
    padding: 0;
    overflow-y: scroll;

    li {
      display: block;
    }

    li > a {
    line-height: 3.5rem;
    }

    li li a {
      padding-left: 2rem;
    }
    li li li a {
      padding-left: 4rem;
    }

    li[data-highlight] {
      display: inline-block;
      border-top: none;
      width: 50%;
      margin: 0 0 0 -1%;
      padding-bottom: 1rem;
      padding-top: 2rem;

      a {
        width: 100%;
        margin-left: 2rem;
      }
    }

  `}

  @media ${md} {
    display: block;
  }
`
