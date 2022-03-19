import React from "react"
import { Hamburger } from "./styles"

const Component = ({ isOpen, inverted, handleClick }) => {
  return (
    <Hamburger
      data-qa="hamburger"
      onClick={handleClick}
      inverted={inverted}
      active={isOpen}
      type="button">
      <span>
        <span />
      </span>
    </Hamburger>
  )
}

export default Component
