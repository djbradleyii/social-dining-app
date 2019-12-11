import React from 'react';
import EventDetails from '../EventDetails/EventDetails';
import EVENTS from '../events';
import './EventPage.css';

function EventPage(props){
    return(
        <EventDetails events={EVENTS} />
    );
}

export default EventPage;