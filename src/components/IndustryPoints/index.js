import React from "react"
import { Section } from "../common/styles"
import { TrainingIcons, TrainingIcon, TrainingIconImageWrap } from "./styles"

const IndustryPoints = props => {
  return (
    <Section>
      {props.heading}
      <TrainingIcons>
        {props.icons.map((item, index) => (
          <TrainingIcon key={`icon-${index}`}>
            <TrainingIconImageWrap>
              <img src={item.image.url} alt={item.image.alt} />
            </TrainingIconImageWrap>
            <div>
              {item.title}
              {item.text}
            </div>
          </TrainingIcon>
        ))}
      </TrainingIcons>
    </Section>
  )
}

export default IndustryPoints
