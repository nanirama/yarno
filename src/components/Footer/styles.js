import styled from "styled-components"
import { colors } from "@yarno/thread"
import { sm, lg, md } from "../../utils/breakpoints"

export const NavListList = styled.ul`
  width: 100%;
  max-height: ${props => (props.active ? "1000px" : "0px")};
  overflow: hidden;
  transition: 0.2s all ease-in-out;

  @media ${md} {
    max-height: 1000px;
  }
`
export const NavListTitle = styled.h4`
  &:after {
    display: inline-block;
    font: normal normal normal 14px/1 Jupiter;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    content: "\\F052";
    margin-left: 2rem;
    transition: 0.1s all ease-in;
    @media ${md} {
      display: none;
    }
  }
  ${props =>
    props.active &&
    `
    &:after {
    transform: rotate(180deg)
    }
  `}
`

export const Footer = styled.footer`
  background-color: #f2f2f2;
  padding: 2rem;
  padding-top: 4rem;
  ${props =>
    props.topBorder && `border-top: 5px solid ${colors.orangeBrightSun};`}

  p {
    margin: 0;
  }

  hr {
    color: ${colors.grayWhisper};
    background-color: ${colors.grayWhisper};
    height: 0.1rem;
    border: none;
    margin: 2rem 0;
  }

  @media ${md} {
    ${props => props.mobileOnly && "display: none"};
  }

  @media ${lg} {
    padding: 7rem 7.5rem;
    padding-bottom: 2.5rem;
  }
`

export const Footnote = styled.div`
  font-size: 0.7em;
  text-align: center;

  p {
    max-width: 80rem;
    margin: 0 auto;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1.5rem;

    @media ${md} {
      margin-bottom: 0;
      flex-direction: row;

      p {
        margin: 0 1rem 0.5rem 0rem;
        padding-right: 1rem;
        border-right: 1px solid ${colors.grayWhisper};
        &:last-of-type {
          border-right: 0;
          margin-right: 0;
          padding-right: 0;
        }
      }
    }

    a {
      text-decoration: none;
      color: inherit;
      &:hover {
        color: ${props => props.theme.colors.secondary};
      }
    }
  }
`

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media ${md} {
    align-items: inherit;
    margin-bottom: 5rem;
  }

  @media ${md} {
    flex-direction: row;
  }

  > div {
    margin: 0 2.5rem;
    width: 100%;
    max-width: 40rem;
    text-align: center;
    padding-bottom: 2rem;

    @media ${md} {
      text-align: left;
      ${props =>
        props.borderLeft &&
        `
        border-left: 1px solid #D8D8D8;
        padding-left: 5rem;
  `};
    }
  }

  h4 {
    color: ${colors.greenNiagara};
    font-family: "Raleway", sans-serif;
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 1rem;
    text-transform: uppercase;

    @media ${md} {
      font-size: 1.6rem;
      margin-bottom: 2rem;
    }

    i {
      margin-left: 2rem;
      transition: all 0.2s linear;
      ${props =>
        props.listVisible &&
        `
        transform: scaleY(-1);
        transition: all .2s linear;
      `};
    }

    @media ${md} {
      text-transform: none;
      i {
        display: none;
      }
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 1.6rem;
  }
`
export const ListItem = styled.li`
  font-size: 1.6rem;
  padding: 0.4rem 0;

  ${props =>
    props.withIcon &&
    `
  padding-right: 3rem !important;
  padding-left: 3.5rem !important;
  position: relative;
  i {
    position: absolute;
    left: 0;
    top: 6px;
    color: ${props.theme.colors.primary};
  }
  `}

  @media ${md} {
    padding: 0.3rem 0;
    border-bottom: none;
  }

  a,
  a p {
    display: block;
    color: inherit;
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }

  ${props =>
    props.linkStyle == "pill" &&
    `
    a {
      background-color: white;
      border-radius: 1.25rem;
      padding: 0.5rem 1.5rem;
      display: inline-block;
      margin-top: 0.5rem;
      box-shadow: rgb(0 0 0 / 10%) 3px 3px 10px;
    }
  `}

  a[data-link='Support'] {
    &:before {
      display: inline-block;
      font: normal normal normal 14px/1 Jupiter;
      font-size: inherit;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      content: "\f058";
      margin-right: 0.7rem;
    }
  }

  a[data-link="Login"] {
    &:before {
      display: inline-block;
      font: normal normal normal 14px/1 Jupiter;
      font-size: inherit;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      content: "\f006";
      margin-right: 0.7rem;
    }
  }
`

export const CapterraBadge = styled.div`
  margin-top: 3rem;
  @media ${md} {
    margin-left: -11px;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  @media ${md} {
    justify-content: flex-start;
  }
`

export const SocialIcon = styled.a`
  background-color: white;
  height: 4rem;
  width: 4rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-right: 1.5rem;
  text-decoration: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.09);
  font-size: 2rem;

  &:hover {
    i {
      color: ${colors.orangeBrightSun};
      opacity: 1;
      transition: 0.2s all ease;
    }
  }

  i {
    color: #333;
    opacity: 0.3;
    display: flex;
    align-items: center;
  }
`
