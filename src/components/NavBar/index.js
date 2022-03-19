import React, { useState } from "react"
import { Link } from "gatsby"
import Hamburger from "../Hamburger"
import { Nav, Container, NavLinks } from "./styles"
import { useScrolled } from "../../hooks/useScrolled"
import linkResolver from "../../utils/linkResolver"

const Subnav = ({ link }) => {
  if (link.items.length <= 1) return null

  return (
    <ul>
      {link.items.map((sublink, index) => {
        return (
          <li key={sublink.level_2_link.document.uid}>
            <NavLink link={sublink} level={2} />
          </li>
        )
      })}
    </ul>
  )
}

const NavLink = ({ link, level }) => {
  const primaryLink = link[`level_${level}_link`]
  const label = link[`level_${level}_link_label`]

  if (!primaryLink.document) return <a>{label}</a>

  return <Link to={linkResolver(primaryLink.document)}>{label}</Link>
}

const NavBar = ({ isHome, companyName, logo, links }) => {
  const { hasScrolled } = useScrolled(60)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const inverted = mobileNavOpen || isHome

  return (
    <Nav isHome={inverted} hasScrolled={hasScrolled} isOpen={mobileNavOpen}>
      <Container>
        <Link to="/" id="logo">
          <img src={inverted ? logo + "&exp=100" : logo} alt={companyName} />
        </Link>

        <Hamburger
          isOpen={mobileNavOpen}
          inverted={inverted}
          handleClick={() => setMobileNavOpen(!mobileNavOpen)}
        />

        <NavLinks mobileNavOpen={mobileNavOpen}>
          {links.map((link, index) => {
            return (
              <li key={`link-${index}`}>
                <NavLink link={link.primary} level={1} />
                <Subnav link={link} />
              </li>
            )
          })}
          <li data-highlight>
            <Link to="/support/">
              <i className={`fa fa-lifebuoy`} /> Support
            </Link>
          </li>
          <li data-highlight>
            <a href="https://learn.yarno.com.au">
              <i className={`fa fa-user`} /> Login
            </a>
          </li>
        </NavLinks>
      </Container>
    </Nav>
  )
}
export default NavBar
