import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav(props){
    function clearLocalStorage(){
        localStorage.removeItem("authorized");
        localStorage.removeItem("userId");
        localStorage.removeItem("eventId");
        props.history.push('/');
    }

    function getUserId(){
        return localStorage.getItem("userId");
    }

    function getAuthorizationStatus(){
        return localStorage.getItem("authorized");
    }
    function displayNav(){
        const authorizationStatus = getAuthorizationStatus();
        if(authorizationStatus === 'yes'){
            const userId = parseInt(getUserId());
            return(
                <nav role="navigation">
                    <Link to={`/dashboard/${userId}`}>Dashboard</Link>
                    <Link to='/event'>Add Event</Link>
                    <Link to='/search'>Search</Link>
                    <Link to='/signout' onClick={clearLocalStorage}>Sign Out</Link>
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