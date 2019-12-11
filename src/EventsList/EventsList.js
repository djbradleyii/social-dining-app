import React from 'react';
import './EventsList.css';

export default class SearchPage extends React.Component{  
    render(){
/*         const events = this.props.events.map((event, i) => {
            let eventName;
            if(event.purpose === 'Social' || event.purpose === 'Networking'){
                eventName = `${event.purpose} event at ${event.restaurant}`;
            }else{
                eventName = `${event.purpose} at ${event.restaurant}`;
            }
            
        return <li key={i}>{eventName} on {event.date}</li>;
        }); */
        return(
            <section className="events-list">
                <h2>Event List:</h2>
                <ul>
                    {/*  events  */}
                </ul>
            </section>
        );
    }
}