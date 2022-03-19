import React from "react"
import BlogPostRecommendations from "."
import mock from "./mock.json"

export default {
  title: "Components/BlogPostRecommendations",
  component: BlogPostRecommendations
}

export const Default = () => {
  return <BlogPostRecommendations posts={mock} />
}
