import React, { Fragment } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { SubTitle, Svg, ItemBox } from "./styles"

const SupportCategoryCard = ({ data }) => {

  const { document } = data.category
  const { title, image } = document.data
  const postLink = `/support/category/${document.uid}/`
  return (
    <ItemBox>
      <Link to={postLink}>
        <GatsbyImage image={getImage(image)} alt={title.text} />
        <SubTitle>{title.text}</SubTitle>
        <Svg>
          <svg width="60" height="70" viewBox="0 0 106 121" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 141.429L122 0.40918V141.429H0Z" fill="#25C1A9" />
            <path d="M77 83.205H87M87 83.205L84.5 80.5342M87 83.205L84.5 85.8759" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </Svg>
      </Link>

    </ItemBox>
  )
}
export default SupportCategoryCard