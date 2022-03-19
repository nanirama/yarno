import React from "react"
import { RichText } from "prismic-reactjs"
import Grid from "../../components/Grid"
import GridItem from "../../components/GridItem"

const Slice = ({ slice }) => {
  return (
    <Grid>
      {slice.items.map((item, index) => (
        <GridItem
          key={index}
          imageURL={item.grid_item_image.url}
          imageAlt={item.grid_item_image.alt}>
          <RichText render={item.grid_item_content.richText} />
        </GridItem>
      ))}
    </Grid>
  )
}

export default Slice
