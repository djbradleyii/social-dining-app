import TokenService from '../services/token-service'
import config from '../config'

const UsersApiService = {
    getUsers() {
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
      
}

export default UsersApiService;