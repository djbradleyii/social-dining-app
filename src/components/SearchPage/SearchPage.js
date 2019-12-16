import React from 'react';
import './SearchPage.css';
import ContextManager from '../../context/context-manager';


export default class SearchPage extends React.Component{
    render(){
        return(
            <ContextManager.Consumer>
                {(value) => {
/*                             getEvents = () => {
                                let { term, date, searchType} = this.state.searchOptions;
                                let events = this.state.events;
                        
                                if(term){
                                    if(searchType.toLowerCase() === "purpose".toLowerCase()){
                                        events = events.filter((event) => {
                                            return event.purpose.toLowerCase().includes(term.toLowerCase());
                                        });
                                    }else if(searchType.toLowerCase() === "restaurant".toLowerCase()){
                                        events = events.filter((event) => {
                                            return event.restaurant.toLowerCase().includes(term.toLowerCase());
                                        });
                                    }
                                }
                        
                                if(date){
                                    events = events.filter((event) => {
                                        return event.date >= date;
                                    });
                                }
                        
                                events = events.map((event, i) => {
                                    const eventPageId = event.id;
                                    const eventPageURL = `/event/${eventPageId}`;
                                return(
                                    <tr>
                                    <td>{event.title}</td><td>{event.organizer}</td><td>{event.purpose}</td><td>{event.restaurant}</td><td>{event.date}</td>
                                    </tr>
                                ); 
                            });
                        
                                return events;
                            }
                        
                            handleFormSubmission = e => {
                                e.preventDefault();
                                let { term, eventDate, searchType } = e.target;
                                if(!term){
                                    term = '';
                                }
                        
                                if(!eventDate){
                                    eventDate = '';
                                }
                        
                                const searchOptions = {
                                    term: term.value,
                                    date: eventDate.value,
                                    searchType: searchType.value
                                };
                        
                                this.setState({searchOptions});
                            } */
                    return(
                        <div>
                            <form id="search-form">
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
                                        {/* this.getEvents() */}
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