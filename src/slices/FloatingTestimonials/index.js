import React, { useState } from "react"
import { RichText } from "prismic-reactjs"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Stripes from "../../components/Stripes"
import {
  Container,
  CardsContainer,
  Card,
  Carousel,
  CarourselButton
} from "./styles"

const isEven = val => {
  if (val % 2 == 0) return true
  else return false
}

const FloatingTestimonials = ({ slice }) => {
  const [currentCard, setcurrentCard] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [scrollPixels, setScrollPixels] = useState(0)

  const handleScroll = pos => {
    setcurrentCard(pos)
    setScrollPixels(pos * -300)
  }

  const handleTouchStart = event => {
    if (event.touches.length > 0) {
      setTouchStart(event.touches[0].clientX)
    }
  }

  const handleTouchEnd = event => {
    let touchEnd = event.changedTouches[0].clientX
    if (touchStart > touchEnd) {
      const isLastCard = currentCard === 2
      handleScroll(isLastCard ? 2 : currentCard + 1)
    } else {
      const isFirstCard = currentCard === 0
      handleScroll(isFirstCard ? 0 : currentCard - 1)
    }
  }

  return (
    <Container onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <RichText render={slice.primary.floating_testimonial_title.richText} />
      <Stripes />
      <CardsContainer>
        <Carousel scrollValue={scrollPixels}>
          {slice.items.map((item, index) => {
            const {
              floating_testimonial_quotee,
              floating_testimonial_quote,
              floating_testimonial_logo
            } = item
            return (
              <Card
                shiftDown={!isEven(index)}
                key={`testimonial-card-${index}`}
                shiftUp={isEven(index)}>
                <GatsbyImage
                  image={getImage(floating_testimonial_logo)}
                  alt={floating_testimonial_logo.alt}
                />
                <RichText render={floating_testimonial_quote.richText} />
                <hr />
                <span>{floating_testimonial_quotee}</span>
              </Card>
            )
          })}
        </Carousel>
        {slice.items.map((item, index) => {
          return (
            <CarourselButton
              key={`testimonial-button-${index}`}
              onClick={() => handleScroll(index)}
              isgreen={currentCard === index ? "true" : "false"}
            />
          )
        })}
      </CardsContainer>
    </Container>
  )
}

export default FloatingTestimonials
