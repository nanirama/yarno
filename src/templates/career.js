import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import SliceMachine from "../slices/SliceMachine"
import Layout from "../components/Layout"
import Container from "../components/common/Container"
import Meta from "../components/Meta"
import PageHeader from "../components/PageHeader"

const Template = ({ data, location }) => {
  const career = data.prismicJobPost.data
  return (
    <Layout
      location={location}
      prismicLayout={data.prismicLayout}
      prismicSiteBanner={data.prismicSitebanner}>
      <Meta
        title={career.meta_title}
        description={career.meta_description}
        canonical={location.href}
      />
      <Container>
        <PageHeader headerText={<RichText render={career.title.richText} />} />
      </Container>
      <SliceMachine body={career.body} />
    </Layout>
  )
}

export default Template

export const postQuery = graphql`
  query ($id: String!) {
    ...PrismicSiteBanner
    ...PrismicLayout
    prismicJobPost(id: { eq: $id }) {
      ...JobPost
    }
  }
`
