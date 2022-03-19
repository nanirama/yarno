import styled from "styled-components";
import { colors } from "@yarno/thread";
import { sm, md, lg } from "../../../utils/breakpoints";

export const Nav = styled.nav`
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${colors.grayWhisper};
  padding-top: 1rem;
  z-index: 5;
  height: 6.2rem;
  position: fixed;
  width: 100vw;
  padding: 0 2rem;
  top: 6rem;
  background-color: ${({ hasScrolled, isHome }) =>
    (!hasScrolled && "transparent") ||
    (hasScrolled && isHome && `${colors.greenLightSea}`) ||
    "white"};
  transition: 0.5s all ease;
  ${props =>
    props.hasScrolled && "box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.05)"};

  img {
    width: 9.3rem;
    height: 2.9rem;
  }

  @media ${sm} {
    top: 4rem
  }

  @media ${md} {
    padding: 0 3.5%;
  }

  ${props =>
    props.isHome &&
    `a {
      color: white;
    }`}

  @media ${lg} {
    padding: 0 12.5%;
  }
`;

export const NavList = styled.ul`
  display: none;

  @media ${md} {
    display: flex;
    align-items: flex-start;
  }
`;

export const NavItem = styled.li`
  display: inline;
  padding-right: 2.5rem;
  font-size: 1.6rem;
  position: relative;
  padding: 2rem 2.5rem 2rem 0;

  &:last-child {
    padding-right: 0;
  }

  a,
  span {
    text-decoration: none;
    color: ${props =>
      props.enabled === "true" ? colors.greenLightSea : colors.grayAluminium};

    ${props => props.isHome && "color: white"};

    &:hover {
      color: ${props =>
        props.isHome ? colors.grayAliceBlue : colors.greenLightSea};
    }
  }

  a:hover {
    cursor: pointer;
  }

  span:hover {
    cursor: default;
  }

  ul {
    background-color: white;
    border-radius: 4px;
    font-size: 1.6rem;
    text-align: left;
    position: absolute;
    top: 5.5rem;
    min-width: 22rem;
    box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.05);
    display: none;

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

    li {
      a {
        padding: 0.8rem 1.6rem;
        color: #8e9091;
        display: inline-block;
        width: 100%;
      }

      :hover {
        background-color: #f0f0f0;

        a {
          color: #f9a21a;
        }
      }

      :first-of-type {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }

      :last-of-type {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }

  :hover {
    ul {
      display: block;
    }
  }
`;

export const MobileNav = styled.div`
  @media ${md} {
    display: none;
  }

  i {
    font-size: 2.8rem;
    color: ${props => (props.isHome ? "white" : `${colors.greenLightSea}`)};
    transition: all 0.2s linear;
    ${props =>
      props.isOpen &&
      `
    transform: rotate(90deg);
    transition: all .2s linear;
  `};
  }
`;

export const MobileNavMenu = styled.div`
  width: 85%;
  height: 100%;
  background: ${colors.greenLightSea};
  box-shadow: 3px 3px 30px rgba(0, 0, 0, 0.6);
  padding: 0 2rem;
  overflow: scroll;

  img {
    height: 2.9rem;
    width: 9.1rem;
    margin: 2rem 0;
  }

  ul {
    margin-top: 0;
  }
`;

export const MobileNavItem = styled.li`
  display: block;
  padding: ${props => (props.subItem ? "0.8rem 0" : "1rem 0")};
  font-size: ${props => (props.subItem ? "1.8rem" : "2rem")};
  border-top: 2px solid #23b8a1;
  background-color: transparent;
  box-shadow: none;
  color: #fff;
  margin: 0;
  ${props => props.subItem && "margin-left: 1.5rem"};

  i {
    display: none;
  }

  a {
    color: #fff;
    text-decoration: none;
    display: block;
    width: 100%;
  }
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${props => (props.isOpen ? 0 : "-100vw")};
  transition: 0.5s left ease;
`;
