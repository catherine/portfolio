import { NavLink } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/watermark_500_black.png";
import SocialLinks from "./SocialLinks";
import { RefObject } from "react";

const Navbar = ({
  navbarRef,
}: {
  navbarRef: RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div className="navbar" ref={navbarRef}>
      <div className="navbar-container">
        <img
          aria-hidden
          className="navbar-logo"
          src={logo}
          alt="Catherine Patchell"
        />
        <nav className="navbar-links">
          <NavLink to="/">Live Music</NavLink>
          <NavLink to="/weddings">Weddings</NavLink>
          <NavLink to="/portraits">Portraits</NavLink>
          <NavLink to="/about">Contact</NavLink>
        </nav>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Navbar;
