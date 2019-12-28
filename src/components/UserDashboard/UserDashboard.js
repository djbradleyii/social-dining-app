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
        let desiredTextLength = 10;
        if(text.length > desiredTextLength){
            text = text.substring(0, desiredTextLength) + "...";
        }
        return text;
    }

    render(){
        return(
            <ContextManager.Consumer>
                {(value) => {
                    let activeuser = ActiveUserService.getUserData();
                    let events = activeuser.events;
                    let user = activeuser.user;
                    let eventsList = null;

                    if(events.length === 0){
                        eventsList = <tr><td>No Events Found</td></tr>;
                    } else { 
                                eventsList = events.map((event, i) => {
                                    let populateOrganizer = null;
                                    let actionButton = null;
                                    if(event.organizer_id === user.id){
                                        populateOrganizer = 'Me';
                                        actionButton = <button onClick={(e) => this.deleteEvent(e, event.event_id)}>Delete</button>;
                                    } else {
                                        let eventId = event.event_id;
                                        populateOrganizer = <Link to={`/infoPage/${event.event_id}`}>{event.organizer}</Link>;
                                        actionButton = <button onClick={(e) => this.removeRSVP(e, eventId)}>Remove RSVP</button>
                                    } 
                                    return <tr key={i}><td><Link to={`/event/${event.event_id}`}>{this.trimText(event.title)}</Link></td><td>{this.trimText(populateOrganizer)}</td><td>{this.trimText(event.event_purpose)}</td><td>{this.trimText(event.restaurant)}</td><td>{moment(event.date).format('MM/DD/YY')}</td><td>{actionButton}</td></tr>;
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
                                            <th>Purpose</th>
                                            <th>Restaurant</th>
                                            <th>Date</th>
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