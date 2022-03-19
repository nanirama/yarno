import React from "react"
import { Link as GatsbyLink } from "gatsby"
import linkResolver from "../../utils/linkResolver"

const Link = props => {
  if (props.link_type == "Document") {
    return <GatsbyLink to={linkResolver(props)}>{props.children}</GatsbyLink>
  }

  if (props.link_type == "Web") {
    return <a href={props.url}>{props.children}</a>
  }
}

export default Link
