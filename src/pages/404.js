import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Meta from "../components/Meta"
import Layout from "../components/Layout"
import styled from "styled-components"
import { sm, md, lg } from "../utils/breakpoints"

const NotFoundContainer = styled.div`
  text-align: center;
  overflow: hidden;
  height: 100vh;
  background-image: linear-gradient(180deg, #ffffff 60%, #e5e5e5 60%);
  position: relative;
  display: flex;
  align-items: center;
`

const ImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 50vh;

  @media ${sm} {
    height: 60vh;
  }

  @media ${md} {
    height: 65vh;
  }

  @media ${lg} {
    height: 70vh;
  }
`

const Content = styled.div`
  position: absolute;
  top: 1rem;
  width: 100%;
  padding: 3rem;
`

const H1 = styled.h1`
  text-transform: uppercase;
  color: ${props => props.theme.colors.secondary};
  font-weight: 300;
  font-family: "Raleway", sans-serif;
  margin-top: 5rem;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  line-height: 4rem;
  margin-top: 0;

  @media ${sm} {
    font-size: 3rem;
  }

  @media ${md} {
    margin-top: 3rem;
    font-size: 5rem;
  }
`

const H2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};

  @media ${sm} {
    font-size: 2.3rem;
  }
`

const Paragraph = styled.p`
  max-width: 80rem;
  margin: 0 auto;

  a {
    color: ${props => props.theme.colors.primary};
  }
`

export const postQuery = graphql`
  query {
    ...PrismicLayout
  }
`

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout location={location} prismicLayout={data.prismicLayout} simple>
      <NotFoundContainer>
        <ImageContainer></ImageContainer>
        <Content>
          <H1>MAYDAY!! MAYDAY!!</H1>
          <H2>LOOKS LIKE YOUR NAVIGATION SYSTEM IS DOWN.</H2>

          <Paragraph>
            Unfortunately this page doesn’t exist. You can head back to{" "}
          </Paragraph>
        </Content>
      </NotFoundContainer>
    </Layout>
  )
}

export default NotFoundPage
