import React from "react"
import { RichText } from "prismic-reactjs"
import Meta from "../components/Meta"
import Layout from "../components/Layout"
import Container from "../components/common/Container"
import PageHeader from "../components/PageHeader"
import BlogPostCard from "../components/BlogPostCard"
import Pagination from "../components/Pagination"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlogFrame from "../components/BlogFrame"

import styled from "styled-components"

const PostContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`

const AuthorImage = styled.div`
  margin-bottom: 2rem;
  img {
    border-radius: 100px;
    border: 5px solid white;
    box-shadow: rgb(244 244 244) 1px 1px 3px;
  }
`

const Template = ({ data, pageContext, location }) => {
  const author = data.prismicAuthor.data
  const postNodes = data.allPrismicBlogPost.edges

  return (
    <Layout
      location={location}
      prismicLayout={data.prismicLayout}
      prismicSiteBanner={data.prismicSitebanner}>
      <Meta
        title={`Posts from ${author.name.text}`}
        description={author.bio.text}
        canonical={location.href}
      />
      <PageHeader>
        <AuthorImage>
          <GatsbyImage
            image={getImage(author.profile_picture)}
            alt={author.name.text}
          />
        </AuthorImage>
        <RichText render={author.name.richText} />
        <em>
          <RichText render={author.bio.richText} />
        </em>
      </PageHeader>

      <BlogFrame>
        <PostContainer>
          {postNodes.map(node => {
            const post = node.node
            return <BlogPostCard key={post.id} post={post} />
          })}
        </PostContainer>

        <Pagination
          pageContext={pageContext}
          rootPath={`/blog/author/${pageContext.id}`}
        />
      </BlogFrame>
    </Layout>
  )
}

export default Template

export const postQuery = graphql`
  query ($id: String!, $limit: Int!, $skip: Int!) {
    ...PrismicSiteBanner
    ...PrismicLayout
    prismicAuthor(uid: { eq: $id }) {
      id
      uid
      data {
        name {
          richText
          text
        }
        bio {
          richText
          text
        }
        profile_picture {
          gatsbyImageData(width: 100, height: 100)
        }
      }
    }
    allPrismicBlogPost(
      filter: { data: { author: { uid: { eq: $id } } } }
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
