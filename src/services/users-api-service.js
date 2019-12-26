import TokenService from '../services/token-service'
import config from '../config'

const UsersApiService = {
    getAllUsers() {
        return fetch(`${config.API_ENDPOINT}/users`, {
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
      getUserById(user_id) {
        return fetch(`${config.API_ENDPOINT}/users/${user_id}`, {
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
      getAllEventsByUserId() {
          //fetch events for the individual user
        return fetch(`${config.API_ENDPOINT}/users/all/events`, {
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
      postUser(newUser) {
        return fetch(`${config.API_ENDPOINT}/users`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${TokenService.getAuthToken()}`,
          },
          body: JSON.stringify({
            newUser,
          }),
        })
          .then(response =>{
            if(!response.ok){
              throw new Error('Something went wrong. Please try again later.');
            }
            return response.json();
          })
      },
      deleteUser() {
        return fetch(`${config.API_ENDPOINT}/users`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${TokenService.getAuthToken()}`,
          },
          body: JSON.stringify({
            id: userId,
          }),
        })
          .then(response =>{
            if(!response.ok){
              throw new Error('Something went wrong. Please try again later.');
            }
            return response.json();
          })
      },
      updateUserById(userId, userUpdates) {
        return fetch(`${config.API_ENDPOINT}/users/${userId}`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${TokenService.getAuthToken()}`,
          },
          body: JSON.stringify({
            userId,
            userUpdates
          }),
        })
          .then(response =>{
            if(!response.ok){
              throw new Error('Something went wrong. Please try again later.');
            }
            return response.json();
          })
      }  
}

export default UsersApiService;