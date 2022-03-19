import React from "react"
import {
  Card,
  ImageContainer,
  CardContent,
  Underline,
  CardSubtitle,
  CardBody
} from "./styles"

const ValueCard = ({ image, content }) => {
  return (
    <Card>
      <ImageContainer>
        <img src={image.url + "&w=350"} />
      </ImageContainer>
      <CardContent>{content}</CardContent>
    </Card>
  )
}

export default ValueCard
