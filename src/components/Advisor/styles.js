import styled from "styled-components"
import { TeamCard } from "../TeamMember/styles"
import { sm, md, lg } from "../../utils/breakpoints"

export const AdvisorCard = styled(TeamCard)`
  @media ${md} {
    margin: 0 5rem;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`
