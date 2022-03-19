import React from "react"
import { RichText } from "prismic-reactjs"
import Columns from "../../components/Columns"
import Column from "../../components/Column"

const Component = ({ slice }) => {
  return (
    <Columns
      count={slice.items.length}
      maxWidth={slice.primary.columns_max_width}>
      {slice.items.map((item, index) => (
        <Column
          key={index}
          imageURL={item.column_image.url}
          imageAlt={item.column_image.alt}>
            <RichText render={item.column_content.richText} />
        </Column>
      ))}
    </Columns>
  )
}

export default Component
