import React from "react"
import CampaignMonitorSubscription from "../../components/CampaignMonitorSubscription"
import PipedriveForm from "../../components/PipedriveForm"

const SliceMachine = ({ formReference }) => {
  if (formReference.document === null) {
    return null
  }
  const formType = formReference.document.type

  switch (formType) {
    case "campaign_monitor_form":
      return <CampaignMonitorSubscription form={formReference.document} />
    case "pipedrive_form":
      return (
        <PipedriveForm
          form={formReference.document}
        />
      )
  }
}

export default SliceMachine
