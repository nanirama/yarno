import React from "react";
import styled from "styled-components";

const CustomerWrapper = styled.div`
  text-align: center;
  padding: 2rem 0;
  max-width: 35rem;
  margin: 0 auto;
`;

const Name = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
`;

const Excerpt = styled.div`
  font-style: italic;
  padding-bottom: 2rem;
  border-bottom: 3px solid #aaaaaa;
`;

const Company = styled.p`
  font-weight: 700;
  text-align: center;
`;

const CustomerCard = ({ name, excerpt, company }) => {
  return (
    <CustomerWrapper>
      <Excerpt>{excerpt}</Excerpt>
      <Name>{name}</Name>
      <Company>{company}</Company>
    </CustomerWrapper>
  );
};

export default CustomerCard;
