import React from "react"
import { RichText } from "prismic-reactjs"
import Container from "../../components/common/Container"
import Challenge from "../../components/Challenge"
import { Challenges } from "./styles"

const CaseStudyChallenges = ({ slice }) => {
  return (
    <Challenges>
      <Container>
        <RichText render={slice.primary.challenge_context.richText} />

        {slice.items.map((item, index) => (
          <Challenge key={index} number={index + 1} title={item.challenge_title.text}>
            <RichText render={item.challenge_description.richText} />
          </Challenge>
        ))}
      </Container>
    </Challenges>
  )
}
export default CaseStudyChallenges
