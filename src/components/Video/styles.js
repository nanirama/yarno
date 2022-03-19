import styled from "styled-components"
import { sm, md } from "../../utils/breakpoints"
export const VideoContainer = styled.div`
  width: 100%;
  box-shadow: 3px 3px 13px rgba(0, 0, 0, 0.4);

  @media ${sm} {
    width: 60%;
  }

  @media ${md} {
    width: 80%;
  }
`
