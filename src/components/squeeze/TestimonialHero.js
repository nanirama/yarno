import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { sm, md } from "../../utils/breakpoints";

const Button = styled(Link)`
  display: block;
  background: ${props => props.theme.colors.secondary};
  color: white;
  border-radius: 3px;
  padding: 1rem 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  text-decoration: none;
`;

const Blockquote = styled.blockquote`
  text-align: center;
  color: #707070;
  line-height: 1.3em;
  font-style: italic;
  margin: 2rem 0 2rem 0;
  font-size: 2.2rem;
  @media ${sm} {
    font-size: 2.8rem;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 4rem auto 3rem auto;
  padding: 0 3rem;
  @media ${md} {
    display: flex;

    > div {
      flex: 1;
    }
  }
`;

const AuthorImage = styled.div`
  max-width: 350px;
  margin: 0 auto;
  @media ${md} {
    padding-right: 4rem;
  }
  img {
    max-width: 100%;
  }
`;

const Cite = styled.cite`
  display: block;
  font-style: normal
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  font-size: 0.6em;
  margin-bottom: 2rem;

  strong {
    display: block;
    font-size: 1.3em;
  }
`;

const AuthorDetails = styled.div`
  text-align: center;
  img {
    margin-bottom: 2rem;
  }

  a {
  }
`;

const Component = ({
  quote,
  author,
  authorImageURL,
  authorJobTitle,
  company,
  companyLogo,
  ctaLink,
  ctaText
}) => {
  return (
    <Container>
      {authorImageURL && (
        <AuthorImage>
          <img src={authorImageURL} alt={author} />
        </AuthorImage>
      )}
      <AuthorDetails>
        <Blockquote>{quote}</Blockquote>
        {author && (
          <Cite>
            <strong>{author}</strong>
            {authorJobTitle}
          </Cite>
        )}
        {companyLogo && <img src={companyLogo} alt={company} />}
        {ctaLink && <Button to={ctaLink}>{ctaText}</Button>}
      </AuthorDetails>
    </Container>
  );
};

export default Component;
