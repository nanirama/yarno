import subscribeToCampaignMonitorList from "../utils/campaignMonitorSubscribe"
import pipedriveSubmission from "../utils/pipedriveSubmission"

export default function handler(req, res) {
  const body = req.body

  if (req.method === `POST`) {
    if (body.downloadListID) {
      subscribeToCampaignMonitorList(req.body)
    }

    if (body.stageID) {
      pipedriveSubmission(req.body)
    }

    return res.json(`OK`)
  } else {
    return res.json(`ERROR`)
    // Handle other methods or return error
  }
}