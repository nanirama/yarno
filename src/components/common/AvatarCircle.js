import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { md } from "../../utils/breakpoints"

export const OuterImage = styled.div`
  background-color: white;
  border-radius: 50%;
  border: 0.5px solid #f4f4f4;
  box-shadow: 1px 1px 3px #f4f4f4;
  margin: 0 auto;
  height: ${props => (props.height ? `${props.height + 1}rem` : "15rem")};
  width: ${props => (props.height ? `${props.height + 1}rem` : "15rem")};
  min-width: ${props => (props.height ? `${props.height + 1}rem` : "15rem")};

  ${props =>
    props.page === "contact-us" &&
    `
    margin: 0;
    width: 12rem;
    height: 12rem;
    min-width: 12rem;

    @media ${md} {
      width: 15rem;
      height: 15rem;
    }
  `} ${props =>
    props.page === "blog-post" &&
    `
    margin: 0 3rem 0 0;
  `};
`

export const TeamImage = styled.div`
  border-radius: 50%;
  border: 5px solid white;
  overflow: hidden;
  margin: 0.5rem auto;
  height: ${props => (props.height ? `${props.height}rem` : "14rem")};
  width: ${props => (props.height ? `${props.height}rem` : "14rem")};
  background: white;

  ${props =>
    props.page === "contact-us" &&
    `
    width: 11rem;
    height: 11rem;

    @media ${md} {
      width: 14rem;
      height: 14rem;
    }
  `};
`

const AvatarCircle = props => {
  return (
    <OuterImage page={props.page} height={props.height}>
      <TeamImage page={props.page} height={props.height}>
        {props.fixed && <GatsbyImage fixed={props.fixed} alt={props.name} />}
        {props.fluid && <GatsbyImage fluid={props.fluid} alt={props.name} />}
        {props.sourceImage && <img src={props.sourceImage} alt={props.name} />}
      </TeamImage>
    </OuterImage>
  )
}

export default AvatarCircle