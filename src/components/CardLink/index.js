import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 3rem;
  padding: 3rem;
  max-width: 50rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    color: ${props => props.theme.colors.secondary};
    font-weight: bold;
    letter-spacing: 1px;
    text-decoration: none;
    transition: 0.2s all ease-in;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    &:hover {
      color: ${props => props.theme.colors.secondaryHover};
    }

    &:after {
      font-family: Jupiter;
      content: "\f049";
    }
  }

  img {
    margin: 0 auto;
  }

  h4 {
    font-size: 16px;
    color: rgb(200, 207, 210);
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    margin: 0px 0px 1rem;
    padding: 0px;
  }
`

const ImageWrapper = styled.div`
  text-align: center;
  margin: 2rem 0;
`

const Component = ({ title, image, content, link, linkLabel }) => {
  return (
    <Container>
      <div>
        {title}
        <ImageWrapper>
          <img src={image.url + "&h=60"} alt={image.alt} />
        </ImageWrapper>
        {content}
      </div>
      <Link to={link}>Read their story</Link>
    </Container>
  )
}

export default Component