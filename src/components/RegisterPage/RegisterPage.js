import React from 'react';
import './RegisterPage.css';
import ContextManager from '../../context/context-manager';
import AuthApiService from '../../services/auth-api-service';

export default class RegisterPage extends React.Component{
    static defaultProps = {
        onRegistrationSuccess: () => {}
      }
    
    
     handleRegistrationSuccess = (user) => {
         console.log('I got here');
        //const { location, history } = this.props;
        console.log('>> this.props >>', this.props);
        console.log(user);
       /*  const { history } = this.props;
        history.push('/signin'); */
     }

     handleRegSubmit = e => {
        e.preventDefault();
        const {fname, lname, dob, gender, marital_status, occupation, bio, email, password } = e.target;

        const newUser = {
            fname : fname.value,
            lname : lname.value,
            email : email.value,
            password : password.value,
            dob : dob.value.toString(),
            gender : gender.value,
            occupation : occupation.value,
            marital_status : marital_status.value,
            bio : bio.value,
        }

        AuthApiService.postUser(newUser)
        .then(user => {
            console.log(user);
            fname.value = ''
            lname.value = ''
            email.value = ''
            password.value = ''
            dob.value = ''
            gender.value = ''
            occupation.value = ''
            marital_status.value = ''
            bio.value = ''

            this.handleRegistrationSuccess();
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    render(){
        return(
            <ContextManager.Consumer>
                {(value) => {
                    return(
                        <form id="register-form" onSubmit={this.handleRegSubmit}>
                            <div>
                                <label htmlFor="fname">First Name:</label>
                                <input type="text" id="fname" placeholder="Ken" name="fname" required />
                            </div>
                            <div>
                                <label htmlFor="lname">Last Name:</label>
                                <input type="text" id="lname" placeholder="Adams" name="lname" required/>
                            </div>
                            <div>
                                <label htmlFor="dob">Birth Date:</label>
                                <input type="date" id="dob" name="dob" required/>
                            </div>
                            <div>
                                <fieldset className="radiogroup">
                                    <legend>Gender</legend>
                                    <ul className="radio">
                                        <li><input type="radio" name="gender" id="male" value="Male" /><label htmlFor="male">Male</label></li>
                                        <li><input type="radio" name="gender" id="Female" value="female" defaultChecked /><label htmlFor="female">Female</label></li>
                                    </ul>
                                </fieldset>
                            </div>
                            <div>
                                <label htmlFor="marital_status">Status:</label>
                                <select id="marital_status">
                                    <option value="none" name="marital_status"></option>
                                    <option value="Single" name="marital_status">Single</option>
                                    <option value="Married" name="marital_status">Married</option>
                                    <option value="Divorced" name="marital_status">Divorced</option>
                                    <option value="Separated" name="marital_status">Separated</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="occupation">Occupation:</label>
                                <input type="text" id="occupation" name="occupation" placeholder="Lawyer" required/>
                            </div>
                            <div>
                                <label htmlFor="user-summary">Self Summary:</label>
                                <textarea id="user-summary" name="bio"></textarea>
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" placeholder="myemailaddress@email.com" required />
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" required />
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>    
                    </form>
                    )
                }}
            </ContextManager.Consumer>
        );
    }
}