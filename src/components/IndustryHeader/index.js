import React from "react"
import { Link } from "gatsby"
import {
  Section,
  Column,
  Spacer,
  MobileOnly,
  Checklist,
  Container,
  HeaderImage
} from "./styles"
import { Button } from "@yarno/thread"
import { md } from "../../utils/breakpoints"

const Header = props => {
  return (
    <Container>
      <Section columns style={{ marginBottom: 0, alignItems: "flex-end" }}>
        <Column style={{ flex: 3, textAlign: "left" }}>
          {props.title}
          <MobileOnly size={md}>
            <img src={props.image.url} alt={props.image.alt} />
          </MobileOnly>
          {props.subtitle}
          <Checklist>
            {props.checklistLeft}
            {props.checklistRight}
          </Checklist>
          <Spacer size={4} />
          <Link to={props.buttonLink} style={{ width: "fit-content" }}>
            <Button label={props.buttonText} secondary />
          </Link>
          <Spacer size={4} />
        </Column>
        <Column style={{ flex: 2 }} hideMd>
          <HeaderImage src={props.image.url} alt={props.image.alt} />
        </Column>
      </Section>
    </Container>
  )
}

export default Header
