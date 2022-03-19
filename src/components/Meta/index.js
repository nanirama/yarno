import React from "react"
import Helmet from "react-helmet"

const defaultImage =
  "https://images.prismic.io/yarno/ba468a22-3ed1-448e-965d-be373170216f_yarno_og.jpeg?auto=compress,format"

const Meta = ({ title, description, canonical, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:image:width" content={1000} />
      <meta property="og:image:height" content={500} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  )
}

export default Meta
