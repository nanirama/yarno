import React from "react"
import Waves from "."

export default {
  title: "Components/Waves",
  component: Waves
}

export const Default = () => {
  return <Waves />
}

export const WithGreenBackground = () => {
  return (
    <div style={{ backgroundColor: "rgb(37, 193, 169)" }}>
      <Waves />
    </div>
  )
}

export const WithGreenBackgroundInverted = () => {
  return (
    <div style={{ backgroundColor: "rgb(37, 193, 169)" }}>
      <Waves inverted />
    </div>
  )
}

export const WithOrangeBackground = () => {
  return (
    <div style={{ backgroundColor: "rgb(249, 162, 26)" }}>
      <Waves />
    </div>
  )
}

export const WithGrayBackground = () => {
  return (
    <div style={{ backgroundColor: "rgb(251, 251, 251)" }}>
      <Waves />
    </div>
  )
}
