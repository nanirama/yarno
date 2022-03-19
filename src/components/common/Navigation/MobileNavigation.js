import React, { useState } from "react";
import { MobileNav, MobileNavMenu, MobileNavItem, Overlay } from "./styles";
import IconLink from "../IconLink";
import { Link } from "gatsby";

export default function MobileNavigation({ isHome, location }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const whiteLogo =
    "https://yarno.imgix.net/static/logos/yarno_green.png?exp=100&h=58";

  return (
    <React.Fragment>
      <MobileNav
        isHome={isHome}
        isOpen={mobileNavOpen}
        onClick={toggleMobileNav}
      >
        <i className="fa fa-bars" />
      </MobileNav>
      <Overlay onClick={toggleMobileNav} isOpen={mobileNavOpen}>
        <MobileNavMenu>
          <a href="/">
            <img src={whiteLogo} alt="Yarno" />
          </a>
          <ul>
            <MobileNavItem>Why Yarno?</MobileNavItem>
            <MobileNavItem subItem>
              <Link to="/why-yarno/microlearning">What is microlearning?</Link>
            </MobileNavItem>
            <MobileNavItem subItem>
              <Link to="/why-yarno/our-training-solution">
                Our training solution
              </Link>
            </MobileNavItem>
            <MobileNavItem>About us</MobileNavItem>
            <MobileNavItem subItem>
              <Link to="/about-us/our-values">Our values</Link>
            </MobileNavItem>
            <MobileNavItem subItem>
              <Link to="/about-us/our-team">Our team</Link>
            </MobileNavItem>
            <MobileNavItem>
              <Link to="/case-studies">Case studies</Link>
            </MobileNavItem>
            <MobileNavItem subItem>
              <Link to="/case-studies/ron-finemore-transport">
                Ron Finemore Transport
              </Link>
            </MobileNavItem>
            <MobileNavItem subItem>
              <Link to="/case-studies/supercheap-auto">Supercheap Auto</Link>
            </MobileNavItem>
            <MobileNavItem subItem>
              <Link to="/case-studies/grant-broadcasters">
                Grant Broadcasters
              </Link>
            </MobileNavItem>
            <MobileNavItem>
              <Link to="/blog">Blog</Link>
            </MobileNavItem>
            <MobileNavItem>
              <Link to="/contact-us">Contact us</Link>
            </MobileNavItem>
            <IconLink
              title="Support"
              icon="lifebuoy"
              to="https://support.yarno.com.au/"
              target="_blank"
              tintStyle="medium"
            />
            <IconLink
              title="Login"
              icon="user"
              to="https://learn.yarno.com.au"
              target="_blank"
              tintStyle="dark"
            />
          </ul>
        </MobileNavMenu>
      </Overlay>
    </React.Fragment>
  );
}