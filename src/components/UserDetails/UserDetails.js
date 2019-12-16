import React from 'react';
import './UserDetails.css';
import ContextManager from '../../context/context-manager';

class UserDetails extends React.Component{
    render(){
        return(
            <ContextManager.Consumer>
                {(value) => {
/*                      const user = value.user;
                     function fullName(user){
                         return `${user.fname} ${user.lname}`;
                     }
                 
                     function encryptEmail(user){
                         let email = user.email;
                         let indexOfAt = email.indexOf('@');
                         let sliced = email.slice(1,indexOfAt-1);
                         let regx = new RegExp(sliced,'gi');
                         let hiddenEmail = email.replace(regx,'*'.repeat(sliced.length));
                         return hiddenEmail;
                     } */
                    return(
                        <section className="user-details">
                            <table className="user-details-table">
                                <thead><tr><th>Details:</th></tr></thead>
                                <tbody>
                                    <tr>
                                        <td>Name:</td><td>{/* fullName(user) */}</td>
                                    </tr>
                                    <tr>
                                        <td>Email address:</td><td>{/* encryptEmail(user) */}</td>
                                    </tr>
                                    <tr>
                                        <td>Occupation:</td><td>{/* user.occupation */}</td>
                                    </tr>
                                    <tr>
                                        <td>Status:</td><td>{/* user.status */}</td>
                                    </tr>
                                    <tr>
                                        <td>Summary:</td><td>{/* user.summary */}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    )
                }}
            </ContextManager.Consumer>
        )
    }
}

export default UserDetails;