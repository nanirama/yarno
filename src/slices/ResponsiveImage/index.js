import React from "react"
import styled from "styled-components"
import { md } from "../../utils/breakpoints"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Container = styled.div`
  text-align: center;
  padding: 0 2rem;
`
const Mobile = styled.div`
  display: block;
  @media ${md} {
    display: none;
  }
`
const Desktop = styled.div`
  display: none;
  @media ${md} {
    display: block;
  }
`

const ResponsiveImage = ({ slice }) => {
  return (
    <Container>
      <Mobile>
        <GatsbyImage
          image={getImage(slice.primary.responsive_mobile_image)}
          alt={slice.primary.responsive_mobile_image.alt}
        />
      </Mobile>
      <Desktop>
        <GatsbyImage
          image={getImage(slice.primary.responsive_desktop_image)}
          alt={slice.primary.responsive_desktop_image.alt}
        />
      </Desktop>
    </Container>
  )
}
export default ResponsiveImage
