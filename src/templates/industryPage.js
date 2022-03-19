import React from "react"
import { graphql } from "gatsby"

import Meta from "../components/Meta"
import Layout from "../components/Layout"
import SliceMachine from "../slices/SliceMachine"

/**
 * Single page (/:slug)
 *
 * This file renders a single page and loads all the content.
 *
 */
const Template = ({ data, location }) => {
  const page = data.prismicIndustryPage.data

  return (
    <>
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
    </>
  )
}

export default Template

export const postQuery = graphql`
  query ($id: String!) {
    ...PrismicSiteBanner
    ...PrismicLayout
    prismicIndustryPage(id: { eq: $id }) {
      data {
        body {
          ...IndustryLogoCloudSlice
          ...StatisticCalloutSlice
          ...IndustryHeaderSlice
          ...IndustryPointsSlice
          ...IndustryCaseStudySlice
          ...IndustryLinksSlice
        }
      }
    }
  }
`
