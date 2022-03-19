import React from "react"
import FilmStrip from "."

export default {
  title: "Components/FilmStrip",
  component: FilmStrip
}

export const Default = () => {
  return (
    <FilmStrip>
      <img src="https://yarno-marketing.imgix.net/case-studies/rft_screen_one.jpg?auto=format&ar=16%3A9&fit=crop&ixlib=react-9.0.3&w=1678" />
      <img src="https://yarno-marketing.imgix.net/case-studies/rft_screen_two.jpg?auto=format&ar=16%3A9&fit=crop&ixlib=react-9.0.3&w=1678" />
      <img src="https://yarno-marketing.imgix.net/case-studies/rft_screen_three.jpg?auto=format&ar=16%3A9&fit=crop&ixlib=react-9.0.3&w=1678" />
    </FilmStrip>
  )
}
