import React from 'react';
import { withRouter } from 'react-router-dom';
import './SelectedUserDetails.css'
import ContextManager from '../../context/context-manager';
import UsersApiService from '../../services/users-api-service';

class SelectedUserDetails extends React.Component{
    static contextType = ContextManager;
    state = {
        userData: {}
    }

    goBack = () => {
        const { history } = this.props;
        history.goBack(-1);
    }

    componentDidMount(){
        const { match } = this.props;
        const userId = match.params.userId;
        UsersApiService.getUserById(userId)
        .then((userData) => {
            this.setState({
                userData
            })
        })
    }

    render(){
        return(   
            <section className="selected-user-details">
                <table className="selected-user-table">
                    <thead><tr><th>Details:</th></tr></thead>
                    <tbody>
                        <tr>
                            <td>Name:</td><td>{!!this.state.userData && this.state.userData.fname}</td>
                        </tr>
                        <tr>
                            <td>Occupation:</td><td>{!!this.state.userData && this.state.userData.occupation}</td>
                        </tr>
                        <tr>
                            <td>Status:</td><td>{!!this.state.userData && this.state.userData.marital_status}</td>
                        </tr>
                        <tr>
                            <td>Bio:</td><td>{!!this.state.userData && this.state.userData.bio}</td>
                        </tr>
                        <tr>
                            <td><div className="button-group"><div className="button-container"><button onClick={() => this.goBack()}>Back</button></div></div></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}

export default withRouter(SelectedUserDetails);