import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { Pagination } from "@yarno/thread"

/* TODO: Replace this with a component that's SEO-friendly */

const PaginationComponent = ({ pageContext, rootPath }) => {
  const { currentPage, numberOfPages, limit } = pageContext
  if (numberOfPages == 1) {
    return null
  }

  const onPageClick = pageNumber => {
    let path = `${rootPath}/page/${pageNumber}/`
    if (pageNumber === 1) {
      path = rootPath
    }
    navigate(path)
  }

  return (
    <nav role="navigation">
      <Pagination
        numberOfItems={numberOfPages * limit}
        activePage={currentPage}
        perPage={limit}
        onPageClick={onPageClick}
      />
    </nav>
  )
}

PaginationComponent.propTypes = {
  pageContext: PropTypes.object.isRequired
}

export default PaginationComponent
