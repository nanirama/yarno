import styled from "styled-components";
import { sm } from "../../utils/breakpoints";

export const ContactDetails = styled.section`
  border-top: 3px solid ${props => props.theme.colors.secondary};
  background-color: #707070;
  color: white;
  padding: 3rem;

  h3 {
    margin: 0 0 1.5rem 0;
  }
  p {
    margin: 0;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

export const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  @media ${sm} {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  text-align: center;
  img {
    max-width: 150px;
    margin-bottom: 2rem;
  }
  @media ${sm} {
    text-align: left;
    flex: 1;
    img {
      max-width: 200px;
      margin: 0;
    }
  }
`;
export const Details = styled.div`
  i {
    margin-right: 1.5rem;
  }
  p {
    margin: 1rem 0 0 0;
  }
  h3 {
    font-size: 2em;
  }
  @media ${sm} {
    flex: 3;
    margin-left: 4rem;
  }
`;