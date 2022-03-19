import React from "react"
import { graphql } from "gatsby"
import Meta from "../components/Meta"
import Layout from "../components/Layout"
import SliceMachine from "../slices/SliceMachine"

const Template = ({ data, location }) => {
  const page = data.prismicCaseStudy.data
  return (
    <Layout
      location={location}
      prismicLayout={data.prismicLayout}
      prismicSiteBanner={data.prismicSitebanner}>
      <Meta
        title={page.meta_title}
        description={page.meta_description}
        canonical={location.href}
      />
      <SliceMachine body={page.body} />
    </Layout>
  )
}

export default Template

export const postQuery = graphql`
  query ($id: String!) {
    ...PrismicSiteBanner
    ...PrismicLayout
    prismicCaseStudy(id: { eq: $id }) {
      ...CaseStudy
    }
  }
`
