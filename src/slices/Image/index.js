import React from "react"
import styled from "styled-components"
import SourceContainer from "../../components/common/Container"

const Container = styled(SourceContainer)`
  padding: 2rem 0;
  text-align: center;
  img {
    max-width: 100%;
  }
`

const Image = ({ slice }) => {
  return (
    <Container readable>
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
    </Container>
  )
}

export default Image
