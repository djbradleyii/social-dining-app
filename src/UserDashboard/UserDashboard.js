import React from 'react';
import UserDetails from '../UserDetails/UserDetails';
import EVENTS from '../events';
import './UserDashboard.css';

export default class UserDashboard extends React.Component{
    render(){
        return(
            <div className="user-dashboard">
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