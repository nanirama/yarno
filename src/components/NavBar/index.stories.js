import React from "react"
import Component from "."
import links from "./mock.json"

export default {
  title: "Components/Navbar",
  component: Component
}

const defaultProps = {
  isHome: false,
  companyName: "Yarno",
  logo:
    "https://images.prismic.io/yarno/fd22d56a-4fdb-4d83-9dfd-e43b8f448b12_Yarno-logo-green.png?auto=compress%2Cformat&fit=max&q=50&h=58",
  links: links
}

// The data for this comes from hooks/useLayout
export const Default = () => {
  return <Component {...defaultProps} />
}

export const IsHome = () => {
  return <Component {...defaultProps} isHome={true} />
}
