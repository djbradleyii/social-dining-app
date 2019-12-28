import React from 'react';
import './EditUser.css';
import ContextManager from '../../context/context-manager';
import UsersApiService from '../../services/users-api-service';
import ActiveUserService from '../../services/activeuser-service';
import TokenService from '../../services/token-service';

export default class RegisterPage extends React.Component{
    static contextType = ContextManager;
        handleRegSubmit = (e) => {
            e.preventDefault();
            const { fname, lname, marital_status, occupation, bio, gender } = e.target
            const { history } = this.props;
            let userUpdates = {
                fname: fname.value,
                lname: lname.value,
                gender: gender.value,
                marital_status: marital_status.value,
                occupation: occupation.value,
                bio: bio.value,
            }

            let activeuser = ActiveUserService.getUserData();

            if(TokenService.hasAuthToken() && activeuser){
                UsersApiService.updateUserById(userUpdates)
                .then((user) => {
                    fname.value = '';
                    lname.value = '';
                    gender.value = '';
                    marital_status.value = '';
                    occupation.value = '';
                    bio.value = '';
                    this.context.getAllEventsForUser();
                    history.push(`/dashboard`);
                })
            }
        }

    render(){
        const userData = ActiveUserService.getUserData().user;
        return(
            <form id="register-form" onSubmit={this.handleRegSubmit}>
                <div>
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" id="fname" placeholder="Ken" name="fname" required defaultValue={userData.fname}/>
                </div>
                <div>
                    <label htmlFor="lname">Last Name:</label>
                    <input type="text" id="lname" placeholder="Adams" name="lname" required defaultValue={userData.lname}/>
                </div>
                <div>
                    <fieldset className="radiogroup">
                        <legend>Gender</legend>
                        <ul className="radio">
                            <li><input type="radio" name="gender" id="male" value="Male" defaultChecked={userData.gender === 'Male'} /><label htmlFor="male">Male</label></li>
                            <li><input type="radio" name="gender" id="Female" value="Female" defaultChecked={userData.gender === 'Female'} /><label htmlFor="female">Female</label></li>
                        </ul>
                    </fieldset>
                </div>
                <div>
                    <label htmlFor="marital_status">Status:</label>
                    <select id="marital_status" defaultValue={userData.marital_status}>
                        <option value="none" name="marital_status" ></option>
                        <option value="Single" name="marital_status" >Single</option>
                        <option value="Married" name="marital_status" >Married</option>
                        <option value="Divorced" name="marital_status" >Divorced</option>
                        <option value="Separated" name="marital_status" >Separated</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="occupation">Occupation:</label>
                    <input type="text" id="occupation" name="occupation" placeholder="Lawyer" required defaultValue={userData.occupation}/>
                </div>
                <div>
                    <label htmlFor="user-summary">Bio:</label>
                    <textarea id="user-summary" name="bio" defaultValue={userData.bio}></textarea>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>    
        </form>
        );
    }
}