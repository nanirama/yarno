import styled from "styled-components"
import SiteContainer from "../../components/common/Container"
import { md } from "../../utils/breakpoints"

export const Background = styled.div`
  background-color: #efefef;
  text-align: center;
  overflow: hidden;

  h2 {
    color: #595959;
    text-align: center;
    margin: 0 auto;
    padding: 4rem 0 2rem 0;
  }

  img {
    min-width: 13rem;
  }
  @media ${md} {
    flex-direction: row;

    h2 {
      padding: 4rem 0;
    }
  }
`

export const Container = styled(SiteContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 3rem;
`
