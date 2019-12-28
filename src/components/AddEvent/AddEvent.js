import React from 'react';
import './AddEvent.css';
import EventsApiService from '../../services/events-api-service';
import moment from 'moment';
import ContextManager from '../../context/context-manager';

export default class AddEvent extends React.Component{
    static contextType = ContextManager;
    
    handleFormSubmit = e => {
        e.preventDefault();
        const { title, restaurant, restaurantAddress, eventDescription, eventDate, purpose } = e.target;
        const event_date = new Date(eventDate.value);
        const newEvent = {
            title: title.value,
            event_purpose: purpose.value,
            restaurant: restaurant.value,
            address : restaurantAddress.value,
            date : moment(event_date).format('MM/DD/YYYY'),
            time : moment(event_date).format('hh:mm A'),
            description : eventDescription.value,
        }

        if(purpose.value.toLowerCase().includes('singles')){
            newEvent.singles_only = true;
        } else {
            newEvent.singles_only = false;
        }

        EventsApiService.postEvent(newEvent)
        .then((event) => {
            this.context.getAllEventsForUser();
            this.props.history.push('/dashboard');
        })
    }
    render(){
        return(
            <form onSubmit={this.handleFormSubmit} id="add-event-form">
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" placeholder="Wine & Networking" name="title" required />
                </div>
                <div>
                    <label htmlFor="restaurant">Restaurant:</label>
                    <input type="text" id="restaurant" placeholder="Water Grill" name="restaurant" required />
                </div>
                <div>
                    <label htmlFor="restaurant-address">Restaurant Address:</label>
                    <input type="text" id="restaurant-address" placeholder="123 Restaurant Lane" name="restaurantAddress" required/>
                </div>
                <div>
                    <label htmlFor="event-description">Description:</label>
                    <textarea id="event-description" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis finibus orci, vel auctor dolor vulputate vitae. In fringilla tristique dui vitae blandit." name="eventDescription" required>
                    </textarea>
                </div>
                <div>
                    <label htmlFor="event-date">Date:</label>
                    <input type="datetime-local" id="event-date" name="eventDate" required />
                </div>
                <div>
                    <label htmlFor="purpose">Purpose:</label>
                    <select id="purpose" name="purpose" required>
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