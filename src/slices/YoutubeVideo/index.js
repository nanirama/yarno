import React from "react"
import YoutubeVideo from "../../components/YoutubeVideo"
import Container from "../../components/common/Container"

const Slice = ({ slice }) => {
  return (
    <Container>
      <YoutubeVideo
        title={slice.primary.youtube_video_title}
        videoId={slice.primary.youtube_video_id}
      />
    </Container>
  )
}

export default Slice
