import React from 'react';
import './SignInPage.css';

export default class SignInPage extends React.Component{
    
    formSubmit = e => {
        e.preventDefault();
        const { email, password } = e.target;
        const { users } = this.props;

        const emailFound = users.find((user, i) => {
            return user.email.toLowerCase() === email.value.toLowerCase();
        });

        const passwordFound = users.find((user, i) => {
            return user.password.toLowerCase() === password.value.toLowerCase();
        });

        if(!!emailFound && !!passwordFound){
            const user = users.find((user) => {
                return user.email.toLowerCase() === email.value.toLowerCase()
            });
            localStorage.setItem("authorized","yes");
            localStorage.setItem("userId", user.id);
            this.props.history.push(`/dashboard/${user.id}`);
        }else{
            localStorage.setItem("authorized", "no");
            email.value = '';
            password.value = '';
        }
    }
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