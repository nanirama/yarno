import React, { Fragment, useState } from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import { Footer, Footnote } from "./styles"
import Container from "../common/Container"
import SalesCTA from "../SalesCTA"
import YarnSubscribe from "../YarnSubscribe"
import linkResolver from "../../utils/linkResolver"

import {
  ColumnContainer,
  CapterraBadge,
  NavListTitle,
  NavListList,
  ListItem,
  SocialIcons,
  SocialIcon
} from "./styles"

const NavList = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <Fragment>
      <NavListTitle active={isActive} onClick={() => setIsActive(!isActive)}>
        {title}
      </NavListTitle>
      <NavListList active={isActive}>{children}</NavListList>
    </Fragment>
  )
}

const Component = ({
  tinyLinks,
  acknowledgement,
  copyright,
  primaryFooter,
  hideSalesCTA
}) => {
  return (
    <Fragment>
      {hideSalesCTA ? null : <SalesCTA />}

      <Footer>
        <Container>
          <ColumnContainer>
            {primaryFooter.body.map((column, index) => {
              return (
                <div key={`footer-col-${index}`}>
                  <NavList title={column.primary.column_heading}>
                    {column.items.map((link, linkIndex) => {
                      if (link.link.uid == null) {
                        return (
                          <ListItem
                            key={`footer-link-${index}-${linkIndex}`}
                            linkStyle={link.link_style}>
                            <a data-link={link.link_text} href={link.link.url}>
                              {link.link_text}
                            </a>
                          </ListItem>
                        )
                      } else {
                        const linkTo = linkResolver(link.link)
                        return (
                          <ListItem
                            key={`footer-link-${index}-${linkIndex}`}
                            linkStyle={link.link_style}>
                            <Link to={linkTo}>{link.link_text}</Link>
                          </ListItem>
                        )
                      }
                    })}
                  </NavList>
                </div>
              )
            })}

            <div>
              <NavList title="Contact us">
                {primaryFooter.contact_email && (
                  <ListItem withIcon>
                    <i className="fa fa-envelope"></i>
                    <a href={`mailto:${primaryFooter.contact_email}`}>
                      {primaryFooter.contact_email}
                    </a>
                  </ListItem>
                )}

                {primaryFooter.address && (
                  <ListItem withIcon>
                    <i className="fa fa-map-marker-btm"></i>
                    <a
                      href={primaryFooter.google_maps_link.url}
                      title="Yarno Address">
                      <RichText render={primaryFooter.address.richText} />
                    </a>
                  </ListItem>
                )}

                {primaryFooter.contact_phone && (
                  <ListItem withIcon>
                    <i className="fa fa-phone"></i>
                    <a
                      href={primaryFooter.contact_phone_link.url}
                      title="Give us a call">
                      {primaryFooter.contact_phone}
                    </a>
                  </ListItem>
                )}

                {primaryFooter.career_statement && (
                  <ListItem withIcon>
                    <i className="fa fa-user"></i>
                    <a href={primaryFooter.career_link.url}>
                      <RichText
                        render={primaryFooter.career_statement.richText}
                      />
                    </a>
                  </ListItem>
                )}

                <SocialIcons>
                  {primaryFooter.twitter && (
                    <SocialIcon
                      href={`https://twitter.com/${primaryFooter.twitter}`}
                      target="_blank"
                      aria-label="Visit Yarno's Twitter">
                      <i className="fa fa-twitter" />
                    </SocialIcon>
                  )}
                  {primaryFooter.linked_in && (
                    <SocialIcon
                      href={primaryFooter.linked_in}
                      target="_blank"
                      rel="noopener"
                      aria-label="Visit Yarno's LinkedIn">
                      <i className="fa fa-linkedin" />
                    </SocialIcon>
                  )}
                </SocialIcons>
              </NavList>
            </div>

            <div>
              <h4>Subscribe to updates from Yarno</h4>
              <YarnSubscribe />
              <CapterraBadge>
                <a href="https://www.capterra.com.au/software/200929/yarno#reviews">
                  <img
                    border="0"
                    src="https://assets.capterra.com/badge/5d171ca70de8b768e23857933fc77bd1.png?v=2143605&p=200929"
                  />
                </a>
              </CapterraBadge>
            </div>
          </ColumnContainer>

          <Footnote>
            <hr />
            <RichText render={acknowledgement} />
            <hr />
            <div>
              {tinyLinks.map((link, index) => {
                return (
                  <RichText key={`tl-${index}}`} render={link.link.richText} />
                )
              })}
            </div>
            <RichText render={copyright} />
          </Footnote>
        </Container>
      </Footer>
    </Fragment>
  )
}

export default Component
