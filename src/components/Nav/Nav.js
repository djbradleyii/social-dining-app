import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import TokenService from '../../services/token-service';

function Nav(props){
    function handleLogoutClick(){
        TokenService.clearAuthToken();
        props.history.push('/');
    }

    function displayNav(){
        const authorizationStatus = TokenService.hasAuthToken();
        if(authorizationStatus){
            const userId = 1;
            return(
                <nav role="navigation">
                    <Link to={`/dashboard/${userId}`}>Dashboard</Link>
                    <Link to='/event'>Add Event</Link>
                    <Link to='/search'>Search</Link>
                    <Link to='/signout' onClick={handleLogoutClick}>Sign Out</Link>
                </nav>
            );
        }else{
            return(
                <nav role="navigation">
                    <Link to='/signin' >Sign In</Link>
                    <Link to='/register' >Register</Link>
                </nav>
            );
        }
    }

    return(
        displayNav()
    );
}

export default Nav;