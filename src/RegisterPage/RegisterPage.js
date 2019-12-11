import React from 'react';
import './RegisterPage.css';

export default class RegisterPage extends React.Component{
    handleRegSubmit = e => {
        e.preventDefault();
        const {fname, lname, dob, gender, status, occupation, userSummary, email, password } = e.target;
        const newId = this.props.users.length + 1;
        const newUser = {
            id : newId,
            fname : fname.value,
            lname : lname.value,
            email : email.value,
            password : password.value,
            dob : dob.value.toString(),
            gender : gender.value,
            occupation : occupation.value,
            status : status.value,
            summary : userSummary.value,
            events : []
        }
        this.props.history.push(`/dashboard/${newUser.id}`);
        
        localStorage.setItem("authorized","yes");
        localStorage.setItem("userId", newUser.id);
        this.props.users.push(newUser);

        this.props.history.push(`/dashboard/${newUser.id}`);
    }
    render(){
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
                            <li><input type="radio" name="gender" id="male" value="male" /><label htmlFor="male">Male</label></li>
                            <li><input type="radio" name="gender" id="female" value="female" defaultChecked /><label htmlFor="female">Female</label></li>
                        </ul>
                    </fieldset>
                </div>
                <div>
                    <label htmlFor="status">Status:</label>
                    <select id="status">
                        <option value="none" name="status"></option>
                        <option value="single" name="status">Single</option>
                        <option value="married" name="status">Married</option>
                        <option value="divorced" name="status">Divorced</option>
                        <option value="separated" name="status">Separated</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="occupation">Occupation:</label>
                    <input type="text" id="occupation" name="occupation" placeholder="Lawyer" required/>
                </div>
                <div>
                    <label htmlFor="user-summary">Self Summary:</label>
                    <textarea id="user-summary" name="userSummary"></textarea>
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
        );
    }
}