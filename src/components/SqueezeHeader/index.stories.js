import React from "react"
import SqueezeHeader from "."

export default {
  title: "Components/SqueezeHeader",
  component: SqueezeHeader
}

export const Default = () => {
  return (
    <SqueezeHeader
      logoImageURL="https://yarno.imgix.net/static/logos/yarno_green.png?h=58&exp=100"
      logoLinkUrl="https://www.yarno.com.au"
      phoneLink="tel:1300797546"
      phoneLabel="1300 79 75 46"
      emailLink="mailto:mark@yarno.com.au"
      emailLabel="Email us"
    />
  ) 
}
