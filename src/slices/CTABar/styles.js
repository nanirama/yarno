import styled from "styled-components"
export const Background = styled.div`
  padding: 3rem 0;
  text-align: center;
  h2 {
    margin: 0;
    margin-bottom: 1rem;
  }
  a {
    color: ${props => props.fontColor};
    text-decoration: none;
    font-weight: bold;
    border: 3px solid ${props => props.fontColor};
    padding: 1rem 2rem;
    display: inline-block;
    margin-top: 1rem;
    &:hover {
      background: ${props => props.fontColor};
      color: ${props => props.bgColor};
    }
  }
  ${props => props.fontColor && `color: ${props.fontColor};`}
  ${props => props.bgColor && `background: ${props.bgColor};`}
`
