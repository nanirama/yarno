import React from "react"
import PipedriveForm from "."

export default {
  title: "Components/PipedriveForm",
  component: PipedriveForm
}

export const Default = () => {
  return (
    <PipedriveForm
      source={"https://www.yarno.com.au/try/gamification"}
      successMessage={"We'll be in touch..."}
      submitLabel={"Find out more"}
      noMargin
    />
  ) 
}
