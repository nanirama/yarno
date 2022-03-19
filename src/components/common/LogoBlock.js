import React from "react";
import Imgix from "react-imgix";
import styled from "styled-components";
import IMGIX_URL from "../../utils/imgix";
import { sm, md } from "../../utils/breakpoints";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 3rem;
  height: 8rem;

  img {
    max-height: 6rem;
  }

  @media ${sm} {
    height: 15rem;

    img {
      max-height: 8rem;
    }
  }
`;

const LogoBlock = ({ path, alt }) => {
  return (
    <Container>
      <Imgix
        src={IMGIX_URL(path)}
        sizes={`${sm} 33vw, ${md} 20vw, 50vw`}
        htmlAttributes={{ alt: alt }}
      />
    </Container>
  );
};

export default LogoBlock;
