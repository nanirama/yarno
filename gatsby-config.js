require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require(`path`)

const config = require(`./src/utils/siteConfig`)

const linkResolver = require(`./src/utils/linkResolver`)

const prismicPreviewConfiguration = {
  resolve: "gatsby-plugin-prismic-previews",
  options: {
    repositoryName: process.env.PRISMIC_REPO_NAME,
    accessToken: process.env.PRISMIC_API_KEY,
    lang: "*",
    imageImgixParams: {
      auto: "compress,format",
      fit: "max",
      q: 80
    },
    imagePlaceholderImgixParams: {
      w: 100,
      blur: 15,
      q: 50
    }
  }
}

const prismicConfiguration = {
  resolve: "gatsby-source-prismic",
  options: {
    repositoryName: process.env.PRISMIC_REPO_NAME,
    accessToken: process.env.PRISMIC_API_KEY,
    customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_KEY,    
    linkResolver: doc => linkResolver(doc),
    lang: "*",
    imageImgixParams: {
      auto: "compress,format",
      fit: "max",
      q: 80
    },
    imagePlaceholderImgixParams: {
      w: 100,
      blur: 15,
      q: 50
    }
  }
}

/**
 * This is the place where you can tell Gatsby which plugins to use
 * and set them up the way you want.
 *
 * Further info 👉🏼 https://www.gatsbyjs.org/docs/gatsby-config/
 *
 */
module.exports = {
  flags: {
    FAST_DEV: true,
    PRESERVE_WEBPACK_CACHE: true
  },
  siteMetadata: {
    siteUrl: config.siteUrl
  },
  plugins: [
    prismicPreviewConfiguration,
    prismicConfiguration,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5NTMCW3",
        includeInDevelopment: false,
        enableWebVitalsTracking: true
      }
    },
    /**
     *  Content Plugins
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `pages`),
        name: `pages`
      }
    },
    // Setup for optimised images.
    // See https://www.gatsbyjs.org/packages/gatsby-image/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
        name: `images`
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    /**
     *  Utility Plugins
     */
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        allPageHeaders: [
          "Strict-Transport-Security: max-age=300; includeSubDomains; preload"
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-meta-redirect` // ensure this plugin is last in the array
  ]
}
