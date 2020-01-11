import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EventsApiService from '../../services/events-api-service';
import ActiveUserServicer from '../../services/activeuser-service';
import EditEvent from './EditEvent';

it.only('renders EditEvent Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
      <EditEvent />
      </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
