import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import TokenService from '../../services/token-service';
import ActiveUserService from '../../services/activeuser-service';

function Nav(props) {
  function handleLogoutClick() {
    TokenService.clearAuthToken();
    ActiveUserService.clearUserData();
    props.history.push('/logout');
  }

  function displayNav() {
    const authorizationStatus = TokenService.hasAuthToken();
    if (authorizationStatus) {
      return (
        <nav role="navigation">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/event">Add Event</Link>
          <Link to="/search">Search</Link>
          <Link to="/logout" onClick={handleLogoutClick}>Sign Out</Link>
        </nav>
      );
    }
    return (
      <nav role="navigation" className="not-logged-in">
        <Link to="/signin" className="link-sign-in">Sign In</Link>
        <Link to="/register" className="link-register">Register</Link>
      </nav>
    );
  }
  return (
    displayNav()
  );
}

export default Nav;
