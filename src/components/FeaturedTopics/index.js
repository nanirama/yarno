import React from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import linkResolver from "../../utils/linkResolver"
import { TopicList } from "./styles"

const FeaturedTopics = ({ topics }) => {
  return (
    <TopicList>
      <li>
        <Link to="/blog/">Recent</Link>
      </li>
      {topics.map(({ topic }) => {
        return (
          <li key={topic.uid}>
            <Link to={linkResolver(topic)}>{topic.document.data.name}</Link>
          </li>
        )
      })}
    </TopicList>
  )
}

export default FeaturedTopics
