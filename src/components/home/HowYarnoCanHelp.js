import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import { Button } from "@yarno/thread"
import { Section, Underline } from "../common/styles"
import { YarnoCard, YarnoCards } from "./styles"
import { md, lgPixels } from "../../utils/breakpoints"

const Container = styled.div`
  margin: 1rem auto 3rem auto;
  padding: 0 2rem;
  width: 100%;
  max-width: ${lgPixels}px;

  h2 {
    text-align: center;
  }
  @media ${md} {
    margin: 3rem auto 3rem auto;
    h2 {
      margin-bottom: 7rem;
    }
    > div {
      max-width: ${lgPixels}px;
      display: flex;
    }
    > div > div {
      flex: 2;
    }
  }
`

const ImageWrap = styled.div`
  display: none;
  @media ${md} {
    display: block;
    flex: 1.5 !important;
  }
`

const Component = ({ title, image, buttonText, buttonLink, benefits }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        <ImageWrap>
          <GatsbyImage image={getImage(image)} alt={image.alt} />
        </ImageWrap>
        <div>
          <YarnoCards>
            {benefits.map(benefit => (
              <YarnoCard key={benefit.cardtitle.text}>
                <h5>{benefit.cardtitle.text}</h5>
                <Underline />
                <p>{benefit.carddescription.text}</p>
              </YarnoCard>
            ))}
          </YarnoCards>
        </div>
      </div>
      <Section style={{ marginTop: 0 }}>
        <Link to={buttonLink}>
          <Button
            secondary
            label={buttonText}
            style={{ marginBottom: "5rem" }}
          />
        </Link>
      </Section>
    </Container>
  )
}

export default Component
