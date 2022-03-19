import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { TeamCard, SocialIcons, GreenUnderline } from "./styles"
import { SocialIcon } from "../common/styles"

const TeamMember = ({ member }) => {
  return (
    <TeamCard key={member.id}>
      <GatsbyImage
        image={getImage(member.profile_picture)}
        alt={member.name.text}
      />
      <h4>{member.name.text}</h4>
      <p>{member.job_title.text}</p>
      <SocialIcons>
        <SocialIcon
          style={{ marginRight: 0 }}
          href={member.linkedin.url}
          target="_blank"
          aria-label={`Visit ${member.name.text}'s LinkedIn`}>
          <i className="fa fa-linkedin" />
        </SocialIcon>
      </SocialIcons>
      <GreenUnderline />
    </TeamCard>
  )
}
export default TeamMember
