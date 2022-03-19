import React from "react"
import { RichText } from "prismic-reactjs"
import { Link } from "gatsby"
import linkResolver from "../../utils/linkResolver"
import { Card, InnerWrapper } from "./styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPostCard = ({ post }) => {
  const { data } = post

  return (
    <Card to={linkResolver(post)}>
      <InnerWrapper>
        <header>
          <figure>
            {data.featured_image && (
              <GatsbyImage
                image={getImage(data.featured_image)}
                alt={data.featured_image.alt}
              />
            )}
          </figure>
          <h2>{data.title.text}</h2>
        </header>
        <section>
          <RichText render={data.excerpt.richText} />
          <div>
            <span>
              {data.author &&
                data.author.document &&
                data.author.document.data.name.text}
              , {data.read_time_in_minutes} minute read
            </span>
          </div>
        </section>
      </InnerWrapper>
      <footer>
        {data.author &&
          data.author.document &&
          data.author.document.data.profile_picture && (
            <img
              src={
                data.author.document.data.profile_picture.url + "&w=100&bg=fff"
              }
              alt={data.author.document.data.name.text}
            />
          )}
        <div>
          <small>
            {data.tags
              .map(t => {
                const tag = t.tag.document
                if (!tag) {
                  return null
                }
                return <span key={tag.uid}>{tag.data.name}</span>
              })
              .reduce((prev, curr) => [prev, ", ", curr])}
          </small>
          <img src="/images/arrow.png" alt="Card arrow" />
        </div>
      </footer>
    </Card>
  )
}
export default BlogPostCard
