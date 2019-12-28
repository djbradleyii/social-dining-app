import TokenService from '../services/token-service'
import config from '../config'

const EventsApiService = {
    getAllEvents() {
        return fetch(`${config.API_ENDPOINT}/events`, {
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`
            },
        })
          .then(response => {
            if(!response.ok){
              throw new Error('Something went wrong. Please try again later.');
            }
            return response.json();
          })
      },
      getEventById(eventId) {
        return fetch(`${config.API_ENDPOINT}/events/${eventId}`, {
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`
            },
        })
          .then(response => {
            if(!response.ok){
              throw new Error('Something went wrong. Please try again later.');
            }
            return response.json();
          })
      },
      getEventByKeyword(keyword) {
          //fetch events based on keyword
        let queryString = keyword ? `?keyword=${keyword}` : ``;
        return fetch(`${config.API_ENDPOINT}/events/${queryString}`, {
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`
            },
        })
          .then(response =>{
            if(!response.ok){
              throw new Error('Something went wrong. Please try again later.');
            }
            return response.json();
          })
      },
      getAllAttendeesByEventId(eventId) {
      return fetch(`${config.API_ENDPOINT}/events/${eventId}`, {
          headers: {
              'authorization': `Bearer ${TokenService.getAuthToken()}`
          },
      })
        .then(response =>{
          if(!response.ok){
            throw new Error('Something went wrong. Please try again later.');
          }
          return response.json();
        })
    },
      postEvent(newEvent) {
        return fetch(`${config.API_ENDPOINT}/events`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${TokenService.getAuthToken()}`,
          },
          body: JSON.stringify(newEvent),
        })
          .then(response =>{
            if(!response.ok){
              throw new Error('Something went wrong. Please try again later.');
            }
            return response.json();
          })
      },
      deleteEvent(eventId) {
        return fetch(`${config.API_ENDPOINT}/events/${eventId}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${TokenService.getAuthToken()}`,
          }
        })
          .then(response => {
            if(!response.ok){
              throw new Error('Something went wrong. Please try again later.');
            }
          })
      },
      updateEventById(eventId, eventUpdates) {
        return fetch(`${config.API_ENDPOINT}/events/${eventId}`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${TokenService.getAuthToken()}`,
          },
          body: JSON.stringify(eventUpdates),
        })
          .then(response =>{
            if(!response.ok){
              throw new Error('Something went wrong. Please try again later.');
            }
          })
      }   
}

export default EventsApiService;