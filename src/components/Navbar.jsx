import "../style/components/navbar.css";
import React, { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { HiOutlineBars3 } from "react-icons/hi2";
import { LuGitCompare, LuHeart, LuShoppingCart } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";
import { RiSearch2Line } from "react-icons/ri";
import logo from "../image/Duck_Mascot_Logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import {updateTotalItems} from '../store/DataSlice'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const totalCount = useSelector((state) => state.data.cart.length);  
  const totalSave = useSelector((state) => state.data.save.length)

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleActive = (link) => {
    setActive(link);
    setMenuOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // const handleTotalCart = (product) =>{
  //   useDispatch(updateTotalItems(product));
  // }

  return (
    <nav className="navbar">
      <div className="container">
        <h1
          className="navbar-logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "1.8rem",
          }}
        >
          <img src={logo} alt="Logo" style={{ width: "5.3rem" }} />
          QuickBuy
        </h1>
        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <Link
              to="/deals"
              className={`navbar-link ${active === "deals" ? "active" : ""}`}
              onClick={() => handleActive("deals")}
            >
              Deals
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/"
              className={`navbar-link ${active === "home" ? "active" : ""}`}
              onClick={() => handleActive("home")}
            >
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/about"
              className={`navbar-link ${active === "about" ? "active" : ""}`}
              onClick={() => handleActive("about")}
            >
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/shop"
              className={`navbar-link ${active === "shop" ? "active" : ""}`}
              onClick={() => handleActive("shop")}
            >
              Shop
            </Link>
          </li>
          <li className="navbar-item dropdown">
            <Link
              className={`navbar-link ${active === "pages" ? "active" : ""}`}
              onClick={() => handleActive("pages")}
              onMouseEnter={toggleDropdown}
            >
              Pages
              <span
                className={`dropdown-arrow ${dropdownOpen ? "open" : ""}`}
              ></span>
            </Link>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <Link to="/account">account</Link>
                <Link to="/verifyOtp">verifyOtp</Link>
                <Link to="/checkout">checkout</Link>
                <Link to="/contact">contact</Link>
              </ul>
            )}
          </li>
          <li className="navbar-item">
            <Link
              to="/blog"
              className={`navbar-link ${active === "blog" ? "active" : ""}`}
              onClick={() => handleActive("blog")}
            >
              blog
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/contact"
              className={`navbar-link ${active === "contact" ? "active" : ""}`}
              onClick={() => handleActive("contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="search-nav">
          <label htmlFor="">
            <input
              type="search"
              name="search"
              placeholder="search product ..."
            />
            <RiSearch2Line />
          </label>
        </div>
        <div className="nav-icons">
          {/* <div className="icon">
            <span>2</span>
            <Link to={"/compare"} style={{ color: "black" }}>
              <LuGitCompare />
            </Link>
          </div> */}
          <div className="icon">
            <span>{totalSave}</span>
            <Link to={"/save"} style={{ color: "black" }}>
              <LuHeart />
            </Link>
          </div>
          <div className="icon">
            <span>{totalCount}</span>
            <Link to={"/cart"} style={{ color: "black" }}>
              <LuShoppingCart />
            </Link>
          </div>
          <Link
            className="icon account"
            style={{ textDecoration: "none", color: "black" }}
            to={"/account"}
          >
            <VscAccount />
            <p className="nav-account">Account</p>
          </Link>
        </div>
        <div className="menu-icon" onClick={handleMenuClick}>
          {menuOpen ? <LiaTimesSolid /> : <HiOutlineBars3 />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
