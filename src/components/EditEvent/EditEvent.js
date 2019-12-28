import React from 'react';
import './EditEvent.css';
import EventsApiService from '../../services/events-api-service';
import ContextManager from '../../context/context-manager';

export default class EditEvent extends React.Component{
    static contextType = ContextManager;

    handleFormSubmit = (e, event_id) => {
        e.preventDefault();

        const { title, eventDescription } = e.target;

        const eventUpdates = {
            title: title.value,
            description : eventDescription.value,
        }

        EventsApiService.updateEventById(event_id, eventUpdates)
        .then((event) => {
            this.context.getAllEventsForUser();
            window.localStorage.removeItem('event');
            this.props.history.push(`/event/${event_id}`);
        })
    }

    render(){
        let eventDetails = window.localStorage.getItem('event');
        eventDetails = JSON.parse(eventDetails);
        console.log(eventDetails);
        return(
            <form onSubmit={(e) => this.handleFormSubmit(e, eventDetails.event.id)} id="add-event-form">
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" placeholder="Wine & Networking" name="title" required defaultValue={eventDetails.event.title} />
                </div>
                <div>
                    <label htmlFor="restaurant">Restaurant:</label>
                    <input type="text" id="restaurant" placeholder="Water Grill" name="restaurant" required disabled/>
                </div>
                <div>
                    <label htmlFor="restaurant-address">Restaurant Address:</label>
                    <input type="text" id="restaurant-address" placeholder="123 Restaurant Lane" name="restaurantAddress" required defaultValue={eventDetails.event.address} disabled/>
                </div>
                <div>
                    <label htmlFor="event-description">Description:</label>
                    <textarea id="event-description" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis finibus orci, vel auctor dolor vulputate vitae. In fringilla tristique dui vitae blandit." name="eventDescription" required  defaultValue={eventDetails.event.description}> 
                    </textarea>
                </div>
                <div>
                    <label htmlFor="purpose">Purpose:</label>
                    <select id="purpose" name="purpose" required disabled>
                        <option value="Social">Social</option>
                        <option value="Networking">Networking</option>
                        <option value="Game Night">Game Night</option>
                        <option value="Singles Night">Singles Night</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>    
            </form>
        );
    }
}