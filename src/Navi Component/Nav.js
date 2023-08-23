import React, { useState, useEffect } from 'react';
import { Navbar, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import './Nav.css';
import SideNav from '../SideNav';
import Search_bar from '../Search_bar/Search_bar';
import Hamburger from 'hamburger-react';
import CreateAc from '../Create Account Component/CreateAc';
import PostAdd from '../Main_Pages/Post_add'; // Step 2: Import the PostAdd component

import { useNavigate, useLocation } from 'react-router-dom';
import Sign_In from '../SignIn/SignIn';

const NavbarComponent = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [showCreateAc, setShowCreateAc] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [showPostAdd, setShowPostAdd] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const navigate = useNavigate();
  const currentLocation = useLocation();

  const handleMenuButtonClick = () => {
    setShowSideNav(!showSideNav);
  };

  const handleCreateAccountClick = () => {
    setShowCreateAc(true);
  };

  const handlePostButtonClick = () => {
    setShowPostAdd(!showPostAdd);
    navigate('/PostAdd');
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleSideNavCloseClick = () => {
    setShowSideNav(false);
  };

  const handleCloseCreateAc = () => {
    setShowCreateAc(false);
  };
  const handleLoginBtn = () => {
    setShowLoginPopup(true);
  };
  const handleAllAdsButtonClick = () => {
    navigate('/Allads');
    setIsButtonActive(true); // Set the button as active when clicked
  };

  // set all ads button another page deactive
  useEffect(() => {
    setIsButtonActive(currentLocation.pathname === '/Allads');
  }, [currentLocation.pathname]);
  

  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-primary ">
        <div className="container col-md-7">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              variant=""
              className="menu-btn d-lg-none ml-3 float-lg-start"
              style={{ color: 'white' }}
              onClick={handleMenuButtonClick}
            >
              <FaBars />
            </Button>
            <a className="navbar-brand" href="/" style={{ color: 'white' }}>
              Your Logo
            </a>
            <Button
        style={{ fontSize: 11, backgroundColor: isButtonActive ? '#023770' : 'initial',border:"none",borderRadius:50 }} // Adjust styling based on active state
        onClick={handleAllAdsButtonClick}
        id='all_ads_btns'
        className={isButtonActive ? 'active' : ''}
      >
        <i className="bi bi-border-all"></i> All Ads
      </Button>
          </div>

          <div className="ml-auto btns">
            {/* Login Button */}
            <button id='lg_btn12' className="btn btn-outline-light ml-2 " onClick={handleLoginBtn} style={{borderRadius:50,marginRight:10}}><i class="bi bi-door-open-fill"></i> Sign In</button>
            <button
              className="btn btn-primary creat_acc"
              id="create_acc_btn"
              onClick={handleCreateAccountClick}
            >
              <i className="bi bi-people-fill" style={{ marginRight: '10px' }}></i>
              Create Account
            </button>

            <button
              className="btn btn-primary"
              id="post_btn"
              onClick={handlePostButtonClick}
            >
              <i className="bi bi-stickies-fill" style={{ marginRight: '10px' }}></i>
              POST YOUR AD FREE
            </button>

            
          </div>
        </div>
      </Navbar>

      {/* Search Bar */}
      {/* Render your Search_bar component here */}

      {/* SideNav Bar */}
      <SideNav
        showSideNav={showSideNav}
        handleSideNavCloseClick={handleSideNavCloseClick}
      />

      {/* CreateAc Popup Form */}
      {showCreateAc && <CreateAc show={showCreateAc} handleClose={handleCloseCreateAc} />}
      {/* Sign In Component */}
   
      {showLoginPopup && <Sign_In show={showLoginPopup} handleClose={() => setShowLoginPopup(false)} />}


      {/* PostAdd Popup Form */}


    </>
  );
};

export default NavbarComponent;
