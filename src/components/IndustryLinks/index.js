import React, { useState } from "react"
import { Link } from "gatsby"
import YarnoVideo from "../common/YarnoVideo"
import { Section, Spacer, Row, LearnMoreBox, LearnMoreText } from "./styles"
import Lightbox from "../common/Lightbox"

const LightBoxLink = ({ item }) => {
  const [showLightbox, setShowLightbox] = useState(false)
  const toggleLightbox = () => setShowLightbox(!showLightbox)
  return (
    <LearnMoreBox onClick={toggleLightbox}>
      <div style={{ display: "block" }}>
        {item.image}
        <LearnMoreText>
          {item.text}
          <span>
            {item.action}
            <i className="fa fa-play-circle" />
            <Lightbox open={showLightbox} toggleLightbox={toggleLightbox}>
              <YarnoVideo videoId={item.videoId} title="About Yarno video" />
            </Lightbox>
          </span>
        </LearnMoreText>
      </div>
    </LearnMoreBox>
  )
}

const LearnMoreAboutYarno = props => {
  return (
    <Section bgColor="#efefef">
      {props.heading}
      <Spacer size={4} />

      <Row noMargin>
        {props.content.map((item, index) => {
          const key = `industry-link-${index}`
          return item.videoId ? (
            <LightBoxLink key={key} item={item} />
          ) : (
            <LearnMoreBox key={key}>
              <Link to={item.to}>
                {item.image}
                <LearnMoreText>
                  {item.text}
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
