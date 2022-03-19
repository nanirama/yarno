import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import Container from "../../components/common/Container"
import { md } from "../../utils/breakpoints"

export const Hero = styled.div`
  margin: 3rem 2rem 0rem 2rem;
  text-align: center;

  em {
    color: ${props => props.theme.colors.secondary};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-style: normal;
    position: relative;
    display: inline-block;
    font-weight: bold;
    font-size: 0.7em;
    margin-bottom: 3rem;

    &:after {
      position: absolute;
      content: "";
      height: 3px;
      width: 150%;
      background: #efefef;
      bottom: -1rem;
      left: -25%;
    }
  }

  h1 {
    font-weight: normal;
    strong {
      font-weight: bold;
    }
    margin-bottom: 3rem;
  }

  div > img {
    height: auto;
    max-width: 28rem;
  }

  @media ${md} {
    margin: 14rem 2rem 0rem 2rem;
    text-align: left;
    em {
      &:after {
        left: 0;
      }
    }

    header {
      display: flex;
    }
  }
`

const Component = ({ slice }) => {
  const companyLogo = slice.primary.company_logo
  const image = slice.primary.image
  return (
    <Container>
      <Hero>
        <header>
          <div>
            <em>Case study</em>
            <RichText render={slice.primary.hero_title.richText} />
            {companyLogo && (
              <img
                src={companyLogo.fluid.src + "&h=50"}
                alt={companyLogo.alt}
              />
            )}
          </div>
          {image && <img src={image.url + "&w=490&h=410"} />}
        </header>
      </Hero>
    </Container>
  )
}

export default Component
