import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Button } from "@yarno/thread"
import linkResolver from "../../utils/linkResolver"

const Container = styled.div`
  text-align: center;
  padding-bottom: 6rem;
`

const LonelyButton = ({ slice }) => {
  return (
    <Container style={{ background: slice.primary.background_color }}>
      <Link to={linkResolver(slice.primary.link_link)}>
        <Button
          primary={slice.primary.button_style == "primary"}
          secondary={slice.primary.button_style == "secondary"}
          hollow={slice.primary.button_hollow}
          label={slice.primary.link_label}
        />
      </Link>
    </Container>
  )
}

export default LonelyButton