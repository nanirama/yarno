import React from "react"
import Waves from "../Waves"
import { Background } from "../BlogPost/styles"

const BlogFrame = ({ children }) => {
  return (
    <>
      <Waves
        fillColors={[
          "rgba(255,255,255,1)",
          "rgba(240,240,240,0.3)",
          "rgba(240,240,240,0.3)",
          "rgba(251,251,251,1)"
        ]}
      />
      <Background>{children}</Background>
      <Waves
        invert
        fillColors={[
          "rgba(255,255,255,1)",
          "rgba(250,250,250,0.7)",
          "rgba(250,250,250,0.7)",
          "rgba(255,255,255,1)"
        ]}
      />
    </>
  )
}

export default BlogFrame
