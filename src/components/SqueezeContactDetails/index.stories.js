import React from "react"
import SqueezeContactDetails from "."

export default {
  title: "Components/SqueezeContactDetails",
  component: SqueezeContactDetails
}

export const Default = () => {
  return (
    <SqueezeContactDetails
      imageURL="https://yarno-marketing.imgix.net/mark_avatar.png"
      imageAlt="Mark Eggers"
      phoneLink="tel:0401872305"
      emailLink="mailto:mark@yarno.com.au"
    >
      <h2>Contact Mark today to find out how we can help</h2>
      <p>
        <i className="fa fa-phone" />
        <a href="tel:+61401872305">0401 872 305</a>
      </p>
      <p>
        <i className="fa fa-envelope" style={{ fontWeight: 600 }} />
        <a href="mailto:mark@yarno.com.au">mark@yarno.com.au</a>
      </p>
    </SqueezeContactDetails>
  ) 
}
