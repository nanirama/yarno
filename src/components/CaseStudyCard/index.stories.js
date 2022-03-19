import React from "react"
import CaseStudyCard from "."

export default {
  title: "Components/CaseStudyCard",
  component: CaseStudyCard
}

export const Default = () => {
  return (
    <CaseStudyCard
      title="The results are in: Supercheap Auto's first Yarno Campaign"
      url="/case-studies/supercheap-auto">
      <img src="https://yarno-marketing.imgix.net/case-studies/grant_broadcasters.png?auto=format&ixlib=react-9.0.3&w=2258" />
    </CaseStudyCard>
  )
}
