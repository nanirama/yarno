import React, { useState } from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import YarnoVideo from "./YarnoVideo"
import { Section, Spacer, Row, LearnMoreBox, LearnMoreText } from "./styles"
import Lightbox from "./Lightbox"

const LearnMoreAboutYarno = props => {
  const [showLightbox, setShowLightbox] = useState(false)
  const toggleLightbox = () => setShowLightbox(!showLightbox)

  return (
    <Section bgColor="#efefef">
      <h2>{props.heading}</h2>
      <Spacer size={4} />

      <Row noMargin>
        {props.content.map((item, index) => {
          const key = `item-${index}`
          return item.videoId ? (
            <LearnMoreBox key={key} onClick={toggleLightbox}>
              <div style={{ display: "block" }}>
                <GatsbyImage fixed={item.image} alt={item.alt} />
                <LearnMoreText>
                  <h5>{item.text}</h5>
                  <span>
                    {item.action}
                    <i className="fa fa-play-circle" />
                    <Lightbox
                      open={showLightbox}
                      toggleLightbox={toggleLightbox}>
                      <YarnoVideo
                        videoId={item.videoId}
                        title="About Yarno video"
                      />
                    </Lightbox>
                  </span>
                </LearnMoreText>
              </div>
            </LearnMoreBox>
          ) : (
            <LearnMoreBox key={key} onClick={toggleLightbox}>
              <Link to={item.to}>
                <GatsbyImage fixed={item.image} alt={item.alt} />
                <LearnMoreText>
                  <h5>{item.text}</h5>
                  <span>{item.action}</span>
                </LearnMoreText>
              </Link>
            </LearnMoreBox>
          )
        })}
      </Row>
    </Section>
  )
}

export default LearnMoreAboutYarno
