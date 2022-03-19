import React, { Fragment } from "react"
import { Link } from "gatsby"

const SupportCategorySidebar = ({ data, categoryUrl }) => {
 

  return (
    <ul>
      {data && data.map(({article},index)=>(
        <li><svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3.5H11M11 3.5L8.5 1M11 3.5L8.5 6" stroke="#F9A21A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg><Link to={`/support/category/${categoryUrl}/${article.document.uid}`}>{article.document.data.title.text}</Link></li>
      ))}      
    </ul>
  )
}

export default SupportCategorySidebar