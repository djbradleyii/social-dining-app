import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EventPage from './EventPage';

it('renders Event Page Component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <EventPage />
      </BrowserRouter>
      , div
    );
    ReactDOM.unmountComponentAtNode(div);
  });