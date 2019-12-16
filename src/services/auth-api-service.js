import config from '../config'

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(response =>{
        if(!response.ok){
          throw new Error('Something went wrong. Please try again later.');
        }
        return response.json();
      })
  },
   postUser(user) {
     return fetch(`${config.API_ENDPOINT}/users`, {
       method: 'POST',
       headers: {
         'content-type': 'application/json',
       },
       body: JSON.stringify(user),
     })
      .then(response =>{
        if(!response.ok){
          throw new Error('Something went wrong. Please try again later.');
        }
        return response.json();
      })
   },
   getUserId(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response =>{
        if(!response.ok){
          throw new Error('Something went wrong. Please try again later.');
        }
        return response.json();
      })
      .then((users) => {
      })
  },
}

export default AuthApiService