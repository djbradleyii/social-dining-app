import React from 'react';
import { withRouter } from 'react-router-dom';
import ContextManager from '../../context/context-manager';
import ActiveUserService from '../../services/activeuser-service';

class UserDetails extends React.Component{
    static contextType = ContextManager;
    editUser = (e, user_id) => {
        const { history } = this.props;
        history.push(`/edit/user/${user_id}`)
    }

    render(){
        return(
            <ContextManager.Consumer>
                {(value) => {

                    let activeuser = null;
                    let user = {};
                    let nameDisplay = '';

                    if(ActiveUserService.hasUserData()){
                        activeuser = ActiveUserService.getUserData();
                        user = activeuser.user;
                        nameDisplay = user.fname + ' ' + user.lname.charAt(0) + '.';
                         user.fullName = nameDisplay;
                    }

                        return(
                            <section className="user-details">
                                <table className="user-details-table">
                                    <thead><tr><th>Details:</th></tr></thead>
                                    <tbody>
                                        <tr>
                                            <td>Name:</td><td>{ user.fullName }</td>
                                        </tr>
                                        <tr>
                                            <td>Email address:</td><td>{user.email}</td>
                                        </tr>
                                        <tr>
                                            <td>Occupation:</td><td>{user.occupation}</td>
                                        </tr>
                                        <tr>
                                            <td>Status:</td><td>{user.marital_status}</td>
                                        </tr>
                                        <tr>
                                            <td>Bio:</td><td>{user.bio}</td>
                                        </tr>
                                        <tr>
                                            <td><div className="button-group"><div className="button-container"><button onClick={(e) => this.editUser(e, user.id)}>Edit</button></div></div></td>
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

export default withRouter(UserDetails);