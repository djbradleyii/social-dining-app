import TokenService from '../services/token-service'
import config from '../config'

const AttendeesApiService = {
    getAllAttendees() {
        return fetch(`${config.API_ENDPOINT}/attendees`, {
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
      getAttendeeById(attendeeId) {
        return fetch(`${config.API_ENDPOINT}/attendees/${attendeeId}`, {
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
      postAttendee(newAttendee) {
        return fetch(`${config.API_ENDPOINT}/attendees`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${TokenService.getAuthToken()}`,
          },
          body: JSON.stringify({
            newAttendee
          }),
        })
          .then(response =>{
            if(!response.ok){
              throw new Error('Something went wrong. Please try again later.');
            }
            return response.json();
          })
      },
      deleteAttendee(attendeeId) {
        return fetch(`${config.API_ENDPOINT}/evens/${attendeeId}`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${TokenService.getAuthToken()}`,
          }
        })
          .then(response =>{
            if(!response.ok){
              throw new Error('Something went wrong. Please try again later.');
            }
            return response.json();
          })
      }
}

export default AttendeesApiService;