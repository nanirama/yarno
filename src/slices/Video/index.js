import React from "react"
import Video from "../../components/Video"
import Container from "../../components/common/Container"

const Slice = ({ slice }) => {
  return (
    <Container>
      <Video
        title={slice.primary.vimeo_video_title}
        videoId={slice.primary.vimeo_video_id}
      />
    </Container>
  )
}

export default Slice
