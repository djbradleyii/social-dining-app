import React from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import './SignInPage.css';

export default class SignInPage extends React.Component{
    handleSubmitJwtAuth = e => {
       e.preventDefault()
       this.setState({ error: null })
       const { email, password } = e.target
    
       AuthApiService.postLogin({
         email: email.value,
         password: password.value,
       })
         .then(res => {
            //const { history } = this.props;
            email.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken);
            
            //history.push(`/dashboard/${res.user_id}`); 
         })
         .catch(res => {
           this.setState({ error: res.error })
         })

    }
    render(){
        return(
            <form onSubmit={this.handleSubmitJwtAuth} id="signin-form">
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