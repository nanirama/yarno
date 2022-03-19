import React, { Fragment, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Button } from "@yarno/thread"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ImageBlock, HowYarnoWorks } from "./styles"
import { Row } from "../common/styles"
import { sm, md, mdPixels, lgPixels } from "../../utils/breakpoints"
import YarnoVideo from "../common/YarnoVideo"
import Lightbox from "../common/Lightbox"

const Container = styled.div`
  width: 100%;
  margin: 2rem auto 6rem auto;
  text-align: center;
  padding: 0 4rem;
  max-width: ${lgPixels}px;

  h2 {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }

  p {
    max-width: 80rem;
    margin: 0 auto 1rem auto;
  }

  @media ${md} {
    h2 {
      margin-top: 2rem;
      font-size: 3.906rem;
    }
  }
`

const Features = styled.div`
  overflow: hidden;
  @media screen and (min-width: 48rem) {
    display: flex;

    > div {
      flex: 1;
    }
  }
`

const FeatureButton = ({ feature }) => {
  const [showLightbox, setShowLightbox] = useState(false)
  const toggleLightbox = () => setShowLightbox(!showLightbox)

  const hasVideo = feature.vimeo_id !== null

  const url = feature.button_hash
    ? feature.buttonlink.url + "#" + feature.button_hash
    : feature.button_hash

  return (
    <Fragment>
      {hasVideo ? (
        <Fragment>
          <Button
            onClick={toggleLightbox}
            label={feature.buttontext.text}
            secondary
          />
          <Lightbox open={showLightbox} toggleLightbox={toggleLightbox}>
            <YarnoVideo
              videoId={feature.vimeo_id}
              title={feature.buttontext.text}
            />
          </Lightbox>
        </Fragment>
      ) : (
        <Link to={url}>
          <Button label={feature.buttontext.text} secondary />
        </Link>
      )}
    </Fragment>
  )
}

const Component = ({ title, description, features }) => {
  return (
    <Container>
      <HowYarnoWorks>{title}</HowYarnoWorks>
      <p className="larger">{description}</p>
      <Features>
        {features.map(feature => (
          <ImageBlock key={feature.featuretitle.text}>
            <h4>{feature.featuretitle.text}</h4>
            <div>
              <GatsbyImage
                image={getImage(feature.featureimage)}
                alt={feature.featureimage.alt}
              />
            </div>
            <FeatureButton feature={feature} />
          </ImageBlock>
        ))}
      </Features>
    </Container>
  )
}

export default Component
