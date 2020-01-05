import React from 'react';
import './RegisterPage.css';
import ContextManager from '../../context/context-manager';
import AuthApiService from '../../services/auth-api-service';
//import AuthApiService from '../../services/auth-api-service';
//import TokenService from '../../services/token-service';

export default class RegisterPage extends React.Component{
    static contextType = ContextManager;
    
        handleRegSubmit = (e) => {
            e.preventDefault();
            this.setState({ error: null })
            const { fname, lname, dob, gender, marital_status, occupation, bio, email, password, passwordVerify } = e.target
            const { history } = this.props;
            
            let newUser = {
                fname: fname.value,
                lname: lname.value,
                dob: dob.value,
                gender: gender.value,
                marital_status: marital_status.value,
                occupation: occupation.value,
                bio: bio.value,
                email: email.value,
                password: password.value
            }

            if(password.value === passwordVerify.value){
                AuthApiService.postUser(newUser)
                .then((user) => {
                    fname.value = '';
                    lname.value = '';
                    dob.value = '';
                    gender.value = '';
                    marital_status.value = '';
                    occupation.value = '';
                    bio.value = '';
                    email.value = '';
                    password.value = '';
                    this.context.clearErrorMessage();
                    history.push(`/registered`);
                })
                .catch(res => {
                    //console.dir(res);
                    this.context.updateErrorMessage('Oops: '+ res.error)
                    this.context.scrollToErrorMessage();
                })
            } else {
                this.context.updateErrorMessage('Password must match')
                this.context.scrollToErrorMessage();
            }
        }

        componentWillUnmount(){
            this.context.clearErrorMessage();
        }

    render(){
        return(
            <form id="register-form" onSubmit={this.handleRegSubmit}>
                <div className="info">*Required Fields</div>
                <div className="error-message">{!!this.context.errorMessage && this.context.errorMessage}</div>
                <div>
                    <label htmlFor="fname">*First Name:</label>
                    <input type="text" id="fname" placeholder="ex. Ken" name="fname" required />
                </div>
                <div>
                    <label htmlFor="lname">*Last Name:</label>
                    <input type="text" id="lname" placeholder="ex. Adams" name="lname" required/>
                </div>
                <div>
                    <label htmlFor="dob">*Birth Date:</label>
                    <input type="date" id="dob" name="dob" required/>
                </div>
                <div>
                    <fieldset className="radiogroup">
                        <legend>*Gender</legend>
                        <ul className="radio">
                            <li><input type="radio" name="gender" id="male" value="Male" /><label htmlFor="male">Male</label></li>
                            <li><input type="radio" name="gender" id="female" value="Female" defaultChecked /><label htmlFor="female">Female</label></li>
                        </ul>
                    </fieldset>
                </div>
                <div>
                    <label htmlFor="marital_status">*Marital Status:</label>
                    <select id="marital_status">
                        <option value="none" name="marital_status"></option>
                        <option value="Single" name="marital_status">Single</option>
                        <option value="Married" name="marital_status">Married</option>
                        <option value="Divorced" name="marital_status">Divorced</option>
                        <option value="Separated" name="marital_status">Separated</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="occupation">*Occupation:</label>
                    <input type="text" id="occupation" name="occupation" placeholder="ex. Lawyer" required/>
                </div>
                <div>
                    <label htmlFor="user-summary">Bio:</label>
                    <textarea id="user-summary" name="bio"></textarea>
                </div>
                <div>
                    <label htmlFor="email">*Email:</label>
                    <input type="email" id="email" name="email" placeholder="ex. myemailaddress@email.com" required />
                </div>
                <div>
                    <div><p className="info info-password">Your password must contain 1 number, 1 capital letter, 1 special character (!@#$%^&amp;) and it must be at least 8 characters long.</p></div>
                    <label htmlFor="password">*Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    <label htmlFor="passwordVerify">*Verify Password:</label>
                    <input type="password" id="passwordVerify" name="passwordVerify" required />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>    
        </form>
        );
    }
}