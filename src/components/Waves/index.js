import React from "react"
import styled, { keyframes } from "styled-components"
import { sm } from "../../utils/breakpoints"

const moveForever = keyframes`
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% {
    transform: translate3d(85px,0,0);
  }
`

const Container = styled.svg`
  position: relative;
  width: 100%;
  height: 40px;
  min-height: 40px;
  max-height: 60px;

  ${props =>
    props.inverted &&
    `
  transform: rotate(180deg); 
      transform-origin: left top
      `}

  @media ${sm} {
    height: ${props => props.displayHeight}px;
    min-height: 80px;
    max-height: 120px;
  }

  g > use {
    animation: ${moveForever} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }

  g > use:nth-child(1) {
    animation-delay: -5s;
    animation-duration: 400s;
  }

  g > use:nth-child(2) {
    animation-delay: -10s;
    animation-duration: 600s;
  }

  g > use:nth-child(3) {
    animation-delay: -15s;
    animation-duration: 800s;
  }

  g > use:nth-child(4) {
    animation-delay: -20s;
    animation-duration: 1000s;
  }
`

const Waves = ({ inverted, height, fillColors }) => {
  const defaultColors = [
    "rgba(255,255,255,0.7)",
    "rgba(255,255,255,0.5)",
    "rgba(255,255,255,0.3)",
    "rgba(255,255,255,1)"
  ]
  const layers = fillColors || defaultColors
  return (
    <Container
      displayHeight={height || "80"}
      inverted={inverted}
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto">
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g>
        {layers.map((l, index) => {
          return (
            <use
              key={`w-${index}`}
              xlinkHref="#gentle-wave"
              x="48"
              y={index * 2}
              fill={l}
            />
          )
        })}
      </g>
    </Container>
  )
}

Waves.defaultProps = {
  inverted: false
}

export default Waves
