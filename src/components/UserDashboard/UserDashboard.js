import React from 'react';
import UserDetails from '../UserDetails/UserDetails';
import ContextManager from '../../context/context-manager';
import TokenService from '../../services/token-service';
import './UserDashboard.css';

export default class UserDashboard extends React.Component{
    componentDidMount(){
        if(TokenService.hasAuthToken()){
          Promise.all([
            this.getAllUsers(),
            this.getAllEvents(),
            this.getAllAttendees()
          ])
        }
      }
    
    render(){
        return(
            <ContextManager.Consumer>
                {(value) => {
/*                             const userId = parseInt(localStorage.getItem("userId"));
                            const users = value.users;
                            const user = users.find((user)=>{
                                return user.id === userId;
                            }); 
                    
                            let events;
                    
                            if(user.events.length === 0){
                                events = <tr><td>No Events Found</td></tr>;
                            }else{
                                events = user.events.map((eventId, i) => {
                                    const userEvent = value.events.find((event, i) => {
                                        return event.id === eventId;
                                    });
                                    events = <tr><td>{userEvent.title}</td><td>{userEvent.organizer}</td><td>{userEvent.purpose}</td><td>{userEvent.restaurant}</td><td>{userEvent.date}</td></tr>; 
                                    return events;
                                });
                            } */
                    return(
                        <div className="user-dashboard">
                            <UserDetails />
                            <section className="user-upcoming-events">
                                <table className="user-upcoming-events-table">
                                <thead><tr><th>Upcoming Events:</th></tr></thead>
                                    <tbody>
                                        <tr>
                                            <th>Title</th>
                                            <th>Organizer</th>
                                            <th>Purpose</th>
                                            <th>Restaurant</th>
                                            <th>Date</th>
                                        </tr>
                                        {/* events */}
                                    </tbody>
                                </table>
                            </section>
                        </div>
                    )
                }}
            </ContextManager.Consumer>
        )
    }
}