import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import USERS from './users';
import EVENTS from './events';
import App from './App';
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

it('renders App Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
  <App users={USERS}/>
  </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Header Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Header users={USERS} />
    </BrowserRouter>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Landing Page Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Register Page Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <RegisterPage />
    </BrowserRouter>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Sign In Page Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SignInPage />
    </BrowserRouter>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders UserDashboard Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <UserDashboard users={USERS}/>
    </BrowserRouter>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Search Page Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SearchPage />
    </BrowserRouter>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Add Event Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AddEvent />
    </BrowserRouter>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Event Page Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <EventPage events={EVENTS} />
    </BrowserRouter>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Footer Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Page Not Found Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <PageNotFound events={EVENTS}/>
    </BrowserRouter>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});