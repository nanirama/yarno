import SiteContainer from "../../components/common/Container"
import { sm, md, lg, lgPixels } from "../../utils/breakpoints"
import styled from "styled-components"

export const Container = styled(SiteContainer)`
  @media ${md} {
    display: flex;

    > div {
      margin: 0 2rem;
      flex: 1;
      &:first-of-type {
        margin-left: 0;
      }
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`
