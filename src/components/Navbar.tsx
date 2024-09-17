import { NavLink } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/watermark_500_black.png";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <a className="navbar-logoLink" href="http://catherinepatchell.com/">
          <img className="navbar-logo" src={logo} alt="Catherine Patchell" />
        </a>
        <div className="navbar-links">
          <NavLink to="/">Live Music</NavLink>
          <NavLink to="/weddings">Weddings</NavLink>
          <NavLink to="/about">Contact</NavLink>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Navbar;
