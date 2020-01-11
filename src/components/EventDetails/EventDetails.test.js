import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EventDetails from './EventDetails';

it('renders EventDetails Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
      <EventDetails />
      </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
