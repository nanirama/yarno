import * as React from "react"
import {
  PrismicPreviewProvider,
  componentResolverFromMap
} from "gatsby-plugin-prismic-previews"
import linkResolver from "./src/utils/linkResolver"

import AuthorTemplate from "./src/templates/author"
import BlogIndexTemplate from "./src/templates/blog"
import BlogPostTemplate from "./src/templates/blogPost"
import CareerTemplate from "./src/templates/career"
import CaseStudyTemplate from "./src/templates/caseStudy"
import IndustryPageTemplate from "./src/templates/industryPage"
import PageTemplate from "./src/templates/page"
import SqueezeTemplate from "./src/templates/squeeze"

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: "yarno",
        linkResolver,
        componentResolver: componentResolverFromMap({
          author: AuthorTemplate,
          blog: BlogIndexTemplate,
          blog_post: BlogPostTemplate,
          career: CareerTemplate,
          case_study: CaseStudyTemplate,
          industry_page: IndustryPageTemplate,
          page: PageTemplate,
          squeeze: SqueezeTemplate
        })
      }
    ]}>
    {" "}
    {element}
  </PrismicPreviewProvider>
)