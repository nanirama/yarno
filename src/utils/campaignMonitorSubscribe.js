import fetch from "node-fetch"

const subscribeToCampaignMonitorList = body => {
  if (!body.downloadListID) {
    return false
  }

  const url = `https://api.createsend.com/api/v3.2/subscribers/${body.downloadListID}.json`
  const campaignMonitorKey = Buffer.from(
    `${process.env.CAMPAIGN_MONITOR_API_KEY}:x`
  ).toString("base64")

  const data = {
    EmailAddress: body.email,
    Name: body.name,
    CustomFields: body.CustomFields,
    Resubscribe: true,
    ConsentToTrack: "Yes"
  }

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${campaignMonitorKey}`
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      if (data.Code == 200) {
        return true
      } else {
        console.log(data)
        return false
      }
    })
    .catch(error => {
      return false
    })
}

export default subscribeToCampaignMonitorList
