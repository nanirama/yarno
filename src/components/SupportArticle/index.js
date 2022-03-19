import React, { Fragment } from "react"
import { Link } from "gatsby"

import SliceMachine from "../../slices/SliceMachine"

import Container from "../common/Container"

import { Heading, Item } from "./styles"

const SupportArticle = ({ data }) => {
  console.log('article data', data)
  const { title, body } = data.data
  return (
    <Item>
      <Container>
        <Heading>{title.text}</Heading>
        <p>Optional short description, slightly larger font.</p>
      </Container>
      <SliceMachine body={body} />
    </Item>
  )
}
export default SupportArticle
