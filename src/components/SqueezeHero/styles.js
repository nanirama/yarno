import styled from "styled-components"
import { md } from "../../utils/breakpoints";

export const Hero = styled.div`
  background-color: ${props =>
    props.alternate ? "white" : props.theme.colors.primary};
  overflow: hidden;

  ${props => props.align && `text-align: ${props.align};`}
  ${props => !props.imageURL && `padding-top: 5rem;`}

  h1 {
    color: ${props => (props.alternate ? props.theme.colors.primary : "white")};
    font-size: 3.2rem;
    margin: 0;
    @media ${md} {
      font-size: 5.2rem;
    }
  }

  h2 {
    color: ${props =>
      props.alternate ? props.theme.colors.secondary : "white"};
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.4em;
    @media ${md} {
      font-size: 2.8rem;
    }
  }

  p {
    ${props => !props.alternate && "color: white;"}
  }
`;

export const Flex = styled.div`
  ${props => !props.noImagePadding && `padding: 2rem;`}
  ${props => !props.imageURL && `max-width: 90rem; margin: 0 auto;`}

  @media ${md} {
    display: flex;
    > div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      flex: 1;
    }
  }
`;

export const Content = styled.div`
  ${props =>
    props.align == "left" &&
    `
    align-items: flex-start !important;
    justify-content: flex-start !important;
  `}
`;