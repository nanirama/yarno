import React from "react"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import { sm, md } from "../../utils/breakpoints"
import Container from "../../components/common/Container"
export const KeyResults = styled.div`
  padding: 6rem 0rem 5rem 0rem;
  background: ${props => props.theme.colors.grayBackground};

  h2 {
    margin-top: 0;
    margin-bottom: 2rem;
    position: relative;
    &:before {
      content: " ";
      position: absolute;
      height: 4px;
      width: 14rem;
      background: ${props => props.theme.colors.primary};
      top: -2.7rem;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    margin-top: 3rem;
    padding: 0;
  }

  li {
    position: relative;
    padding-left: 3rem;
    margin-top: 1rem;
  }

  li:before {
    position: absolute;
    left: 0;
    font-family: Jupiter;
    content: "\f049";
    color: ${props => props.theme.colors.primary};
  }

  @media ${md} {
    padding: 0rem 3rem;
    background: linear-gradient(
      to right,
      #ffffff 50%,
      ${props => props.theme.colors.grayBackground} 50%,
      ${props => props.theme.colors.grayBackground} 100%
    );
    margin-bottom: 9rem;

    > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 0rem;
    }
    > div > div,
    > div > ul {
      background: ${props => props.theme.colors.grayBackground};
      padding-top: 7rem;
      padding-bottom: 7rem;
    }
    > div > div:first-of-type {
      padding-left: 7rem;
    }

    ul {
      margin-top: 0;
    }

    li {
      margin-top: 3rem;
    }
    li:first-of-type {
      margin-top: 0;
    }
  }
`
const Component = ({ slice }) => {
  return (
    <KeyResults>
      <Container>
        <div>
          <div>
            <h2>Key results</h2>
            <img
              src="https://images.prismic.io/yarno/c37bfd7a-62a8-401f-8455-2539ec05b987_key_results.png?auto=compress,format"
              height="60"
              width="267"
            />
          </div>
        </div>
        <ul>
          {slice.items.map((item, index) => {
            return (
              <li key={`r-${index}`}>
                <RichText render={item.result.richText} />
              </li>
            )
          })}
        </ul>
      </Container>
    </KeyResults>
  )
}
export default Component