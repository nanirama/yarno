import React from "react"
import { RichText } from "prismic-reactjs"
import { VideoContainer, VideoStripes } from "./styles"
import Stripes from "../../components/Stripes"
import YarnoVideo from "../../components/Video"

const CaseStudyVideo = ({ slice }) => {
  return (
    <VideoContainer>
      <RichText render={slice.primary.video_title.richText} />

      <VideoStripes>
        <Stripes />
        <div>
          <YarnoVideo
            videoId={slice.primary.vimeo_id}
            title={slice.primary.video_title.text}
          />
        </div>
      </VideoStripes>
    </VideoContainer>
  )
}
export default CaseStudyVideo
