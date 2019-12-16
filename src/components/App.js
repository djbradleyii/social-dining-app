import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import RegisterPage from './RegisterPage/RegisterPage';
import SignInPage from './SignInPage/SignInPage';
import UserDashboard from './UserDashboard/UserDashboard';
import SearchPage from './SearchPage/SearchPage';
import AddEvent from './AddEvent/AddEvent';
import EventPage from './EventPage/EventPage';
import Footer from './Footer/Footer';
import PageNotFound from './PageNotFound/PageNotFound';
import './App.css';
import ContextManager from '../context/context-manager';
import TokenService from '../services/token-service';
import config from '../config';
import AuthApiService from '../services/auth-api-service';

class App extends React.Component{


/*     static defaultProps = {
      color: '#01A800', // green
    };
    render() {
       content not shown 
    }
  }
  We're not going to explain the details of this syntax. The rule for making default props is to create a defaultProps property for the class with static defaultProps and then assign an object to that property. The keys of that object are the props you want to have defaults for and the values are the default values you want to assign. */
  constructor(props){
    super(props);
    this.state = {
      users: [],
      events: [],
      attendees: [],
      error: null,
    }
  }

  addUser = () => {

  }

  editUser = () => {

  }

  deleteUser = () => {

  }
  
  addEvent = () => {

  }
  
  editEvent = () => {

  }

  deleteEvent = () => {

  }

  addAttendee = () => {

  }

  deleteAttendee = () => {

  }

  getAllUsers = () => {
      return fetch(`${config.API_ENDPOINT}/users`, {
        headers: {
          'authorization': `Bearer ${TokenService.getAuthToken()}`
        }
      })
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong, please try again later.')
        }
        return response.json();
      })
      .then(eventsData => {
        this.setState({
          events: eventsData
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  getAllEvents = () => {
    return fetch(`${config.API_ENDPOINT}/events`, {
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(response => {
      if(!response.ok) {
        throw new Error('Something went wrong, please try again later.')
      }
      return response.json();
    })
    .then(usersData => {
      this.setState({
        users: usersData
      })
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
  }

  getAllAttendees = () => {
    return fetch(`${config.API_ENDPOINT}/users`, {
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(response => {
      if(!response.ok) {
        throw new Error('Something went wrong, please try again later.')
      }
      return response.json();
    })
    .then(attendeesData => {
      this.setState({
        attendees: attendeesData
      })
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
  }

  handleRegistrationSuccess = (newUser) => {

  }

  render(){
    const contextValue = {
      users: this.state.users,
      events: this.state.events,
      attendees: this.state.attendees,
      getAllUsers: this.getAllUsers,
      addUser: this.addUser,
      editUser: this.editUser,
      deleteUser: this.deleteUser,
      getAllEvents: this.getAllEvents,
      addEvent: this.addEvent,
      editEvent: this.editEvent,
      deleteEvent: this.deleteEvent,
      getAllAttendees: this.getAllAttendees,
      addAttendee: this.addAttendee,
      deleteAttendee: this.deleteAttendee,
      handleRegistrationSuccess: this.handleRegistrationSuccess
    }
    return(
      <ContextManager.Provider value={contextValue}>
        <div className='App'>
          <Route path="/" component={Header} />
          <main aria-live='polite'>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path="/register" render={({history}) => {return <RegisterPage onRegistrationSuccess={this.handleRegistrationSuccess} />}} />
              <Route exact path="/signin" component={SignInPage} />
              <Route exact path="/dashboard/:userId" component={UserDashboard} />
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/event" component={AddEvent} />
              <Route exact path="/event/:eventId" component={EventPage} />
              <Route exact path="/signout" component={LandingPage} />
              <Route component={PageNotFound} />
            </Switch>
          </main>
          <Route path="/" component={Footer} />
        </div>
      </ContextManager.Provider>
    );
  };
}

export default withRouter(App);
