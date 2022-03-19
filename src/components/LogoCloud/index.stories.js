import React from "react"
import LogoCloud from "."

export default {
  title: "Components/LogoCloud",
  component: LogoCloud
}

export const Default = () => {
  return (
    <LogoCloud>
      <img
        src="https://yarno-marketing.imgix.net/partners/sca.png?w=260&h=140&fit=fillmax&fill=transparent"
        alt="sca-logo"
      />
      <img
        src="https://yarno-marketing.imgix.net/partners/don.png?w=260&h=140&fit=fillmax&fill=transparent"
        alt="don-logo"
      />
      <img
        src="https://yarno-marketing.imgix.net/partners/woolworths.png?w=260&h=140&fit=fillmax&fill=transparent"
        alt="woolworths-logo"
      />
      <img
        src="https://yarno-marketing.imgix.net/partners/rsm.png?w=260&h=140&fit=fillmax&fill=transparent"
        alt="rsm-logo"
      />
      <img
        src="https://yarno-marketing.imgix.net/partners/grant_broadcasters.png?w=260&h=140&fit=fillmax&fill=transparent"
        alt="grant-broadcasters-logo"
      />
      <img
        src="https://yarno-marketing.imgix.net/partners/rft.png?w=260&h=140&fit=fillmax&fill=transparent"
        alt="rft-logo"
      />
    </LogoCloud>
  )
}
