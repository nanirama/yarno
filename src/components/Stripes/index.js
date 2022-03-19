import React from "react"
import styled, { keyframes } from "styled-components"

const Container = styled.svg`
  path {
    stroke-width: 5;
    stroke-opacity: 0.5;
    fill: transparent;
  }
`

const Stripes = ({}) => {
  return (
    <Container
      viewBox="0 0 1440 91"
      preserveAspectRatio="none"
      shape-rendering="auto">
      <path
        d="M1440,38.5815829 C1312.75672,13.9060266 1136.18092,79.3824709 979.985893,73.6415487 C811.014594,67.4310368 777.601954,33.0347537 593.207129,33.0347537 C517.411739,33.0347537 434.462192,53.9468091 349.422842,49.0605073 C202.936066,40.6434791 139.997257,33.0347537 0,40.7149719"
        id="Path-49"
        stroke="#B44CC8"
        transform="translate(720.000000, 53.500000) scale(1, -1) translate(-720.000000, -53.500000) "></path>
      <path
        d="M0,15.4400604 C190.72108,-17.8135992 352.770906,48.9276445 508.659858,61.2733322 C641.975163,71.8312909 655.161215,37.1942282 790.208313,38.3566963 C951.576734,39.7457349 979.9919,71.8312909 1101.4909,66.3763456 C1224.79682,60.8402747 1324.98905,5 1440,5"
        id="Path-47"
        stroke="#F9A21A"></path>
      <path
        d="M1440,51.0679487 C1312.75672,26.03455 1136.18092,92.4605269 979.985893,86.6363505 C811.014594,80.3357744 777.601954,45.44068 593.207129,45.44068 C517.411739,45.44068 434.462192,66.6559998 349.422842,61.6988373 C202.936066,53.1597463 144.625588,18.3275703 0,53.2322759"
        id="Path-49"
        stroke="#25C1A9"></path>
    </Container>
  )
}
export default Stripes
