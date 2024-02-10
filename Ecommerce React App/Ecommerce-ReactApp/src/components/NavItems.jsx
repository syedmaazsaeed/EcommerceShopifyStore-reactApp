import { useContext, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { AuthContext } from "../contexts/AuthProvider";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // authinfo
  const { user } = useContext(AuthContext);
  // console.log(user)
  // Add Event Listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      stHeaderFixed(false);
    }
  });
  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* Header top starts from here  */}
      <div className={`header-top d-md-none ${socialToggle ? "Open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-2">
              <span>Create Account</span>
            </Link>
            <Link to="/login"></Link>
          </div>
        </div>
      </div>

      {/* Header Bottom Start  */}

      <div className="header-bottom bg-dark">
        <div className="container">
          <div className="header-wrapper">
            {/* Logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>

            {/* Menu Area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/" className="text-light">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop" className="text-light">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-light">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-light">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-light">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Sign In and Login  In */}
              <Link
                to="/sign-up"
                className="lab-btn me-3 d-none d-md-block bg-danger text-light"
              >
                Register Account
              </Link>
              <Link
                to="/login"
                className=" lab-btn me-2 d-none d-md-block text-bg-success"
              >
                Log In
              </Link>

              {/* Menu Toggler  */}
              <div
                onClick={() => {
                  setMenuToggle(!menuToggle);
                }}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* Social Toggle */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
