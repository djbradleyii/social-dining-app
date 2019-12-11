import React from 'react';
import './SignInPage.css';

export default class SignInPage extends React.Component{

    render(){
        return(
            <form onSubmit={this.formSubmit} id="signin-form">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="myemail@gmail.com" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div>
                    <button type="submit">Sign In</button>
                </div>       
            </form>
        );
    }
}