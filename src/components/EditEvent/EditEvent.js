import React from 'react';
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
            this.context.clearErrorMessage();
            this.props.history.push(`/event/${event_id}`);
        })
        .catch(res => {
            this.context.updateErrorMessage('Oops: '+ res.error);
            this.context.scrollToErrorMessage();
        })
    }

    render(){
        let eventDetails = this.context.selectedEvent;
        return(
            <form onSubmit={(e) => this.handleFormSubmit(e, eventDetails.event.id)} id="add-event-form">
                <div className="error-message">{!!this.context.errorMessage && this.context.errorMessage}</div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" placeholder="ex. Wine &amp; Networking" name="title" required defaultValue={eventDetails.event.title} />
                </div>
                <div>
                    <label htmlFor="restaurant">Restaurant:</label>
                    <input type="text" id="restaurant" placeholder="ex. Water Grill" name="restaurant" required defaultValue={eventDetails.event.restaurant} disabled/>
                </div>
                <div>
                    <label htmlFor="restaurant-address">Restaurant Address:</label>
                    <input type="text" id="restaurant-address" placeholder="ex. 123 Restaurant Lane" name="restaurantAddress" required defaultValue={eventDetails.event.address} disabled/>
                </div>
                <div>
                    <label htmlFor="event-description">Description:</label>
                    <textarea id="event-description" placeholder="ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis finibus orci, vel auctor dolor vulputate vitae. In fringilla tristique dui vitae blandit." name="eventDescription" required  defaultValue={eventDetails.event.description}> 
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