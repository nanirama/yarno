import React, { Fragment } from "react"
import VideoHero from "../../components/home/Header"

const Slice = ({ slice }) => {
  return <VideoHero {...slice.primary} />
}

export default Slice
