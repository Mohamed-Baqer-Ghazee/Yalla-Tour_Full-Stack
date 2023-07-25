import { Link, NavLink } from "react-router-dom";
import searchIcon from "../../assets/icons/search.svg";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";
import "./Navbar.css";

import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const activeLink = ({ isActive, isPending }) => {
    return isActive ? "nav-link active" : "nav-link";
  };
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <nav className={`navbar ${open ? "navbar-res" : ""}`}>
      <div className="logo-container">
        <h3 className="logo">LOGO</h3>
        <button className="burger-btn" onClick={() => setOpen(!open)}>
          {open ? (
            <img src={closeIcon} alt="close-icon" />
          ) : (
            <img src={menuIcon} alt="menu-icon" />
          )}
        </button>
      </div>
      <div className={`navigation-container ${open ? "nav-links-active" : ""}`}>
        <ul className={`nav-links  ${open ? "visible" : ""}`}>
          <li>
            <NavLink to="/" className={activeLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Places" className={activeLink}>
              Places
            </NavLink>
          </li>
          <li>
            <NavLink to="/Restaurants" className={activeLink}>
              Restaurants
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" className={activeLink}>
              About Us
            </NavLink>
          </li>
        </ul>
        <div className={`left-side ${open ? "visible" : ""}`}>
          {/* <div className={`search-bar ${active ? "active-search-bar" : ""}`}>
            <p
              className={"search-bar-icon"}
              onClick={() => {
                setActive(!active);
              }}
            >
              <img src={searchIcon} alt="search-icon" />
            </p>
            <input
              type="text"
              className={`search-bar-input ${active ? "active-search" : ""}`}
            />
          </div> */}
          <Link to="/login" className="reg-link">
            login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
