import React from "react"
import { RichText } from "prismic-reactjs"
import BlogPostCard from "../components/BlogPostCard"
import Pagination from "../components/Pagination"
import Meta from "../components/Meta"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import Container from "../components/common/Container"
import { graphql } from "gatsby"
import FeaturedTopics from "../components/FeaturedTopics"
import styled from "styled-components"
import linkResolver from "../utils/linkResolver"
import BlogFrame from "../components/BlogFrame"
import YarnSubscribe from "../components/YarnSubscribe"

const PostContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`

const TagPage = ({ data, pageContext, location }) => {
  const topic = data.prismicTag.data
  const postNodes = data.allPrismicBlogPost.edges
  return (
    <Layout
      location={location}
      prismicLayout={data.prismicLayout}
      prismicSiteBanner={data.prismicSitebanner}>
      <Meta
        title={`${topic.name} | The Yarno Blog`}
        description={
          "Keep up to date with the latest in learning trends, brain science, productivity and more"
        }
        canonical={location.href}
      />
      <PageHeader>
        <h1>{topic.name}</h1>
        {topic.description && <RichText render={topic.description.richText} />}
      </PageHeader>

      <Container>
        <YarnSubscribe inline />
      </Container>

      <BlogFrame>
        <FeaturedTopics topics={data.prismicFeaturedTopics.data.topics} />

        <PostContainer>
          {postNodes.map(node => {
            const post = node.node
            return <BlogPostCard key={post.id} post={post} />
          })}
        </PostContainer>

        <Pagination
          pageContext={pageContext}
          rootPath={`/blog/tag/${pageContext.id}`}
        />
      </BlogFrame>
    </Layout>
  )
}

export default TagPage

export const postQuery = graphql`
  query ($id: String!, $limit: Int!, $skip: Int!) {
    ...PrismicSiteBanner
    ...PrismicLayout
    prismicTag(uid: { eq: $id }) {
      id
      uid
      data {
        name
        description {
          richText
        }
      }
    }
    ...FeaturedTopics

    allPrismicBlogPost(
      filter: { data: { tags: { elemMatch: { tag: { uid: { eq: $id } } } } } }
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
