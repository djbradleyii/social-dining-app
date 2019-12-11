import React from 'react';
import Nav from '../Nav/Nav.js';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component{
    render(){
        return(
            <header>
                <Link to='/' className="main-header"><h1>Social Dining App</h1></Link>
                <Nav users={this.props.users} history={this.props.history}/>
            </header>
        );
    }
}
