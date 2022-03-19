import React from "react";
import styled from "styled-components";
import { sm, lg, md } from "../../utils/breakpoints";

const LinkContainer = styled.li`
  background-color: ${({ tintStyle }) =>
    (tintStyle === "medium" && "#1AA38E") ||
    (tintStyle === "dark" && "#158d7b") ||
    "white"};
  border-radius: 1.25rem;
  padding: 0.5rem 1.5rem;
  font-size: 1.4rem;
  font-family: "Raleway Semi Bold", sans-serif;
  margin: 2rem 1rem 0 0;
  ${props => props.marginLeft && `margin-left: 1rem`};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  width: 12rem;
  display: inline-block;
  vertical-align: middle;

  @media ${md} {
    font-size: 1.2rem;
    width: 10rem;
    margin-right: 0;
  }

  a {
    color: #ffffff;
    text-align: left;
    text-decoration: none;
  }

  i {
    padding-right: 1rem;
  }

  :hover {
    ${({ tintStyle }) => tintStyle === "dark" && "background-color: #1AA38E;"}
    ${({ tintStyle }) => tintStyle === "medium" && "background-color: #158d7b;"}
  }
`;

export default function IconLink({
  title,
  icon,
  to,
  tintStyle,
  marginLeft,
  ...props
}) {
  return (
    <LinkContainer tintStyle={tintStyle} marginLeft={marginLeft} {...props}>
      <a href={to} alt={title} {...props}>
        <i className={`fa fa-${icon}`} />
        {title}
      </a>
    </LinkContainer>
  );
}
