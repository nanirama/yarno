import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Container = styled.div`
  background: #ffffff;
  box-shadow: 4px 4px 12px 0 rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin-bottom: 3rem;
  padding: 3rem;

  a {
    color: ${props => props.theme.colors.tertiary};
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
  }
`;

const Children = styled.div`
  height: 15rem;
  max-height: 15rem;
  overflow: hidden;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const CaseStudyCard = ({ title, url, children }) => {
  return (
    <Container>
      <Children>{children}</Children>
      <h3>{title}</h3>
      <Link to={url}>Read</Link>
    </Container>
  );
};

export default CaseStudyCard;
