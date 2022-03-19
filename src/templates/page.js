import React from "react"
import { graphql } from "gatsby"

import Meta from "../components/Meta"
import Layout from "../components/Layout"
import SliceMachine from "../slices/SliceMachine"

const Template = ({ data, location }) => {
  const page = data.prismicPage.data

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
    prismicPage(id: { eq: $id }) {
      ...PageSEO
      data {
        body {
          ...AdvisorsSlice
          ...AnchorSlice
          ...BenefitsSlice
          ...BiteSectionSlice
          ...CardLinkListSlice
          ...CardListSlice
          ...ContactUsSlice
          ...ContactPageFormSlice
          ...ContentGridSlice
          ...CtaBarSlice
          ...FloatingTestimonialsSlice
          ...FeaturesSlice
          ...FeatureTextBlockSlice
          ...FilmStripSlice
          ...FormSlice
          ...GoogleMapSlice
          ...LogoCloudSlice
          ...LonelyButtonSlice
          ...OutlinedHeroHeaderSlice
          ...PageHeadingSlice
          ...PageIndustryPointsSlice
          ...PageIndustryLinksSlice
          ...PageImageHeroSlice
          ...PageTabSlice
          ...PartnersSlice
          ...ProofsSlice
          ...ResponsiveImageSlice
          ...StripedVideoSlice
          ...TeamMembersSlice
          ...TestimonialsSlice
          ...TextBlockSlice
          ...VideoWithCopySlice
          ...VideoHeroSlice
          ...WavesSlice
        }
      }
    }
  }
`
