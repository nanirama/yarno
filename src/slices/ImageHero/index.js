import React, { Fragment } from "react"
import { Button } from "@yarno/thread"
import Link from "../../components/Link"
import { RichText } from "prismic-reactjs"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Section, Column, Spacer } from "../../components/common/styles"
import { Header, GetStarted } from "./styles"

const Slice = ({ slice: { primary } }) => {
  return (
    <Header>
      <Section
        columns
        bgImage="linear-gradient(180deg, white 0%, #f4f4f4 75%, white 101%)"
        style={{ zIndex: 1 }}>
        <Column>
          <div style={{ textAlign: "left" }}>
            <RichText render={primary.image_hero_title.richText} />
            <Spacer size={2} />
            <Column mobileOnly>
              <div>
                <GatsbyImage
                  image={getImage(primary.image_hero_image)}
                  alt={primary.image_hero_image.alt}
                />
              </div>
            </Column>
            <GetStarted>
              <Link {...primary.image_hero_link}>
                <Button label={primary.image_hero_link_text} secondary />
              </Link>
            </GetStarted>
          </div>
        </Column>
        <Column hideMobile>
          <div>
            <GatsbyImage
              image={getImage(primary.image_hero_image)}
              alt={primary.image_hero_image.alt}
            />
          </div>
        </Column>
      </Section>
    </Header>
  )
}

export default Slice
