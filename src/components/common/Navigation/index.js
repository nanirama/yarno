import React, { useEffect, useState } from "react";
import { Nav, NavList, NavItem } from "./styles";
import MobileNavigation from "./MobileNavigation";
import IconLink from "../IconLink";
import { Link } from "gatsby";
import { colors } from "@yarno/thread";

export default function Navigation({ isHome, location }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    if (scrollPosition > 50 && !hasScrolled) {
      setHasScrolled(true);
    }

    if (scrollPosition < 50 && hasScrolled) {
      setHasScrolled(false);
    }
  }, [scrollPosition]);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  const img = isHome
    ? "https://yarno.imgix.net/static/logos/yarno_green.png?exp=100&h=58"
    : "https://yarno.imgix.net/static/logos/yarno_green.png?h=58";

  return (
    <Nav isHome={isHome} hasScrolled={hasScrolled}>
      <a href="/">
        <img
          src={img}
          style={{ width: "9.3rem", height: "2.9rem" }}
          alt="Yarno"
        />
      </a>
      <NavList>
        <NavItem
          isHome={isHome}
          hasSubItems
          enabled={
            location && location.pathname.includes("why-yarno").toString()
          }
        >
          <span>Why Yarno?</span>
          <Link
            to="/why-yarno"
            activeStyle={{ color: colors.greenLightSea }}
            partiallyActive={true}
          ></Link>
          <ul>
            <li>
              <Link to="/why-yarno/microlearning">What is microlearning?</Link>
            </li>
            <li>
              <Link to="/why-yarno/our-training-solution">
                Our training solution
              </Link>
            </li>
          </ul>
        </NavItem>
        <NavItem
          hasSubItems
          isHome={isHome}
          enabled={
            location && location.pathname.includes("/about-us").toString()
          }
        >
          <span>About us</span>
          <ul>
            <li>
              <Link to="/about-us/our-values">Our values</Link>
            </li>
            <li>
              <Link to="/about-us/our-team">Our team</Link>
            </li>
          </ul>
        </NavItem>
        <NavItem
          hasSubItems
          isHome={isHome}
          enabled={
            location && location.pathname.includes("/case-studies").toString()
          }
        >
          <Link
            to={"/case-studies"}
            activeStyle={{ color: colors.greenLightSea }}
          >
            Case studies
          </Link>
          <ul>
            <li>
              <Link to="/case-studies/ron-finemore-transport">
                Ron Finemore Transport
              </Link>
            </li>
            <li>
              <Link to="/case-studies/supercheap-auto">Supercheap Auto</Link>
            </li>
            <li>
              <Link to="/case-studies/grant-broadcasters">
                Grant Broadcasters
              </Link>
            </li>
          </ul>
        </NavItem>
        <NavItem isHome={isHome}>
          <Link
            to={"/blog"}
            activeStyle={{ color: colors.greenLightSea }}
            partiallyActive={true}
          >
            Blog
          </Link>
        </NavItem>
        <NavItem isHome={isHome}>
          <Link
            to={"/contact-us"}
            activeStyle={{ color: colors.greenLightSea }}
          >
            Contact us
          </Link>
        </NavItem>
        <IconLink
          title="Support"
          icon="lifebuoy"
          to="https://support.yarno.com.au/"
          target="_blank"
          tintStyle="medium"
          marginLeft
        />
        <IconLink
          title="Login"
          icon="user"
          to="https://learn.yarno.com.au"
          target="_blank"
          tintStyle="dark"
          marginLeft
        />
      </NavList>
      <MobileNavigation isHome={isHome} />
    </Nav>
  );
}
