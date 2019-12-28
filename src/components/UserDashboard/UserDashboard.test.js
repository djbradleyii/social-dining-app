import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import UserDashboard from './UserDashboard';

it('renders UserDashboard Component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <UserDashboard />
      </BrowserRouter>
      , div
    );
    ReactDOM.unmountComponentAtNode(div);
  });