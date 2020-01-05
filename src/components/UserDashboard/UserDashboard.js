import React from 'react';
import UserDetails from '../UserDetails/UserDetails';
import { Link } from 'react-router-dom';
import ContextManager from '../../context/context-manager';
import EventsApiService from '../../services/events-api-service';
import './UserDashboard.css';
import moment from 'moment';
import ActiveUserService from '../../services/activeuser-service';
import AttendeesApiService from '../../services/attendees-api-service';

export default class UserDashboard extends React.Component{
    static contextType = ContextManager;

    deleteEvent = (e, event_id) => {
        EventsApiService.deleteEvent(event_id)
        .then((res) => {
            this.context.getAllEventsForUser();
        })
    }
    
    removeRSVP = (e, event_id) => {
        AttendeesApiService.deleteAttendee(event_id)
        .then((res) => {
            this.context.getSelectedEvent(event_id)
            this.context.getAllEventsForUser();
        })
    }

    trimText = (text) => {
        let desiredTextLength = 6;
        if(text.length > desiredTextLength){
            text = text.substring(0, desiredTextLength) + "...";
        }
        return text;
    }

    render(){
        return(
            <ContextManager.Consumer>
                {(value) => {
                    let activeuser = null;
                    let events = [];
                    let user = {};
                    let eventsList = null;

                    if(ActiveUserService.hasUserData()){
                        activeuser = ActiveUserService.getUserData();
                        events = activeuser.events;
                        user = activeuser.user;
                    }

                    if(events.length === 0){
                        eventsList = <tr><td>No Events Found</td></tr>;
                    } else { 
                                eventsList = events.map((event, i) => {
                                    let populateOrganizer = null;
                                    let actionButton = null;
                                    if(event.organizer_id === user.id){
                                        populateOrganizer = 'Me';
                                        actionButton = <button className="action-btn" onClick={(e) => this.deleteEvent(e, event.event_id)}>Delete</button>;
                                    } else {
                                        let eventId = event.event_id;
                                        populateOrganizer = <Link to={`/info/${event.organizer_id}`}>{event.organizer}</Link>;
                                        actionButton = <button className="action-btn" onClick={(e) => this.removeRSVP(e, eventId)}>Remove RSVP</button>
                                    } 
                                    return <tr key={i}><td><Link to={`/event/${event.event_id}`}>{this.trimText(event.title)}</Link></td><td>{this.trimText(populateOrganizer)}</td><td className="m-hide">{this.trimText(event.event_purpose)}</td><td>{this.trimText(event.restaurant)}</td><td className="m-hide">{moment(event.date).format('MM/DD/YY')}</td><td>{actionButton}</td></tr>;
                                });
                            }
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
                                            <th className="m-hide">Purpose</th>
                                            <th>Restaurant</th>
                                            <th className="m-hide">Date</th>
                                            <th>Action</th>
                                        </tr>
                                        { eventsList }
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