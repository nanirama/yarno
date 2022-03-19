import React from "react";
import { Button, Blockquote, Container, AuthorImage, Cite, AuthorDetails } from "./styles"

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
