import React from "react"
import styled from "styled-components"
import { md } from "../../utils/breakpoints"

export const Hamburger = styled.button`
  position: absolute;
  top: 3px;
  right: 0;
  z-index: 20001;

  padding: 15px 15px 6px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, -webkit-filter;
  transition-property: opacity, filter;
  transition-property: opacity, filter, -webkit-filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: 0;
  }

  > span {
    width: 30px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  span span {
    display: block;
    top: 50%;
    margin-top: -2px;

    width: 24px;
    height: 2px;
    background-color: ${props =>
      props.inverted ? "#fff" : props.theme.colors.primary};
    border-radius: 3px;
    position: absolute;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;

    &:before,
    &:after {
      width: 24px;
      height: 2px;
      background-color: ${props =>
        props.inverted ? "#fff" : props.theme.colors.primary};
      border-radius: 3px;
      position: absolute;
      transition-property: -webkit-transform;
      transition-property: transform;
      transition-property: transform, -webkit-transform;
      transition-duration: 0.15s;
      transition-timing-function: ease;
      content: "";
      display: block;
    }

    &:before {
      top: -8px;
    }

    &:after {
      bottom: -8px;
    }
  }

  ${props =>
    props.active &&
    `
    span span {
      -webkit-transform: translate3d(0, 8px, 0) rotate(45deg);
      transform: translate3d(0, 8px, 0) rotate(45deg);

      top: 2px;
      &:before {
        top: 8px;
        transition-property: opacity, -webkit-transform;
        transition-property: transform, opacity;
        transition-property: transform, opacity, -webkit-transform;
        transition-timing-function: ease;
        transition-duration: 0.2s;

        -webkit-transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
        transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
        opacity: 0;
      }

      &:after {
        top: 8px
        -webkit-transform: translate3d(0, -8px, 0) rotate(-90deg);
        transform: translate3d(0, -8px, 0) rotate(-90deg);
      }
    }

  `}
  @media ${md} {
    display: none;
  }
`
