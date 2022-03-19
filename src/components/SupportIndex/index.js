import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Container from "../common/Container"
import SupportCategoryCard from "../SupportCategoryCard"

import { Section, ContentBlock, Grid, GridInner, Title, Text, Svg, ItemBox } from "./styles"

const SupportIndex = ({ data }) => {
  const { title, section_image, byline } = data.primary
  return (
    <Section>
      <Container>
        <ContentBlock>
          <Grid>
            <ItemBox>
              <GatsbyImage image={getImage(section_image)} alt={title.text} />
              <Title>{title.text}</Title>
              <Text>{byline.text}</Text>
              <Svg>
                <a href="#"> <svg width="90" height="100" viewBox="0 0 106 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 141.429L122 0.40918V141.429H0Z" fill="#25C1A9" />
                  <path d="M77 83.205H87M87 83.205L84.5 80.5342M87 83.205L84.5 85.8759" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg></a>
              </Svg>
            </ItemBox>
            <GridInner>
              {data.items && data.items.map((item, index) => <SupportCategoryCard key={index} data={item} />)}
            </GridInner>
          </Grid>
        </ContentBlock>
      </Container>
    </Section>
  )
}
export default SupportIndex
