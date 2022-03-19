import { componentResolverFromMap } from "gatsby-plugin-prismic-previews"
import linkResolver from "./utils/linkResolver"

import AuthorTemplate from "./templates/author"
import BlogIndexTemplate from "./templates/blog"
import BlogPostTemplate from "./templates/blogPost"
import CareerTemplate from "./templates/career"
import CaseStudyTemplate from "./templates/caseStudy"
import IndustryPageTemplate from "./templates/industryPage"
import PageTemplate from "./templates/page"
import SqueezeTemplate from "./templates/squeeze"

export const unpublishedRepositoryConfigs = [
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
]
