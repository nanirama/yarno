import React from "react"
import BlogPost from "."
import mock from "./mock.json"

export default {
  title: "Components/BlogPost",
  component: BlogPost
}

export const Default = () => {
  return <BlogPost post={mock} />
}
