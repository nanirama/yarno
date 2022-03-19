import { YarnoVideo } from "../common"
import React from "react"
import { Section, Column } from "../common/styles"
import { CaseStudyColumn, CaseStudyMain, CaseStudyImage } from "./styles"
import { colors } from "@yarno/thread"

const IndustryCaseStudy = ({ logo, image, videoId, content }) => {
  return (
    <Section columns rowsOnTablet bgColor={colors.grayWhiteSmoke}>
      <Column>
        <CaseStudyMain>
          <img src={logo.url} alt={logo.alt} style={{ maxWidth: "20rem" }} />
          {content}
        </CaseStudyMain>
      </Column>
      <CaseStudyColumn>
        {videoId && !image ? (
          <YarnoVideo videoId={videoId} title={""} />
        ) : (
          <CaseStudyImage src={image.url} alt={image.alt} />
        )}
      </CaseStudyColumn>
    </Section>
  )
}

export default IndustryCaseStudy
