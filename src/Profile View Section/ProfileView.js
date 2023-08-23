import React, { useState, useEffect } from 'react';
import './ProfileView.css';

const ProfileView = () => {
  const [isAccountVisible, setAccountVisible] = useState(true);
  const [isPhoneNumberVisible, setPhoneNumberVisible] = useState(false);
  const [isSettingsVisible, setSettingsVisible] = useState(false);
  const [isFavoritesVisible, setFavoritesVisible] = useState(false);
  const [isMembershipVisible, setMembershipVisible] = useState(false);
  const [headerText, setHeaderText] = useState('Profile Information');

  const handleLinkClick = (section, header) => {
    setAccountVisible(section === 'account');
    setPhoneNumberVisible(section === 'phoneNumbers');
    setSettingsVisible(section === 'settings');
    setFavoritesVisible(section === 'favorites');
    setMembershipVisible(section === 'membership');
    setHeaderText(header);
  };

  // Set default section to "Account" on component mount
  useEffect(() => {
    setAccountVisible(true);
  }, []);

  return (
    <div className="container mt-5 col-md-7 pro_view" >
      <div className="row" style={{marginTop:100}}>
        <div className="col-md-3">
          {/* Profile Sidebar */}
          <div className="list-group" style={{fontSize:12}}>
            {/* Add an onClick event to the links */}
            <a href="#" className={`list-group-item list-group-item-action ${isAccountVisible ? 'active' : ''}`} onClick={() => handleLinkClick('account', 'Account')}>
              Account
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${isPhoneNumberVisible ? 'active' : ''}`} onClick={() => handleLinkClick('phoneNumbers', 'Phone Numbers')}>
              Phone Numbers
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${isSettingsVisible ? 'active' : ''}`} onClick={() => handleLinkClick('settings', 'Settings')}>
              Settings
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${isFavoritesVisible ? 'active' : ''}`} onClick={() => handleLinkClick('favorites', 'Favorites')}>
              Favorites
            </a>
            <a href="#" className={`list-group-item list-group-item-action ${isMembershipVisible ? 'active' : ''}`} onClick={() => handleLinkClick('membership', 'My Membership')}>
              My Membership
            </a>
          </div>
        </div>
        <div className="col-md-9 content_profile" style={{fontSize:12}}>
          {/* Profile Content */}
          <div className="card">
            <div className="card-header">
              <h5>{headerText}</h5>
            </div>
            <div className="card-body">
              {/* Profile content goes here */}
              {/* For example: */}
              {isAccountVisible && (
                <>
                  <p>Name: John Doe</p>
                  <p>Email: john.doe@example.com</p>
                  <p>Mobile Number: (Your mobile number here)</p>
                  {/* Add more profile information as needed */}
                </>
              )}
              {/* Conditionally render the "Phone Numbers" section based on the state */}
              {isPhoneNumberVisible && (
                <>
                  <p>Phone Numbers Content</p>
                  {/* Add content for phone numbers here */}
                </>
              )}
              {/* Conditionally render the "Settings" section based on the state */}
              {isSettingsVisible && (
                <>
                  <p>Settings Content</p>
                  {/* Add content for settings here */}
                </>
              )}
              {/* Conditionally render the "Favorites" section based on the state */}
              {isFavoritesVisible && (
                <>
                  <p>Favorites Content</p>
                  {/* Add content for favorites here */}
                </>
              )}
              {/* Conditionally render the "My Membership" section based on the state */}
              {isMembershipVisible && (
                <>
                  <p>My Membership Content</p>
                  {/* Add content for membership here */}
                </>
              )}
            </div>
          </div>

          {/* Other sections go here */}
          {/* ... */}

        </div>
      </div>
    </div>
  );
};

export default ProfileView;
