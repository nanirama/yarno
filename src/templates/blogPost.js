import React from "react"
import Meta from "../components/Meta"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import BlogPost from "../components/BlogPost"

const Template = ({ data, location }) => {
  const post = data.prismicBlogPost.data
  return (
    <Layout
      location={location}
      prismicLayout={data.prismicLayout}
      prismicSiteBanner={data.prismicSitebanner}>
      <Meta
        title={`${post.title.text} | The Yarno Blog`}
        description={post.excerpt.text}
        canonical={location.href}
      />
      <BlogPost post={post} />
    </Layout>
  )
}

export default Template

export const postQuery = graphql`
  query ($id: String!) {
    ...PrismicSiteBanner
    ...PrismicLayout
    prismicBlogPost(id: { eq: $id }) {
      ...BlogPost
    }
  }
`
