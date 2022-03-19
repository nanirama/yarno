import styled from "styled-components"
import { sm, md, lg, xl } from "../../utils/breakpoints"

export const PostContent = styled.article`
  margin-top: 4rem;
  @media ${sm} {
    margin-top: 7rem;
  }
`

export const FeatureImage = styled.figure`
  position: relative;
  text-align: center;
  vertical-align: middle;
  margin: 0 auto;
  padding: 0 2rem;
  margin-bottom: -5rem;

  img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  @media ${sm} {
    margin-bottom: -10rem;
    img {
      max-width: 40rem;
    }
  }
`

export const Background = styled.div`
  overflow: hidden;
  background-image: linear-gradient(0deg, #ffffff 3%, #fbfbfb 100%);

  p,
  ul,
  li {
    color: rgb(74, 74, 74);
  }
`

export const Author = styled.div`
  display: flex;
  margin: 4rem 0;
  border-top: 2px solid #eee;
  padding-top: 4rem;

  img {
    width: 7rem;
    height: 7rem;
    margin-right: 2.5rem;
    border-radius: 50%;
  }

  p {
    margin: 0 0 1rem 0;
  }
`
