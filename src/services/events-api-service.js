import TokenService from './token-service';
import config from '../config';

const EventsApiService = {
  getAllEvents() {
    return fetch(`${config.API_ENDPOINT}/events`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((responseJson) => Promise.reject(responseJson));
        }
        return response.json();
      });
  },
  getEventById(eventId) {
    return fetch(`${config.API_ENDPOINT}/events/${eventId}`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((responseJson) => Promise.reject(responseJson));
        }
        return response.json();
      });
  },
  getEventByKeyword(keyword) {
    // fetch events based on keyword
    const queryString = keyword ? `?keyword=${keyword}` : '';
    return fetch(`${config.API_ENDPOINT}/events/${queryString}`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((responseJson) => Promise.reject(responseJson));
        }
        return response.json();
      });
  },
  getAllAttendeesByEventId(eventId) {
    return fetch(`${config.API_ENDPOINT}/events/${eventId}`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          window.location.assign('/notfound');
          return response.json().then((responseJson) => Promise.reject(responseJson));
        }
        return response.json();
      })
      .catch((error) => {
        window.location.assign('/notfound');
        console.error(error);
      });
  },
  postEvent(newEvent) {
    return fetch(`${config.API_ENDPOINT}/events`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newEvent),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((responseJson) => Promise.reject(responseJson));
        }
        return response.json();
      });
  },
  deleteEvent(eventId) {
    return fetch(`${config.API_ENDPOINT}/events/${eventId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((responseJson) => Promise.reject(responseJson));
        }
      });
  },
  updateEventById(eventId, eventUpdates) {
    return fetch(`${config.API_ENDPOINT}/events/${eventId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(eventUpdates),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((responseJson) => Promise.reject(responseJson));
        }
      });
  },
};

export default EventsApiService;
