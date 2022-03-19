const linkResolver = doc => {
  if (!doc) return null

  if (doc.type === "author") return "/blog/author/" + doc.uid + "/"
  if (doc.type === "tag") return "/blog/tag/" + doc.uid + "/"
  if (doc.type === "blog_index") return "/blog/"
  if (doc.type === "blog_post") return "/blog/" + doc.uid + "/"
  if (doc.type === "industry_page") return "/industries/" + doc.uid + "/"
  if (doc.type === "case_study") return "/case-studies/" + doc.uid + "/"
  if (doc.type === "support_category_page") return "/support/category/" + doc.uid + "/"
  if (doc.type === "support_article_page") return "/support/category/" + doc.uid + "/" + doc.aid + "/"
  if (doc.type === "page") {
    if (doc.uid == ".") {
      return "/"
    }
    if (["microlearning", "our-training-solution"].includes(doc.uid)) {
      return "/why-yarno/" + doc.uid + "/"
    }
    if (["our-team", "our-values"].includes(doc.uid)) {
      return "/about-us/" + doc.uid + "/"
    }
    return "/" + doc.uid + "/"
  }
  if (doc.type === "squeeze_page") return "/try/" + doc.uid + "/"

  return "#"
}

module.exports = linkResolver
