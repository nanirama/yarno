import React from "react"
import Waves from "../../components/Waves"

const Slice = ({ slice }) => {
  return (
    <div style={{ background: slice.primary.background_color }}>
      <Waves inverted={slice.primary.waves_inverted} />
    </div>
  )
}
export default Slice
