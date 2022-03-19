import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import styled from "styled-components"
import { sm, md } from "../../utils/breakpoints"

const Container = styled.div`
  display: flex;
  margin: 2rem -1rem 0 -1rem;
  flex-wrap: wrap;
  min-width: 100%;
  align-items: center;
  justify-content: center;
`

const PartnerImageContainer = styled.div`
  flex: 1;
  margin: 2rem 1rem 0 1rem;
  margin-top: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  position: relative;
  min-height: 10rem;
  min-width: 43%;
  max-width: 43%;

  > div {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
  }

  @media ${sm} {
    min-height: 13rem;
    max-width: 30%;
    min-width: 30%;
    margin: 2rem 1rem 0 1rem;
  }

  @media ${md} {
    max-width: 24%;
    min-width: 22%;
    min-height: 14rem;
  }
`

const PartnerImages = ({ partners }) => {
  return (
    <Container>
      {partners.map((partner, index) => {
        return (
          <PartnerImageContainer key={index}>
            <div>
              <GatsbyImage
                image={getImage(partner.partnerlogo)}
                alt={partner.partnerlogo.alt}
              />
            </div>
          </PartnerImageContainer>
        )
      })}
    </Container>
  )
}

export default PartnerImages