import React from 'react';
import { Route, Switch } from 'react-router-dom';
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

export default class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <Route path="/" render={({history}) => <Header users={this.props.users} history={history}/>} />
        <main aria-live='polite'>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path="/register" render={({history}) => <RegisterPage users={this.props.users} history={history}/>} />
            <Route path="/signin" render={({history}) => <SignInPage users={this.props.users} history={history}/>} />
            <Route exact path="/dashboard/:userId" render={({history}) => <UserDashboard users={this.props.users} history={history}/>} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/event" render={({history}) => <AddEvent users={this.props.users} history={history}/>} />
            <Route exact path="/event/:eventId" component={EventPage} />
            <Route exact path="/signout" component={LandingPage} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
        <Route path="/" component={Footer} />
      </div>
    );
  };
}
