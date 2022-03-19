import React from "react"
import Advisor from "."

export default {
  title: "Components/Advisor",
  component: Advisor
}

const member = {
  name: {
    text: "Gillian Davie"
  },
  linkedin: {
    url: "https://www.linkedin.com/in/gillian-davie-gaicd-7b865312/"
  },
  job_title: {
    text: "Head of People & Culture at AMP Australia"
  },
  profile_picture: {
    url:
      "https://images.prismic.io/yarno/ceb1acf8-5ed1-4938-99b3-c2a64abb4a30_gillian-davie.png?auto=compress%2Cformat&rect=0%2C2%2C260%2C260&w=132&h=132&fit=max&q=50"
  }
}

export const Default = () => {
  return <Advisor member={member} />
}
