import React from "react"
import BlogPostCard from "."
import mock from "./mock.json"

export default {
  title: "Components/BlogPostCard",
  component: BlogPostCard
}

export const Default = () => {
  return <BlogPostCard post={mock} />
}