import React from "react"
import styled from "styled-components"
import Wave from "../../components/common/Wave"
import { blogPostWaveBottom } from "../../images"

import { Container, FlexContainer } from "../../components/common/styles"
import PostCard from "../BlogPostCard"

const RecommendationsContainer = styled.div`
  background-color: #f7f7f7;
  height: auto;
  width: 100%;
`

const Header = styled.h1`
  text-align: center;
  padding-top: 6rem;
  color: #595959;
  margin-bottom: 4rem;
`

const Recommendations = ({ posts }) => {
  return (
    <RecommendationsContainer>
      <Container>
        <Header>You might also like</Header>
        <FlexContainer style={{ justifyContent: "space-around" }}>
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </FlexContainer>
      </Container>
      <Wave height={12} image={blogPostWaveBottom} />
    </RecommendationsContainer>
  )
}

export default Recommendations
