import React from "react";
import styled from "styled-components";
import IMGIX_URL from "../../utils/imgix";
import { sm } from "../../utils/breakpoints";

const ContactDetails = styled.section`
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

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  @media ${sm} {
    display: flex;
    align-items: center;
  }
`;

const Avatar = styled.div`
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
const Details = styled.div`
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

const Component = ({}) => {
  return (
    <ContactDetails>
      <Container>
        <Avatar>
          <img src={IMGIX_URL("mark_avatar.png")} alt="Mark" />
        </Avatar>
        <Details>
          <h3>Contact Mark today to find out how we can help</h3>
          <p>
            <i className="fa fa-phone" />
            <a href="tel:+61401872305">0401 872 305</a>
          </p>
          <p>
            <i className="fa fa-envelope" style={{ fontWeight: 600 }} />
            <a href="mailto:mark@yarno.com.au">mark@yarno.com.au</a>
          </p>
        </Details>
      </Container>
    </ContactDetails>
  );
};

export default Component;
