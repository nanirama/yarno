import React from "react"
import styled from "styled-components"
import SourceContainer from "../../components/common/Container"
import OutlinedHeader from "../../components/OutlinedHeader"
import { RichText } from "prismic-reactjs"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { md } from "../../utils/breakpoints"

const Container = styled(SourceContainer)`
  max-width: 80rem;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 7rem;

  h1,
  p {
    margin: 0;
  }

  @media ${md} {
    margin-top: 7rem;
    padding: 0;
    display: flex;
  }
`

const Inner = styled.div`
  @media ${md} {
    padding-right: 8rem;
  }
`

const ImageContainer = styled.div`
  display: none;

  @media ${md} {
    display: block;
    min-width: 25rem;
  }
`

const OutlinedHeroHeader = ({ slice }) => {
  return (
    <Container>
      <Inner>
        <OutlinedHeader
          title={slice.primary.outlined_title.text}
          subtitle={slice.primary.outlined_subtitle.text}
          description={
            <RichText render={slice.primary.outlined_description.richText} />
          }
        />
      </Inner>
      <ImageContainer>
        <GatsbyImage
          image={getImage(slice.primary.outlined_hero_image)}
          alt={slice.primary.outlined_hero_image.alt}
        />
      </ImageContainer>
    </Container>
  )
}

export default OutlinedHeroHeader