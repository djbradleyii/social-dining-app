import React from 'react';
import UserDetails from '../UserDetails/UserDetails';
import EVENTS from '../events';
import './UserDashboard.css';

export default class UserDashboard extends React.Component{
    render(){
        const userId = parseInt(localStorage.getItem("userId"));
        const users = this.props.users;
        const user = users.find((user)=>{
            return user.id === userId;
        }); 

        let events;

        if(user.events.length === 0){
            events = <tr><td>No Events Found</td></tr>;
        }else{
            events = user.events.map((eventId, i) => {
                const userEvent = EVENTS.find((event, i) => {
                    return event.id === eventId;
                });
                events = <tr><td>{userEvent.title}</td><td>{userEvent.organizer}</td><td>{userEvent.purpose}</td><td>{userEvent.restaurant}</td><td>{userEvent.date}</td></tr>; 
                return events;
            });
        }
        return(
            <div className="user-dashboard">
                <UserDetails user={user} events={EVENTS} />
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
                            {events}
                        </tbody>
                    </table>
                </section>
            </div>
        );
    }
}