import React from "react"
import FilmStrip from "../../components/FilmStrip"

const Slice = ({ slice }) => {
  return (
    <FilmStrip>
      {slice.items.map((item, index) => {
        const {
          still: { url, alt }
        } = item
        return <img key={`still-${index}`} src={url} alt={alt} />
      })}
    </FilmStrip>
  )
}

export default Slice
