import React from 'react';
import EVENTS from '../events';
import './AddEvent.css';

export default class AddEvent extends React.Component{
    handleFormSubmit = e => {
        e.preventDefault();
        const { restaurant, restaurantAddress, eventDescription, eventDate, purpose } = e.target;
        //const { title, ageRange} = e.target;
        const userId = parseInt(localStorage.getItem("userId"));
        const users = this.props.users;
        const user = users.find((user) => {
            return user.id === userId;
        });

        const newEvent = {
            id: EVENTS.length + 1,
            organizer : user.fname,
            purpose: purpose.value,
            restaurant: restaurant.value,
            address : restaurantAddress.value,
            date : eventDate.value,
            time : "05:30PM",
            description : eventDescription.value,
            singlesOnly : "No",
            attendees : 0  
        }

        user.events.push(newEvent.id);
        EVENTS.push(newEvent);  
        localStorage.setItem("eventId", newEvent.id);
        this.props.history.push(`/event/${newEvent.id}`);
    }
    render(){
        return(
            <form onSubmit={this.handleFormSubmit} id="add-event-form">
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" placeholder="Wine & Networking" name="title" />
                </div>
                <div>
                    <label htmlFor="restaurant">Restaurant:</label>
                    <input type="text" id="restaurant" placeholder="Water Grill" name="restaurant" />
                </div>
                <div>
                    <label htmlFor="restaurant-address">Restaurant Address:</label>
                    <input type="text" id="restaurant-address" placeholder="123 Restaurant Lane" name="restaurantAddress" />
                </div>
                <div>
                    <label htmlFor="event-description">Description:</label>
                    <textarea id="event-description" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis finibus orci, vel auctor dolor vulputate vitae. In fringilla tristique dui vitae blandit." name="eventDescription">
                    </textarea>
                </div>
                <div>
                    <label htmlFor="event-date">Date:</label>
                    <input type="datetime-local" id="event-date" name="eventDate" />
                </div>
                <div>
                    <label htmlFor="purpose">Purpose:</label>
                    <select id="purpose" name="purpose">
                        <option value="social">Social</option>
                        <option value="networking">Networking</option>
                        <option value="game night">Game Night</option>
                        <option value="singles night">Singles Night</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="age-range">Minimum Age Requirement:</label>
                    <input type="number" id="age-range" min="18" max="99" name="ageRange" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>    
            </form>
        );
    }
}