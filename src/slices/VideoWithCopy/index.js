import React from "react"
import { Link } from "gatsby"
import { Button } from "@yarno/thread"
import { RichText } from "prismic-reactjs"
import Container from "../../components/common/Container"
import Video from "../../components/Video"
import { Background, Split } from "./styles"
import linkResolver from "../../utils/linkResolver"

const VideoWithCopy = ({ slice }) => {
  return (
    <Background>
      <Container>
        <Split>
          <Video videoId={slice.primary.vimeo_id} />

          <div>
            <RichText render={slice.primary.video_with_copy_content.richText} />
            {slice.primary.optional_link && (
              <Link to={linkResolver(slice.primary.optional_link)}>
                <Button
                  hollow
                  tertiary
                  label={slice.primary.optional_link_text}
                />
              </Link>
            )}
          </div>
        </Split>
      </Container>
    </Background>
  )
}
export default VideoWithCopy
