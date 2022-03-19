import React from "react"
import GridItem from "."

export default {
  title: "Components/GridItem",
  component: GridItem
}

export const Default = () => {
  const imageURL = "https://images.prismic.io/yarno/f6e981bd-204f-42e5-afec-47aade9809d8_flaticon-head-brain.webp?auto=compress,format"

  return (
    <GridItem imageURL={imageURL} imageAlt={"icon"}>
      <h3>Brain plasticity problems</h3>
      <p>
        The problem with cramming is that you don't learn, not really. You might pass the test, but a few days later, everything you've worked so hard to put in your brain has somehow fallen out. Luckily, microlearning has his own sidekick - <strong>spaced repetition</strong>. Microlearning allows learners to be re-presented with content at spaced intervals, so they can revise and cement their knowledge, leading to mastery over time. Bam. Pow. Mastery here we come.
      </p>
    </GridItem>
  )
}
