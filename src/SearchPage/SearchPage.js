import React from 'react';
import EVENTS from '../events';
import { Link } from 'react-router-dom';
//import EventsList from '../EventsList/EventsList';
import './SearchPage.css';
import { EventEmitter } from 'events';


export default class SearchPage extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={this.handleFormSubmission} id="search-form">
                    <div>
                        <label htmlFor="search">Search:</label>
                        <input type="search" id="search" placeholder="Wine &amp; Networking" name="term" />
                        {/* <img src="" /> */}
                    </div>
                    <div>
                        <label className="search-type-label">Search type:</label>
                        <span className="search-type">Event Purpose <input type="radio" name="searchType" value="purpose" defaultChecked /></span>
                        <span className="search-type">Restaurant <input type="radio" name="searchType" value="restaurant" /></span>
                    </div>
{/*                     <div>
                        <label htmlFor="event-date-search">Date:</label>
                        <input type="date" id="event-date-search" name="eventDate" />
                    </div> */}
                    <div>
                        <button type="submit">Submit</button>
                    </div>    
                </form>
                <section className="events-list">
                <table className="events-list-table">
                    <thead><tr><th>Event List:</th></tr></thead>
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Organizer</th>
                            <th>Purpose</th>
                            <th>Restaurant</th>
                            <th>Date</th>
                        </tr>
                        {this.getEvents()}
                    </tbody>
                </table>
            </section>
            </div>
        );
    }
}