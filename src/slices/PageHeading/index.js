import React from "react"
import { RichText } from "prismic-reactjs"
import PageHeader from "../../components/PageHeader"

const PageHeading = ({ slice }) => {
  return (
    <PageHeader
      headerText={<RichText render={slice.primary.title.richText} />}
      subHeader={<RichText render={slice.primary.subtitle.richText} />}></PageHeader>
  )
}

export default PageHeading