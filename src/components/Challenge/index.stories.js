import React from "react"
import Challenge from "."

export default {
  title: "Components/Challenge",
  component: Challenge
}

export const Default = () => {
  return (
    <Challenge number="1" title="Distributed workforce">
      <p>
        The growth of Grant Broadcasters to 52 stations spanning the whole of
        Australia meant the company was faced with a challenge when it came to
        the professional development of its sales teams: how do you create a
        cohesive learning program, how do you impart the same information and
        level of training, to a workforce that is spread right across the
        country?
      </p>
    </Challenge>
  )
}
