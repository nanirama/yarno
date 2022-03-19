import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Meta from "../components/Meta"
import BlogPostCard from "../components/BlogPostCard"
import Pagination from "../components/Pagination"
import FeaturedTopics from "../components/FeaturedTopics"
import Container from "../components/common/Container"
import SliceMachine from "../slices/SliceMachine"
import BlogFrame from "../components/BlogFrame"
import YarnSubscribe from "../components/YarnSubscribe"

import styled from "styled-components"

const PostContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`

const Template = ({ data, pageContext, location }) => {
  const edges = data.allPrismicBlogPost.edges

  return (
    <Layout
      location={location}
      prismicLayout={data.prismicLayout}
      prismicSiteBanner={data.prismicSitebanner}>
      <Meta
        title={`Our Blog`}
        description={
          "Keep up to date with the latest in learning trends, brain science, productivity and more"
        }
        canonical={location.href}
      />
      <SliceMachine body={data.prismicBlogIndex.data.body} />
      <Container>
        <YarnSubscribe inline />
      </Container>
      <BlogFrame>
        <FeaturedTopics topics={data.prismicFeaturedTopics.data.topics} />
        <PostContainer>
          {edges.map(edge => {
            const post = edge.node
            return <BlogPostCard key={post.id} post={post} />
          })}
        </PostContainer>
        <Pagination pageContext={pageContext} rootPath={"/blog"} />
      </BlogFrame>
    </Layout>
  )
}

export default Template

export const query = graphql`
  query ($limit: Int!, $skip: Int!) {
    ...PrismicSiteBanner
    ...PrismicLayout
    prismicBlogIndex {
      ...BlogIndex
    }

    ...FeaturedTopics

    allPrismicBlogPost(
      limit: $limit
      skip: $skip
      sort: { fields: data___release_date, order: DESC }
    ) {
      edges {
        node {
          ...BlogPostCard
        }
      }
    }
  }
`
