import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";
import "./SideNav.css";
import Hamburger from "hamburger-react";
import SignIn from "../src/SignIn/SignIn"; // Import the SignIn component
import { Link, useNavigate } from 'react-router-dom';

const SideNav = ({ showSideNav, handleSideNavCloseClick }) => {
  const [activeLink, setActiveLink] = useState(null);
  const [showSignInModal, setShowSignInModal] = useState(false); // Add this state
  const navigate = useNavigate();

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  const handleSignInLinkClick = () => {
    setShowSignInModal(true);
  };
  const handleOpenAllAds = () =>{
    navigate('/AllAds');
  }
  return (
    <div className={`side-nav ${showSideNav ? "open" : ""}`}>
      <div className="logo_sidenav">
        <h3 style={{ color: "white" }}>LOGO</h3>
      </div>

      <Nav className="flex-column">
        <Button
          className="close-btn nv-sides"
          style={{ color: "white" }}
          onClick={handleSideNavCloseClick}
        >
          <div className="hamburger-icon close">
            <Hamburger
              style
              toggled={showSideNav}
              toggle={handleSideNavCloseClick}
              className="icon_ss"
            />
          </div>
        </Button>

        <Nav.Link
          className="nv-sides"
          style={{
            marginTop: 40,
            color: activeLink === 1 ? "#fbd408" : "#adadad",
          }}
          onClick={() => {
            handleLinkClick(1);
            handleOpenAllAds(); // Call your handleOpenAllAds function here
          }}
        >
          <i
            className={`bi bi-bookmark-fill ${
              activeLink === 1 ? "active" : ""
            }`}
          ></i>{" "}
          All Ads
        </Nav.Link>

        <hr style={{ color: "white" }} />

        <Nav.Link
          className="nv-sides"
          style={{ color: activeLink === 2 ? "#fbd408" : "#adadad" }}
          onClick={() => {
            handleLinkClick(2);
            handleSignInLinkClick(); // Open the sign-in modal
          }}
        >
          <i
            className={`bi bi-person-fill ${activeLink === 2 ? "active" : ""}`}
          ></i>{" "}
          Login
        </Nav.Link>
        <hr style={{ color: "white" }} />

        <Nav.Link
          className="nv-sides"
          href="/FAQ"
          style={{
            color: activeLink === 3 ? "#fbd408" : "#adadad",
            marginBottom: 10,
          }}
          onClick={() => handleLinkClick(3)}
        >
          <i
            className={`bi bi-exclamation-circle-fill ${
              activeLink === 3 ? "active" : ""
            }`}
          ></i>{" "}
          FAQ
        </Nav.Link>
        <Nav.Link
          className="nv-sides"
          href="/link3"
          style={{
            color: activeLink === 3 ? "#fbd408" : "#adadad",
            marginBottom: 10,
          }}
          onClick={() => handleLinkClick(4)}
        >
          <i
            className={`bi bi-cash-coin ${activeLink === 3 ? "active" : ""}`}
          ></i>{" "}
          How to sell fast?
        </Nav.Link>
        <Nav.Link
          className="nv-sides"
          href="/link3"
          style={{ color: activeLink === 3 ? "#fbd408" : "#adadad" }}
          onClick={() => handleLinkClick(5)}
        >
          <i
            className={`bi bi-patch-check-fill ${
              activeLink === 3 ? "active" : ""
            }`}
          ></i>{" "}
          Stay safe?
        </Nav.Link>
      </Nav>

      <SignIn
        show={showSignInModal}
        handleClose={() => setShowSignInModal(false)}
      />
    </div>
  );
};

export default SideNav;
