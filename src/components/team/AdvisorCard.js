import React from "react"
import styled from "styled-components"
import { md } from "../../utils/breakpoints"
import { SocialIcons } from "./styles"
import { SocialIcon } from "../common/styles"
import { AvatarCircle } from "../common"

const CardContainer = styled.div`
  max-width: 22rem;
  min-width: 18rem;
  margin: 2rem 2% 5rem 2%;
  flex: 0 0 75%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  h4 {
    color: #595959;
    font-size: 1.6rem;
    text-align: center;
    margin: 0 auto;
    padding: 2rem 0 0 0;
    text-transform: uppercase;
  }

  p {
    font-size: 1.6rem;
    margin-top: 1rem;
    font-style: italic;
  }

  @media ${md} {
    margin: 0 4%;
    flex: 0 0 42%;

    h4, p {
      font-size: 1.8rem;
    }
  }
`

export default function AdvisorCard(props) {
  return (
    <CardContainer>
      <AvatarCircle gatsbyImage fixed={props.sourceImage} alt={props.name} />
      <h4>{props.fullName}</h4>
      <p>{props.jobTitle}</p>
      <SocialIcons style={{ position: "absolute", left: 0, right: 0, bottom: "-5rem" }}>
        <SocialIcon
          style={{ marginRight: 0 }} 
          href={props.linkedIn} 
          target="_blank"
          aria-label={`Visit ${props.fullName}'s LinkedIn`}
        >
          <i className="fa fa-linkedin" />
        </SocialIcon>
      </SocialIcons>
    </CardContainer>
  )
}
