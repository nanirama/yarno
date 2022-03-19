import React from "react"
import { colors } from "@yarno/thread"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Waves from "../Waves"
import { Subtitle, LearningCard, LearningRow } from "./styles"
import styled from "styled-components"
import { sm, md, mdPixels, lgPixels } from "../../utils/breakpoints"

const Background = styled.div`
  background: ${colors.greenLightSea};
  width: 100%;
  overflow: hidden;
`

const Container = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 3rem;

  h2 {
    color: white;
    margin-bottom: 3rem;
  }

  > div {
    max-width: ${lgPixels}px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 45em) {
    h2 {
      margin: 5rem 0;
    }
  }

  @media ${md} {
    padding: 3rem 3rem 6rem 3rem;
    h2 {
      margin-bottom: 6rem;
    }
    > div {
      flex-direction: row;
    }
  }
`

const Inner = styled.div`
  @media screen and (min-width: 45em) {
    display: flex;
    > p {
      flex: 2;
      text-align: left;
    }
    > img {
      flex: 1;
    }
  }
  @media ${md} {
    display: block;
    p {
      text-align: center;
    }
  }
`

const Component = ({ title, items }) => {
  return (
    <Background>
      <Container>
        <h2>{title}</h2>
        <LearningRow>
          {items.map((item, index) => (
            <LearningCard key={index}>
              <h4>{item.cardtitle.text}</h4>
              <Subtitle>{item.subtitle.text}</Subtitle>
              <Inner>
                <GatsbyImage
                  image={getImage(item.cardimage)}
                  alt={item.cardimage.alt}
                />
                <p>{item.cardtext.text}</p>
              </Inner>
            </LearningCard>
          ))}
        </LearningRow>
      </Container>
      <Waves />
    </Background>
  )
}
export default Component
