import React from "react";
import styled from "styled-components";
import { sm, md } from "../utils/breakpoints";

export const Hero = styled.div`
  margin: 14rem 2rem 0rem 2rem;
  text-align: center;

  em {
    color: ${props => props.theme.colors.secondary};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-style: normal;
    position: relative;
    display: inline-block;
    font-weight: bold;
    font-size: 0.7em;

    &:after {
      position: absolute;
      content: "";
      height: 3px;
      width: 150%;
      background: #E9ECEE;
      bottom: -1rem;
      left: -25%;
    }
  }

  h1 {
    font-weight: normal;
    strong {
      font-weight: bold;
    }
    margin-bottom: 3rem;
  }

  > div:first-of-type {
    margin-top: 3rem;
    max-width: 66rem;
  }

  div {
    margin-top: 5rem;
  }

  img {
    height: auto;
  }

  @media ${md} {
    text-align: left;
    em {
      &:after {
        left: 0;
      }
    }

    header {
      display: flex;
      div:first-of-type {
        flex: 2;
        img {
          margin: 3rem 0 5rem 0;
        }
      }

      div:last-of-type {
        display: flex;
        align-items: flex-end;
      }
      div {
        flex: 1;
      }
    }
  }
`;

export const Quote = styled.div`
  background: ${props => props.theme.colors.grayBackground};
  overflow: hidden;
  padding: 3rem 0;

  blockquote {
    margin: 0 3rem;
    padding-left: 2rem;
    font-style: italic;
    border-left: 5px solid ${props => props.theme.colors.primary};

    footer {
      font-style: normal;
      color: #9f9f9f;
      p {
        font-weight: bold;
        margin-bottom: 0.3rem;
      }
    }
  }

  @media ${md} {
    padding: 8rem 0;
    background: ${props => props.theme.colors.grayBackground};

    blockquote {
      max-width: 77rem;
      margin: 0 auto;
      padding-left: 3rem;
    }
  }
`;

export const VideoContainer = styled.div`
  text-align: center;
  margin: 5rem 0;

  h2 {
    color: ${props => props.theme.colors.primary};
  }

  @media ${md} {
    h2 {
      margin-top: 6rem;
      margin-bottom: 4rem;
    }
  }
`;

export const VideoStripes = styled.div`
  position: relative;
  margin: 3rem 0;

  > svg {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 0;
    right: 0;
    margin-top: -30px;
  }

  > div {
    position: relative;
    z-index: 2;
    margin: 0 3rem;

    @media ${sm} {
      margin: 0 auto;
      max-width: 70rem;
    }
  }
`;

export const WhoTheyAre = styled.div`
  margin: 3rem;

  h2 {
    position: relative;
    display: inline-block;
    &:before {
      content: " ";
      position: absolute;
      height: 4px;
      width: 14rem;
      background: ${props => props.theme.colors.primary};
      top: -2.7rem;
    }
  }

  @media ${md} {
    margin: 6rem 3rem;
    > div {
      display: flex;
    }

    > div > div:first-of-type {
      margin-right: 8rem;
    }
  }
`;

export const Challenges = styled.div`
  margin: 7rem 0rem 0 0rem;
  > div {
    padding: 0 3rem;
  }
  &:after {
    position: relative;
    display: block;
    content: " ";
    height: 60px;
    width: 100%;
    background: linear-gradient(
      to bottom,
      white,
      ${props => props.theme.colors.grayBackground}
    );
  }

  h2 {
    position: relative;
    &:before {
      content: " ";
      position: absolute;
      height: 4px;
      width: 14rem;
      background: ${props => props.theme.colors.primary};
      top: -2.7rem;
      left: 0;
    }
  }

  @media ${md} {
    margin: 8rem 0;
    > div {
      max-width: 85rem;
    }
    h2 {
      text-align: center;

      &:before {
        left: 50%;
        margin-left: -7rem;
      }
    }
  }
`;

export const Addressed = styled.div`
  margin: 6rem 3rem;

  h2 {
    margin-top: 5rem;
    position: relative;
    display: inline-block;
    &:before {
      content: " ";
      position: absolute;
      height: 4px;
      width: 14rem;
      background: ${props => props.theme.colors.primary};
      top: -2.7rem;
    }
  }

  @media ${md} {
    h2 {
      margin-top: 2rem;
    }
    display: flex;
    div:first-of-type {
      padding-right: 6rem;
    }
    div {
      flex: 1;
    }
  }
`;



export const Ongoing = styled.div`
  margin: 3rem;

  h2 {
    margin-top: 6rem;
    text-align: center;
    position: relative;
    &:before {
      content: " ";
      position: absolute;
      height: 4px;
      width: 14rem;
      background: ${props => props.theme.colors.primary};
      top: -2.7rem;
      left: 50%;
      margin-left: -7rem;
    }
  }

  img {
    margin: 3rem 0;
  }

  @media ${md} {
    margin-top: 7rem;
    > div {
      max-width: 77rem;
    }
  }
`;

export const CaseStudyExplorer = styled.div`
  padding-top: 3rem;
  background: ${props => props.theme.colors.grayBackground};
  text-align: center;
  > div > div {
    padding: 3rem 3rem 0 3rem;
  }
  @media ${md} {
    margin-top: 7rem;
    > div > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 3rem;
    }
  }
`;

export const VideoStills = styled.div`
  margin: 4rem 0;
  img {
    display: none;
  }
  img:first-of-type {
    display: block;
  }
  @media ${md} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
    img {
      display: block;
    }
  }
`;
