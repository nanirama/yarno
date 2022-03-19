import React, { Fragment } from "react"
import { RichText } from "prismic-reactjs"
import SliceMachine from "../../slices/SliceMachine"
import Container from "../common/Container"
import PageHeader from "../PageHeader"
import Waves from "../Waves"
import { Link } from "gatsby"
import linkResolver from "../../utils/linkResolver"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlogFrame from "../BlogFrame"

import { FeatureImage, Background, Author, PostContent } from "./styles"

const BlogPost = ({ post }) => {
  const author =
    post.author && post.author.document && post.author.document.data
  const { featured_image, title, read_time_in_minutes } = post

  return (
    <Fragment>
      <Container>
        <PageHeader headerText={<RichText render={title.richText} />}>
          <em>
            {author && author.name.text}, {read_time_in_minutes} min read
          </em>
        </PageHeader>
      </Container>

      {featured_image && (
        <FeatureImage>
          <GatsbyImage
            image={getImage(featured_image)}
            alt={featured_image.alt}
          />
        </FeatureImage>
      )}

      <BlogFrame>
        <PostContent>
          <SliceMachine body={post.body} />
        </PostContent>

        <Container readable>
          <Author>
            <img src={author.profile_picture.url} alt={author.name.text} />
            <div>
              <p>
                <strong>{author.name.text}</strong>
              </p>
              <RichText render={author.bio.richText} />
              <p>
                <Link to={linkResolver(post.author)}>
                  More from {author.name.text}{" "}
                  <i className="fa fa-long-arrow-right" />
                </Link>
              </p>
            </div>
          </Author>
        </Container>
      </BlogFrame>
    </Fragment>
  )
}

export default BlogPost
