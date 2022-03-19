import React from "react"
import { Container } from "./styles"
import TeamMember from "../../components/TeamMember"

const TeamMembers = ({ slice }) => {
  return (
    <Container>
      {slice.items.map(member => {
        return (
          <TeamMember key={member.yarnoer.id} member={member.yarnoer.document.data} />
        )
      })}
    </Container>
  )
}

export default TeamMembers
