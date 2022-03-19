import React from "react"
import CampaignMonitorSubscription from "."

export default {
  title: "Components/CampaignMonitorSubscription",
  component: CampaignMonitorSubscription
}

export const Default = () => {
  return (
    <CampaignMonitorSubscription
      listID="65e060aeea730742e65ddb9f4cb5ebb3"
      successMessage="Thanks so much! Your eBook has been automagically sent to your email."
      submitLabel="Download eBook"
      withYarnSubscribe
    />
  )
}

export const WithoutYarnSubscribe = () => {
  return (
    <CampaignMonitorSubscription
      listID="2c598a44455e88cb3c08ef8db31df9cf"
      successMessage="Thanks so much! You're all signed up, we'll be in touch soon."
      submitLabel="Subscribe"
    />
  )
}
