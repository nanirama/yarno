const path = require(`path`)
const config = require(`./src/utils/siteConfig`)
const linkResolver = require(`./src/utils/linkResolver`)
const { paginate } = require(`gatsby-awesome-pagination`)

// Process is not defined bullshit
exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
  if (stage === "build-javascript" || stage === "develop") {
    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: "process/browser" })]
    })
  }
}
/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */
exports.createPages = async function ({ graphql, actions }) {
  const { createPage } = actions
  const { createRedirect } = actions

  createRedirect({
    fromPath: "/careers/marketing-content-creator",
    toPath: "/careers/marketing-content-writer/",
    isPermanent: true
  })

  createRedirect({
    fromPath: "/contact",
    toPath: "/contact-us",
    isPermanent: true
  })

  /** Tags **/
  const createTags = new Promise((resolve, reject) => {
    const tagTemplate = path.resolve(`./src/templates/tag.js`)
    resolve(
      graphql(`
        {
          allPrismicBlogPost {
            edges {
              node {
                id
                data {
                  tags {
                    tag {
                      uid
                    }
                  }
                }
              }
            }
          }
          allPrismicTag {
            edges {
              node {
                uid
                id
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        if (!result.data.allPrismicTag) {
          return resolve()
        }

        const tags = result.data.allPrismicTag.edges
        const postsPerPage = 12

        tags.forEach(({ node }) => {
          const filteredPosts = result.data.allPrismicBlogPost.edges.filter(
            post => {
              const uids = post.node.data.tags.map(t => t.tag.uid)
              return uids.includes(node.uid)
            }
          )
          const numberOfTagPages = Math.ceil(
            filteredPosts.length / postsPerPage
          )
          const tagIndexes = Array.from({ length: numberOfTagPages })
          tagIndexes.forEach((_, i) => {
            createPage({
              path:
                i === 0
                  ? `/blog/tag/${node.uid}/`
                  : `/blog/tag/${node.uid}/page/${i + 1}/`,
              component: path.resolve(tagTemplate),
              context: {
                id: node.uid,
                limit: postsPerPage,
                skip: i * postsPerPage,
                numberOfPages: numberOfTagPages,
                currentPage: i + 1
              }
            })
          })
        })
        return resolve()
      })
    )
  })

  /** Authors **/
  const createAuthors = new Promise((resolve, reject) => {
    const authorTemplate = path.resolve(`./src/templates/author.js`)
    resolve(
      graphql(`
        {
          allPrismicBlogPost {
            edges {
              node {
                id
                data {
                  author {
                    uid
                  }
                }
              }
            }
          }
          allPrismicAuthor {
            edges {
              node {
                uid
                id
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        if (!result.data.allPrismicAuthor) {
          return resolve()
        }

        const authors = result.data.allPrismicAuthor.edges
        const postsPerPage = 12
        authors.forEach(({ node }) => {
          const filteredPosts = result.data.allPrismicBlogPost.edges.filter(
            post => post.node.data.author.uid === node.uid
          )
          const numberOfAuthorPages = Math.ceil(
            filteredPosts.length / postsPerPage
          )
          const authorIndexes = Array.from({ length: numberOfAuthorPages })
          authorIndexes.forEach((_, i) => {
            createPage({
              path:
                i === 0
                  ? `/blog/author/${node.uid}/`
                  : `/blog/author/${node.uid}/page/${i + 1}/`,
              component: path.resolve(authorTemplate),
              context: {
                id: node.uid,
                limit: postsPerPage,
                skip: i * postsPerPage,
                numberOfPages: numberOfAuthorPages,
                currentPage: i + 1
              }
            })
          })
        })
        return resolve()
      })
    )
  })

  /** Posts **/

  /** Blog index **/
  const createBlogIndexes = new Promise((resolve, reject) => {
    const blogIndexTemplate = path.resolve(`./src/templates/blog.js`)
    resolve(
      graphql(`
        {
          allPrismicBlogPost(
            sort: { fields: data___release_date, order: DESC }
          ) {
            edges {
              node {
                uid
                id
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        if (!result.data.allPrismicBlogPost) {
          return resolve()
        }

        const blogPosts = result.data.allPrismicBlogPost.edges
        const blogPostsPerPage = 12
        const numberOfBlogPages = Math.ceil(blogPosts.length / blogPostsPerPage)
        const blogIndexes = Array.from({ length: numberOfBlogPages })
        blogIndexes.forEach((_, i) => {
          createPage({
            path: i === 0 ? `/blog/` : `/blog/page/${i + 1}/`,
            component: path.resolve(blogIndexTemplate),
            context: {
              limit: blogPostsPerPage,
              skip: i * blogPostsPerPage,
              numberOfPages: numberOfBlogPages,
              currentPage: i + 1
            }
          })
        })

        return resolve()
      })
    )
  })

  /** Blog posts **/
  const createPosts = new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`./src/templates/blogPost.js`)
    resolve(
      graphql(`
        {
          allPrismicBlogPost(
            sort: { fields: data___release_date, order: DESC }
          ) {
            edges {
              node {
                uid
                id
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        if (!result.data.allPrismicBlogPost) {
          return resolve()
        }

        const blogPosts = result.data.allPrismicBlogPost.edges
        blogPosts.forEach(({ node }) => {
          createPage({
            path: `blog/${node.uid}/`,
            component: path.resolve(blogPostTemplate),
            context: {
              id: node.id
            }
          })
        })

        return resolve()
      })
    )
  })

  /** Careers **/
  const createCareers = new Promise((resolve, reject) => {
    const careerTemplate = path.resolve(`./src/templates/career.js`)
    resolve(
      graphql(`
        {
          allPrismicJobPost {
            edges {
              node {
                id
                uid
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        if (!result.data.allPrismicJobPost) {
          return resolve()
        }

        const careers = result.data.allPrismicJobPost.edges
        careers.forEach(({ node }) => {
          createPage({
            path: `careers/${node.uid}/`,
            component: path.resolve(careerTemplate),
            context: {
              id: node.id
            }
          })
        })
        return resolve()
      })
    )
  })

  /** Case studies **/
  const createCaseStudies = new Promise((resolve, reject) => {
    const caseStudyTemplate = path.resolve(`./src/templates/caseStudy.js`)
    resolve(
      graphql(`
        {
          allPrismicCaseStudy {
            edges {
              node {
                id
                uid
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        if (!result.data.allPrismicCaseStudy) {
          return resolve()
        }

        const caseStudies = result.data.allPrismicCaseStudy.edges
        caseStudies.forEach(({ node }) => {
          createPage({
            path: `case-studies/${node.uid}/`,
            component: path.resolve(caseStudyTemplate),
            context: {
              id: node.id
            }
          })
        })
        return resolve()
      })
    )
  })

  /** Pages **/
  const createPages = new Promise((resolve, reject) => {
    const pageTemplate = path.resolve(`./src/templates/page.js`)
    resolve(
      graphql(`
        {
          allPrismicPage {
            edges {
              node {
                id
                uid
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        if (!result.data.allPrismicPage) {
          return resolve()
        }

        const pages = result.data.allPrismicPage.edges

        pages.forEach(({ node }) => {
          createPage({
            path: linkResolver({ type: "page", uid: node.uid }),
            component: path.resolve(pageTemplate),
            context: {
              id: node.id
            }
          })
        })

        return resolve()
      })
    )
  })

  /** Pages **/
  const createIndustryPages = new Promise((resolve, reject) => {
    const industryTemplate = path.resolve(`./src/templates/industryPage.js`)
    resolve(
      graphql(`
        {
          allPrismicIndustryPage {
            edges {
              node {
                id
                uid
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        if (!result.data.allPrismicIndustryPage) {
          return resolve()
        }

        const industryPage = result.data.allPrismicIndustryPage.edges

        industryPage.forEach(({ node }) => {
          createPage({
            path: linkResolver({ type: "industry_page", uid: node.uid }),
            component: path.resolve(industryTemplate),
            context: {
              id: node.id
            }
          })
        })

        return resolve()
      })
    )
  })

  /** Squeeze pages **/
  const createSqueezePages = new Promise((resolve, reject) => {
    const squeezeTemplate = path.resolve(`./src/templates/squeeze.js`)
    resolve(
      graphql(`
        {
          allPrismicSqueezePage {
            edges {
              node {
                uid
                id
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        if (!result.data.allPrismicSqueezePage) {
          return resolve()
        }

        const pages = result.data.allPrismicSqueezePage.edges

        pages.forEach(({ node }) => {
          createPage({
            path: linkResolver({ type: "squeeze_page", uid: node.uid }),
            component: path.resolve(squeezeTemplate),
            context: {
              id: node.id
            }
          })
        })

        return resolve()
      })
    )
  })

  /** SupportCategory pages **/
  const createSupportCategoryPages = new Promise((resolve, reject) => {
    const SupportCategoryTemplate = path.resolve(`./src/templates/supportCategory.js`)
    resolve(
      graphql(`
        {
            allPrismicSupportCategory(sort: {fields: data___title___text, order: ASC}) {
                edges {
                    node {
                        id
                        uid
                    }
                }
            }
        }
      `).then(result => {
       
        if (result.errors) {
          return reject(result.errors)
        }
        if (!result.data.allPrismicSupportCategory.edges) {
          return resolve()
        }
        const pages = result.data.allPrismicSupportCategory.edges

        pages.forEach(({ node }) => {
          createPage({
            path: linkResolver({ type: "support_category_page", uid: node.uid }),
            component: path.resolve(SupportCategoryTemplate),
            context: {
              id: node.id
            }
          })
        })

        return resolve()
      })
    )
  })

  /** Support Articles pages **/
const createSupportArticlePages = new Promise((resolve, reject) => {
  const SupportArtileTemplate = path.resolve(`./src/templates/supportArticle.js`)
  resolve(
    graphql(`
      {
          allPrismicSupportCategory(sort: {fields: data___title___text, order: ASC}) {
          edges {
              node {
              id
              uid
              data {
                  articles {
                  article {
                      document {
                      ... on PrismicSupportArticle {
                          id
                          uid
                      }
                      }
                  }
                  }
              }
              }
          }
          }
      }
    `).then(result => {
     
      if (result.errors) {
        return reject(result.errors)
      }
      if (!result.data.allPrismicSupportCategory.edges) {
        return resolve()
      }
      const categories = result.data.allPrismicSupportCategory.edges

      categories.forEach(({ node }) => {
          console.log('category uid', node.uid)
          const articles = node.data.articles   
          console.log('category articles', articles.length)
          if(articles.length>0){
            articles.forEach(({ article }) => {
              if(article.document && article.document.uid)
              {
                  createPage({
                      path: linkResolver({ type: "support_article_page", uid: node.uid, aid:article.document.uid }),
                      component: path.resolve(SupportArtileTemplate),
                      context: {
                          cid: node.id,
                          id: article.document.id
                      }
                  })
              }
            })
          }
      })

      return resolve()
    })
  )
})

  return Promise.all([
    createAuthors,
    createPosts,
    createBlogIndexes,
    createCareers,
    createPages,
    createIndustryPages,
    createCaseStudies,
    createSqueezePages,
    createSupportCategoryPages,
    createSupportArticlePages
  ])
}
