import { NavLink } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/watermark_500_black.png";
import { SocialLinks } from "./SocialLinks";
import { RefObject } from "react";

export const Navbar = ({
  navbarRef,
}: {
  navbarRef: RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div className="navbar" ref={navbarRef}>
      <div className="navbarContainer">
        <img
          aria-hidden
          className="navbarLogo"
          src={logo}
          alt="Catherine Patchell"
        />
        <nav className="navbarLinks">
          <NavLink to="/">Live Music</NavLink>
          <NavLink to="/weddings">Weddings</NavLink>
          <NavLink to="/portraits">Portraits</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
      <SocialLinks />
    </div>
  );
};
