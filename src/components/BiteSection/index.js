import React from "react"
import { TopSection, FancyLineDecoration, Bite } from "./styles"

const BiteSection = props => {
  return (
    <>
      <TopSection>
        <div>
          <FancyLineDecoration />
          <h2>What is microlearning?</h2>
          <p>
            Microlearning, as the name suggests, is learning delivered in small
            doses. It's bite-sized chunks of knowledge, delivered at the most
            crucial points in the learning process. And, for extra points, you
            later re-deliver the content for maximum knowledge retention and
            behaviour change.
          </p>
        </div>
      </TopSection>
      <Bite background={props.image}>
        <p>
          "Learning in bite-sized chunks...
          <br />
          Mmmmm, delicious"
        </p>
        <hr />
        <p>
          <span>Yarno learner</span>
          <br />
          Post-campaign feedback
        </p>
      </Bite>
    </>
  )
}

export default BiteSection
