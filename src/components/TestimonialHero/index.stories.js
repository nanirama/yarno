import React from "react"
import TestimonialHero from "."

export default {
  title: "Components/TestimonialHero",
  component: TestimonialHero
}

export const Default = () => {
  return (
    <TestimonialHero
      quote="&ldquo;It's a great way to learn. Our weekly participation rates are sky high, and we found Yarno encourages a healthy level of competition&rdquo;"
      author="Dan Walsh"
      authorImageURL="https://yarno.imgix.net/static/dan_walsh.png?w=700"
      authorJobTitle="National L&D Manager"
      company="Mortgage Choice"
      companyLogo="https://yarno.imgix.net/static/mortgage_choice_logo.png"
    />
  )
}

export const WithoutAuthorImage = () => {
  return (
    <TestimonialHero
      quote="&ldquo;The program is fantastic in that if it thinks that you are missing some knowledge, it is able to construct the quizzes to promote learning in that particular area.&rdquo;"
      author="Field salesperson"
      authorJobTitle="Grant Broadcasters"
      company="Grant Broadcasters"
      companyLogo={"https://yarno-marketing.imgix.net/partners/grant_broadcasters.png?w=260&h=140&fit=fillmax&fill=transparent"}
    />
  )
}

export const QuoteOnly = () => {
  return (
    <TestimonialHero quote="&ldquo;For every $1 invested in mental health businesses receive an average return of $2.30&rdquo;" />
  )
}
