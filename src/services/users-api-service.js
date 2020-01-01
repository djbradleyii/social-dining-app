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
              return response.json().then((responseJson) => {return Promise.reject(responseJson)})
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
              return response.json().then((responseJson) => {return Promise.reject(responseJson)})
            }
            return response.json();
          })
      },
      getAllEventsForUser() {
          //fetch events for the individual user
        return fetch(`${config.API_ENDPOINT}/users/all/events`, {
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`
            },
        })
          .then(response =>{
            if(!response.ok){
              return response.json().then((responseJson) => {return Promise.reject(responseJson)})
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
              return response.json().then((responseJson) => {return Promise.reject(responseJson)})
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
          }),
        })
          .then(response =>{
            if(!response.ok){
              return response.json().then((responseJson) => {return Promise.reject(responseJson)})
            }
            return response.json();
          })
      },
      updateUserById(userUpdates) {
        return fetch(`${config.API_ENDPOINT}/users`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${TokenService.getAuthToken()}`,
          },
          body: JSON.stringify(userUpdates),
        })
          .then(response =>{
            if(!response.ok){
              return response.json().then((responseJson) => {return Promise.reject(responseJson)})
            }
          })
      }  
}

export default UsersApiService;