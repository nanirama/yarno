import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Container from "../../components/common/Container"
import CaseStudyCard from "../../components/CaseStudyCard"
import Waves from "../../components/Waves"
import { Outer } from "./styles"
import linkResolver from "../../utils/linkResolver"

const CaseStudyExplorer = ({ slice }) => {
  return (
    <Outer>
      <h2>{slice.primary.relatable_prompt.text}</h2>
      <Container>
        <div>
          {slice.items.map((item, index) => {
            return (
              <CaseStudyCard
                key={`case-study-${index}`}
                title={item.related_title.text}
                url={linkResolver(item.related_result)}>
                <GatsbyImage
                  image={getImage(item.related_image)}
                  alt={item.related_image.alt}
                />
              </CaseStudyCard>
            )
          })}
        </div>
      </Container>
      <Waves />
    </Outer>
  )
}

export default CaseStudyExplorer
