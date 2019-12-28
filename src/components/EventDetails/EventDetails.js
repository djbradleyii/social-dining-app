import React from 'react';
import { withRouter } from 'react-router-dom';
import './EventDetails.css';
import ContextManager from '../../context/context-manager';
import EventsApiService from '../../services/events-api-service';
import ActiveUserService from '../../services/activeuser-service';
import AttendeesApiService from '../../services/attendees-api-service';
import moment from 'moment';

class EventDetails extends React.Component{
    static contextType = ContextManager;

    deleteEvent = (e, event_id) => {
        const { history } = this.props;
        EventsApiService.deleteEvent(event_id)
        .then((res) => {
            this.context.getAllEventsForUser();
            history.push('/dashboard');
        }) 
    }
    
    editEvent = (e, event_id) => {
        const { history } = this.props;
        EventsApiService.getEventById(event_id)
        .then((event) => {
            window.localStorage.setItem('event', JSON.stringify(event))
        })
        history.push(`/edit/event/${event_id}`)
    }


    addRSVP = (e, event_id) => {
        const newAttendee = {
            event_id
        }
        AttendeesApiService.postAttendee(newAttendee)
        .then((attendee) => {
            this.context.getSelectedEvent(event_id);
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

    componentDidMount(){
        if(this.context.events !== 0){
            const { match } = this.props;
            const event_id = match.params.eventId;
            EventsApiService.getAllAttendeesByEventId(parseInt(event_id))
            .then(event => {
                this.context.getSelectedEvent(event_id);
            })            
        }
    }

    render(){
        return(
            <ContextManager.Consumer>
                {(value) => {  
                    let buttons = null;
                    let userId = null;
                    let selectedEvent = null;
                    let isOwnerOfEvent = null;
                    let activeuser = ActiveUserService.getUserData();
                    let user = activeuser.user;
                    let isRSVP = false;
                        if(value.selectedEvent.hasOwnProperty('event')){ 
                            selectedEvent = value.selectedEvent;
                            userId = user.id;
                            isOwnerOfEvent = selectedEvent.event.organizer === userId;
                            isRSVP = value.selectedEvent.attendees.find((attendee) => {
                                return parseInt(attendee.user_id) === parseInt(user.id)
                            }) 
                            if(isOwnerOfEvent){
                                buttons = <div className="button-group"><div className="button-container"><button onClick={(e) => this.editEvent(e, parseInt(selectedEvent.event.id))}>Edit</button></div><div className="button-container"><button onClick={(e) => this.deleteEvent(e, parseInt(selectedEvent.event.id))}>Delete</button></div></div>;    
                            } else if(isRSVP){
                                buttons = <div className="button-group"><div className="button-container"><button onClick={(e) => this.removeRSVP(e, parseInt(selectedEvent.event.id))}>Cancel RSVP</button></div></div>;
                            } else if(!isRSVP){
                                buttons = <div className="button-group"><div className="button-container"><button onClick={(e) => this.addRSVP(e, parseInt(selectedEvent.event.id))}>RSVP</button></div></div>
                            }
                        }
                    return(
                        <section>
                            <table className="event-details">
                                <thead><tr><th>{ selectedEvent ? selectedEvent.event.title : 'Loading...' }</th></tr></thead>
                                <tbody>
                                    <tr>
                                        <td>Organizer:</td><td>{ selectedEvent ? selectedEvent.event.organizer_name : 'Loading...' }</td>
                                    </tr>
                                    <tr>
                                        <td>Restaurant:</td><td>{ selectedEvent ? selectedEvent.event.restaurant : 'Loading...' }</td>
                                    </tr>
                                    <tr>
                                        <td>Address:</td><td>{ selectedEvent ? selectedEvent.event.address : 'Loading...' }</td>
                                    </tr>
                                    <tr>
                                        <td>Description:</td><td>{ selectedEvent ? selectedEvent.event.description : 'Loading...' }</td>
                                    </tr>
                                    <tr>
                                        <td>Event Purpose:</td><td>{ selectedEvent ? selectedEvent.event.event_purpose: 'Loading...' }</td>
                                    </tr>
                                    <tr>
                                        <td>Date:</td><td>{ selectedEvent ? moment(selectedEvent.event.date).format('MM/DD/YY') : 'Loading...' }</td>
                                    </tr>
                                    <tr>
                                        <td>Attendees:</td><td>{selectedEvent ? selectedEvent.attendees.length : 'Loading...'}</td>
                                    </tr>
                                </tbody>
                            </table>
                            { buttons }
                        </section>
                    )
                }}
            </ContextManager.Consumer>
        );
    }
}

export default withRouter(EventDetails);