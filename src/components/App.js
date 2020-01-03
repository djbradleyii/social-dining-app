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
import EditEvent from './EditEvent/EditEvent';
import EditUser from './EditUser/EditUser';
import './App.css';
import ContextManager from '../context/context-manager';
import TokenService from '../services/token-service';
import ActiveUserService from '../services/activeuser-service';
//import config from '../config';
//import AuthApiService from '../services/auth-api-service';
import UsersApiService from '../services/users-api-service';
//import EventsApiService from '../services/events-api-service';
//import AttendeesApiService from '../services/attendees-api-service';
import EventsApiService from '../services/events-api-service';
import SelectedUserDetails from './SelectedUserDetails/SelectedUserDetails';
import AccountCreated from './AccountCreated/AccountCreated';
import LogoutSuccessful from './LogoutSuccessful/LogoutSuccessful';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loggedInUserData: {},
      events: [],
      selectedEvent: {},
      errorMessage: null,
    }
  }

  getAllEventsForUser = () => {
    UsersApiService.getAllEventsForUser()
      .then(usersData => {
        ActiveUserService.saveUserData(usersData)
        this.setState({
          loggedInUserData: usersData
        })        
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  getSelectedEvent = (event_id) => {
    EventsApiService.getAllAttendeesByEventId(event_id)
    .then((event) => { 
      this.setState({
        selectedEvent: event
      })
    })
  }

  updateKeyword = (keyword) => {
    this.setState({
      keyword
    })
    this.getAllEvents();
  }

  updateEventId = (event_id) => {
    this.getSelectedEvent(event_id);
  }

  updateErrorMessage = (error) => {
    this.setState({
      errorMessage: error
    });
  }

  getAllEvents = () => {
    const { keyword } = this.state;
    EventsApiService.getAllEvents(keyword)
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

  scrollToErrorMessage = () => {
    window.scrollTo(0, 0);
  }

  componentDidMount(){
    if(TokenService.hasAuthToken()){
      this.getAllEventsForUser();
      this.getAllEvents();
    }
  }

  render(){
    const contextValue = {
      updateKeyword: this.updateKeyword,
      loggedInUserData: this.state.loggedInUserData,
      events: this.state.events,
      errorMessage: this.state.errorMessage,
      eventAttendees: this.state.eventAttendees,
      getSelectedEvent: this.getSelectedEvent,
      selectedEvent: this.state.selectedEvent,
      getAllEvents: this.getAllEvents,
      getAllEventsForUser: this.getAllEventsForUser, 
      updateErrorMessage: this.updateErrorMessage,
      updateEventId: this.updateEventId
    }
    return(
      <ContextManager.Provider value={contextValue}>
        <div className='App'>
          <Route path='/' component={Header} />
          <main aria-live='polite'>
            <Switch>
              <Route exact path='/registered' component={AccountCreated} />
              <Route exact path='/logout' component={LogoutSuccessful} />
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/register' component={RegisterPage} />
              <Route exact path='/signin' component={SignInPage} />
              <Route exact path='/dashboard' component={UserDashboard} />
              <Route exact path='/search' component={SearchPage} />
              <Route exact path='/event' component={AddEvent} />
              <Route exact path='/event/:eventId' component={EventPage} />
              <Route exact path='/signout' component={LandingPage} />
              <Route exact path='/edit/user/:userId' component={EditUser} />
              <Route exact path='/edit/event/:eventId' component={EditEvent} />
              <Route exact path='/info/:userId' component={SelectedUserDetails} />
              <Route component={PageNotFound} />
            </Switch>
          </main>
          <Route path='/' component={Footer} />
        </div>
      </ContextManager.Provider>
    );
  };
}

export default withRouter(App);
